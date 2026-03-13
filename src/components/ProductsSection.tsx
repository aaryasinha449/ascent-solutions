import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import passengerImg from "@/assets/product-passenger-elevator.jpg";
import hospitalImg from "@/assets/product-hospital-elevator.jpg";
import freightImg from "@/assets/product-freight-elevator.jpg";
import capsuleImg from "@/assets/product-capsule-elevator.jpg";
import homeImg from "@/assets/product-home-elevator.jpg";
import hero1 from "@/assets/hero-elevator-1.jpg";

const products = [
  {
    image: passengerImg,
    title: "Passenger Elevators",
    category: "Commercial",
    badge: "Most Popular",
    desc: "High-performance passenger elevators for offices, malls, and commercial buildings. Available in 4–20 person capacity with customizable interiors.",
    features: ["Speed: 0.5 – 4 m/s", "Capacity: 4–20 persons", "Custom cabin finishes", "Energy-efficient drive"],
  },
  {
    image: hospitalImg,
    title: "Hospital Elevators",
    category: "Healthcare",
    badge: "Specialized",
    desc: "Wide-door, stretcher-compatible elevators designed for hospitals and medical facilities. Smooth operation and easy cleaning surfaces.",
    features: ["Stretcher compatible", "Wide cabin doors", "Antibacterial surfaces", "Emergency power backup"],
  },
  {
    image: freightImg,
    title: "Freight Elevators",
    category: "Industrial",
    badge: "Heavy Duty",
    desc: "Heavy-duty freight elevators for warehouses, factories, and industrial complexes. High load capacity with robust construction.",
    features: ["Load: 500 – 5000 kg", "Industrial grade build", "Pallet truck compatible", "Extra heavy duty"],
  },
  {
    image: capsuleImg,
    title: "Capsule Elevators",
    category: "Luxury",
    badge: "Premium",
    desc: "Panoramic glass capsule elevators that add a dramatic architectural statement to malls, hotels, and premium commercial spaces.",
    features: ["360° glass view", "Architectural design", "Hotel & mall grade", "LED ambient lighting"],
  },
  {
    image: homeImg,
    title: "Home Elevators",
    category: "Residential",
    badge: "Home Friendly",
    desc: "Compact, stylish home lifts for 2–4 floor residences. Minimal pit requirement, whisper-quiet operation, and elegant designs.",
    features: ["Pit-free options", "2–4 floors", "Whisper quiet", "Smart home integration"],
  },
  {
    image: hero1,
    title: "Glass Elevators",
    category: "Premium",
    badge: "Architectural",
    desc: "Stunning glass elevators that showcase the building's architecture. Ideal for premium residential towers, hotels, and luxury retail.",
    features: ["Full glass cabin", "360° visibility", "Premium interiors", "Architectural statement"],
  },
];

const categories = ["All", "Commercial", "Healthcare", "Industrial", "Luxury", "Residential", "Premium"];

const categoryColors: Record<string, string> = {
  Commercial: "bg-blue-50 text-blue-700 border-blue-200",
  Healthcare: "bg-green-50 text-green-700 border-green-200",
  Industrial: "bg-amber-50 text-amber-700 border-amber-200",
  Luxury: "bg-purple-50 text-purple-700 border-purple-200",
  Residential: "bg-teal-50 text-teal-700 border-teal-200",
  Premium: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function ProductsSection() {
  const [active, setActive] = useState("All");
  const { ref, inView } = useInView(0.08);

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-primary mb-4">Our Products</span>
          <h2 className="section-heading mb-4">
            World-Class <span className="gradient-text">Elevator Products</span>
          </h2>
          <p className="section-subheading">
            We supply a comprehensive range of elevator solutions from globally certified manufacturers,
            suited for every application and budget.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-body font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-button scale-105"
                  : "bg-section-alt border border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map(({ image, title, category, badge, desc, features }, i) => (
            <div
              key={`${active}-${i}`}
              className="group bg-background rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 border border-border hover:border-primary/20 transition-all duration-300 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600"
                  style={{ transitionDuration: "600ms" }}
                  loading="lazy"
                />
                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category badge */}
                <span className={`absolute top-4 left-4 border text-xs font-body font-semibold px-3 py-1 rounded-full ${categoryColors[category] || "bg-primary/90 text-white border-transparent"}`}>
                  {category}
                </span>

                {/* Product badge top-right */}
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-body font-semibold px-2.5 py-1 rounded-full border border-white/20">
                  {badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-200">{title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{desc}</p>

                {/* Feature chips */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {features.map((f, j) => (
                    <div key={j} className="flex items-center gap-1.5 bg-section-alt border border-border/60 rounded-lg px-2.5 py-1.5">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="font-body text-xs text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group/btn flex items-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground font-body font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-200 w-full justify-center border border-primary/20 hover:border-transparent hover:shadow-button"
                >
                  Request Quote
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
