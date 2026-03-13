import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import hero1 from "@/assets/hero-elevator-1.jpg";
import hero2 from "@/assets/hero-elevator-2.jpg";
import hero3 from "@/assets/hero-elevator-3.jpg";
import hero4 from "@/assets/hero-elevator-4.jpg";
import productPassenger from "@/assets/product-passenger-elevator.jpg";
import productCapsule from "@/assets/product-capsule-elevator.jpg";
import productFreight from "@/assets/product-freight-elevator.jpg";
import productHospital from "@/assets/product-hospital-elevator.jpg";
import productHome from "@/assets/product-home-elevator.jpg";
import maintenance from "@/assets/service-maintenance.jpg";

const galleryItems = [
  { src: hero1, title: "Luxury Glass Capsule Elevator", category: "Premium Residential", large: true },
  { src: hero2, title: "Mirror Interior Elevator", category: "Luxury Commercial" },
  { src: hero3, title: "Commercial Elevator Bank", category: "Corporate Office" },
  { src: productPassenger, title: "Passenger Elevator", category: "Commercial" },
  { src: hero4, title: "Panoramic Glass Tower Lift", category: "High-Rise", large: true },
  { src: productCapsule, title: "Capsule Elevator Atrium", category: "Luxury Retail" },
  { src: productFreight, title: "Freight Elevator", category: "Industrial" },
  { src: productHospital, title: "Hospital Lift", category: "Healthcare" },
  { src: productHome, title: "Residential Home Lift", category: "Residential" },
  { src: maintenance, title: "AMC Maintenance Service", category: "Service" },
];

const filters = ["All", "Commercial", "Residential", "Healthcare", "Industrial", "Luxury"];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, inView } = useInView(0.1);

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item =>
        item.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        activeFilter.toLowerCase().includes(item.category.toLowerCase())
      );

  const openLightbox = (index: number) => setSelected(index);

  const navLightbox = (dir: "prev" | "next") => {
    if (selected === null) return;
    const total = filtered.length;
    setSelected(dir === "prev" ? (selected - 1 + total) % total : (selected + 1) % total);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-section-alt">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">
              Our Work
            </span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            Project <span className="text-primary">Gallery</span>
          </h2>
          <p className="section-subheading">
            A showcase of our completed elevator installations across India — from luxury
            residential towers to large commercial complexes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-background border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px]">
          {filtered.map(({ src, title, category, large }, i) => (
            <div
              key={`${activeFilter}-${i}`}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer animate-fade-in ${large ? "md:col-span-2 md:row-span-2" : ""}`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Zoom icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ZoomIn className="text-white" size={18} />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-heading font-bold text-sm leading-tight">{title}</p>
                <span className="inline-block bg-primary text-primary-foreground text-xs font-body px-2 py-0.5 rounded-full mt-1">
                  {category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Item count */}
        <p className="text-center font-body text-sm text-muted-foreground mt-6">
          Showing <span className="text-primary font-semibold">{filtered.length}</span> projects
        </p>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
          >
            <X size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navLightbox("prev"); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navLightbox("next"); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
          >
            <ChevronRight size={22} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[selected].src}
              alt={filtered[selected].title}
              className="w-full max-h-[75vh] object-contain rounded-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-heading font-bold text-lg">{filtered[selected].title}</p>
              <span className="inline-block bg-primary text-primary-foreground text-xs font-body px-3 py-1 rounded-full mt-1.5">
                {filtered[selected].category}
              </span>
              <p className="text-white/40 font-body text-xs mt-2">{selected + 1} / {filtered.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
