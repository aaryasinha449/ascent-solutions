import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
    desc: "High-performance passenger elevators for offices, malls, and commercial buildings. Available in 4–20 person capacity with customizable interiors.",
    features: ["Speed: 0.5 – 4 m/s", "Capacity: 4–20 persons", "Custom cabin finishes", "Energy-efficient drive"],
  },
  {
    image: hospitalImg,
    title: "Hospital Elevators",
    category: "Healthcare",
    desc: "Wide-door, stretcher-compatible elevators designed for hospitals and medical facilities. Smooth operation and easy cleaning surfaces.",
    features: ["Stretcher compatible", "Wide cabin doors", "Antibacterial surfaces", "Emergency power backup"],
  },
  {
    image: freightImg,
    title: "Freight Elevators",
    category: "Industrial",
    desc: "Heavy-duty freight elevators for warehouses, factories, and industrial complexes. High load capacity with robust construction.",
    features: ["Load: 500 – 5000 kg", "Industrial grade build", "Pallet truck compatible", "Extra heavy duty"],
  },
  {
    image: capsuleImg,
    title: "Capsule Elevators",
    category: "Luxury",
    desc: "Panoramic glass capsule elevators that add a dramatic architectural statement to malls, hotels, and premium commercial spaces.",
    features: ["360° glass view", "Architectural design", "Hotel & mall grade", "LED ambient lighting"],
  },
  {
    image: homeImg,
    title: "Home Elevators",
    category: "Residential",
    desc: "Compact, stylish home lifts for 2–4 floor residences. Minimal pit requirement, whisper-quiet operation, and elegant designs.",
    features: ["Pit-free options", "2–4 floors", "Whisper quiet", "Smart home integration"],
  },
  {
    image: hero1,
    title: "Glass Elevators",
    category: "Premium",
    desc: "Stunning glass elevators that showcase the building's architecture. Ideal for premium residential towers, hotels, and luxury retail.",
    features: ["Full glass cabin", "360° visibility", "Premium interiors", "Architectural statement"],
  },
];

const categories = ["All", "Commercial", "Healthcare", "Industrial", "Luxury", "Residential", "Premium"];

export default function ProductsSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">
              Our Products
            </span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            World-Class <span className="text-primary">Elevator Products</span>
          </h2>
          <p className="section-subheading">
            We supply a comprehensive range of elevator solutions from globally certified manufacturers, 
            suited for every application and budget.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-background border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(({ image, title, category, desc, features }, i) => (
            <div
              key={`${active}-${i}`}
              className="group bg-background rounded-2xl overflow-hidden shadow-card card-hover border border-border animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                  {category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-1.5 mb-4">
                  {features.map((f, j) => (
                    <div key={j} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="font-body text-xs text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center gap-2 text-primary font-body font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Request Quote <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
