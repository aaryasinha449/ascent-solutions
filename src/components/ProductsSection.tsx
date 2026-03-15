import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import passengerImg from "@/assets/product-passenger-elevator.jpg";
import hospitalImg from "@/assets/product-hospital-elevator.jpg";
import freightImg from "@/assets/product-freight-elevator.jpg";
import capsuleImg from "@/assets/product-capsule-elevator.jpg";
import homeImg from "@/assets/product-home-elevator.jpg";
import hero1 from "@/assets/hero-elevator-1.jpg";
import hero2 from "@/assets/hero-elevator-2.jpg";
import hero3 from "@/assets/hero-elevator-3.jpg";

/* ─── Product catalog by elevator type/domain ─────────────────────── */
const categories = [
  {
    id: "passenger",
    label: "Passenger Elevators",
    icon: "🏢",
    desc: "High-capacity solutions for offices, malls & commercial towers",
    products: [
      {
        image: passengerImg,
        name: "Standard Passenger Elevator",
        badge: "Most Popular",
        desc: "High-performance passenger elevator for offices, malls, and commercial buildings. Available in 4–20 person capacity with customisable interiors.",
        specs: ["Speed: 0.5–4 m/s", "Capacity: 4–20 persons", "Custom cabin finishes", "Energy-efficient drive"],
      },
      {
        image: hero1,
        name: "High-Speed Commercial Lift",
        badge: "Premium",
        desc: "Designed for high-rise buildings where speed and reliability are paramount. Features advanced motor technology for smooth, fast travel.",
        specs: ["Speed: up to 6 m/s", "Capacity: up to 24 persons", "Panoramic or enclosed cabin", "Smart destination dispatch"],
      },
      {
        image: hero2,
        name: "Gearless Traction Elevator",
        badge: "Energy Saving",
        desc: "VVVF drive and gearless PM motors deliver whisper-quiet operation with up to 40% energy savings compared to traditional drives.",
        specs: ["VVVF drive", "Gearless PM motor", "40% energy saving", "Low noise operation"],
      },
    ],
  },
  {
    id: "home",
    label: "Home Lifts",
    icon: "🏠",
    desc: "Compact, quiet residential lifts for 2–5 floor homes",
    products: [
      {
        image: homeImg,
        name: "Compact Home Lift",
        badge: "Pit-Free",
        desc: "Stylish and compact home lift requiring minimal pit depth. Ideal for villas, duplexes, and bungalows up to 4 floors.",
        specs: ["Pit-free option", "2–4 floors", "Whisper quiet", "Compact footprint"],
      },
      {
        image: hero3,
        name: "Luxury Residential Elevator",
        badge: "Premium",
        desc: "Bespoke cabin designs with premium materials — wood panelling, stainless steel, ambient lighting, and smart home integration.",
        specs: ["Custom interiors", "Smart home ready", "LED ambient lighting", "Glass or enclosed cabin"],
      },
    ],
  },
  {
    id: "capsule",
    label: "Capsule Elevators",
    icon: "🔮",
    desc: "Panoramic glass capsule lifts — architectural statements",
    products: [
      {
        image: capsuleImg,
        name: "Glass Capsule Elevator",
        badge: "Architectural",
        desc: "Panoramic glass capsule elevator that creates a dramatic visual centrepiece in hotels, malls, and premium commercial spaces.",
        specs: ["360° glass view", "LED ambient lighting", "Hotel & mall grade", "Architectural design"],
      },
      {
        image: hero1,
        name: "Observation Lift",
        badge: "Luxury",
        desc: "Floor-to-ceiling glass panels provide breathtaking views at every floor. Ideal for atriums, showrooms, and luxury towers.",
        specs: ["Full glass cabin", "360° visibility", "Premium interiors", "Custom shape options"],
      },
    ],
  },
  {
    id: "hospital",
    label: "Hospital Elevators",
    icon: "🏥",
    desc: "Wide-door, stretcher-compatible lifts for healthcare facilities",
    products: [
      {
        image: hospitalImg,
        name: "Hospital / Stretcher Lift",
        badge: "Healthcare Grade",
        desc: "Wide-door, stretcher-compatible elevators designed specifically for hospitals and medical facilities with smooth, vibration-free operation.",
        specs: ["Stretcher compatible", "Wide cabin doors", "Antibacterial surfaces", "Emergency power backup"],
      },
      {
        image: hero2,
        name: "Bed Elevator",
        badge: "Specialized",
        desc: "Extra-large cabin dimensions to accommodate hospital beds, medical equipment, and patient transport teams with full comfort.",
        specs: ["Bed compatible", "Extra-large cabin", "Non-slip flooring", "24/7 reliability"],
      },
    ],
  },
  {
    id: "freight",
    label: "Freight Elevators",
    icon: "🏭",
    desc: "Heavy-duty industrial lifts for warehouses & factories",
    products: [
      {
        image: freightImg,
        name: "Industrial Freight Elevator",
        badge: "Heavy Duty",
        desc: "Heavy-duty freight elevators for warehouses, factories, and industrial complexes. Built for maximum load capacity and daily intensive use.",
        specs: ["Load: 500–5000 kg", "Industrial grade build", "Pallet truck compatible", "Reinforced cabin floor"],
      },
      {
        image: hero3,
        name: "Goods Lift",
        badge: "Industrial",
        desc: "Robust goods lifts for retail stores, multi-storey warehouses, and manufacturing plants. Easy-clean surfaces and wide openings.",
        specs: ["Wide door opening", "Easy-clean interior", "Manual/auto doors", "Safety overload sensor"],
      },
    ],
  },
];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const { ref, inView } = useInView(0.08);

  const current = categories.find((c) => c.id === activeCategory) ?? categories[0];

  return (
    <section id="products" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-primary mb-4">Our Products</span>
          <h2 className="section-heading mb-4">
            World-Class <span className="gradient-text">Elevator Solutions</span>
          </h2>
          <p className="section-subheading">
            Browse our full range of elevator products — classified by type — from globally
            certified manufacturers to suit every application and budget.
          </p>
        </div>

        {/* ── Category tabs ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-body font-semibold transition-all duration-250 border-2 ${
                  isActive
                    ? "bg-primary border-primary text-primary-foreground shadow-button scale-105"
                    : "bg-background border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
                }`}
              >
                <span className="text-base leading-none">{cat.icon}</span>
                {cat.label}
                {isActive && <ChevronDown size={14} className="ml-1" />}
              </button>
            );
          })}
        </div>

        {/* ── Active category banner ── */}
        <div className="mb-8 flex items-center gap-4 p-4 bg-section-alt border border-border rounded-2xl">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
            {current.icon}
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground">{current.label}</h3>
            <p className="font-body text-sm text-muted-foreground">{current.desc}</p>
          </div>
          <div className="ml-auto flex-shrink-0 bg-background border border-border rounded-xl px-4 py-2 text-center hidden md:block">
            <p className="font-heading font-black text-2xl text-primary leading-none">{current.products.length}</p>
            <p className="font-body text-xs text-muted-foreground mt-0.5">Models</p>
          </div>
        </div>

        {/* ── Product grid ── */}
        <div
          key={activeCategory}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-7 ${current.products.length === 2 ? "lg:grid-cols-2 max-w-3xl mx-auto" : ""}`}
        >
          {current.products.map(({ image, name, badge, desc, specs }, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className="group bg-background rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                {/* Badge */}
                <span className="absolute top-4 right-4 bg-black/55 backdrop-blur-sm text-white text-xs font-body font-semibold px-2.5 py-1.5 rounded-full border border-white/20">
                  {badge}
                </span>

                {/* Category chip bottom-left */}
                <span className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-xs font-body font-bold px-3 py-1 rounded-full shadow-button">
                  {current.label}
                </span>

                {/* Top hover bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-200 leading-tight">
                  {name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{desc}</p>

                {/* Spec chips */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {specs.map((s, j) => (
                    <div key={j} className="flex items-center gap-1.5 bg-section-alt border border-border/60 rounded-lg px-2.5 py-1.5">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="font-body text-xs text-muted-foreground leading-tight">{s}</span>
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

        {/* Bottom CTA strip */}
        <div className="mt-14 text-center">
          <p className="font-body text-muted-foreground text-sm mb-4">
            Looking for a custom configuration or don't see your requirement?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2.5 bg-gradient-primary text-primary-foreground font-heading font-bold px-8 py-3.5 rounded-2xl shadow-button hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
          >
            Get a Custom Quote <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
