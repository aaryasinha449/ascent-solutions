import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
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
  { src: hero1, title: "Luxury Glass Capsule Elevator", category: "Premium Residential", span: "md:col-span-2 md:row-span-2" },
  { src: hero2, title: "Mirror Interior Elevator", category: "Luxury Commercial" },
  { src: hero3, title: "Commercial Elevator Bank", category: "Corporate Office" },
  { src: productPassenger, title: "Passenger Elevator", category: "Commercial" },
  { src: hero4, title: "Panoramic Glass Tower Lift", category: "High-Rise" },
  { src: productCapsule, title: "Capsule Elevator Atrium", category: "Luxury Retail" },
  { src: productFreight, title: "Freight Elevator", category: "Industrial" },
  { src: productHospital, title: "Hospital Lift", category: "Healthcare" },
  { src: productHome, title: "Residential Home Lift", category: "Residential" },
  { src: maintenance, title: "AMC Maintenance Service", category: "Service" },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryItems.map(({ src, title, category, span }, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${span || ""}`}
              onClick={() => setSelected(i)}
            >
              <img
                src={src}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2" size={28} />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-3">
                  <p className="text-white font-heading font-bold text-sm">{title}</p>
                  <p className="text-primary text-xs font-body mt-0.5">{category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[selected].src}
              alt={galleryItems[selected].title}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-heading font-bold text-lg">{galleryItems[selected].title}</p>
              <p className="text-primary font-body text-sm mt-1">{galleryItems[selected].category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
