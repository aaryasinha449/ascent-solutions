import { useState } from "react";
import { ArrowRight, ChevronDown, Package } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

// ── NEW real product images from uploaded screenshots ──
import gmvPowerUnit     from "@/assets/prod-gmv-powerunit-new.jpg";
import gmvControlPanel  from "@/assets/prod-gmv-controlpanel-new.jpg";
import guideRailNew     from "@/assets/prod-guide-rail-new.jpg";
import guideBrackets    from "@/assets/prod-guide-brackets-new.jpg";
import arkelArcube      from "@/assets/prod-arkel-arcube-new.jpg";
import tractionRTG      from "@/assets/prod-traction-machine-rtg.jpg";
import glassLiftNew     from "@/assets/prod-glass-lift-new.jpg";
import homeLiftNew      from "@/assets/prod-home-lift-new.jpg";
import landingDoorNew   from "@/assets/prod-landing-door-new.jpg";

const categories = [
  {
    id: "hydraulic",
    label: "Hydraulic Systems",
    icon: "⚙️",
    brand: "GMV — Made in Italy",
    desc: "World No.1 in Hydraulic Elevator Technology — GMV power units & cylinders",
    products: [
      {
        image: gmvPowerUnit,
        name: "GMV Hydraulic Power Unit",
        badge: "GMV Italy",
        desc: "World No.1 hydraulic power unit by GMV, Made in Italy since 1958. Compact design with energy-saving variable-speed motor for smooth silent operation.",
        specs: ["Made in Italy", "Energy-saving VSM", "Compact design", "10-year warranty"],
      },
      {
        image: gmvControlPanel,
        name: "GMV Hydraulic Control Panel",
        badge: "GMV",
        desc: "Factory-assembled GMV electrical control panel — fully wired, pre-tested, and compliant with EN81 safety standards for hydraulic elevators.",
        specs: ["EN81 compliant", "Pre-wired & tested", "Overload protection", "Digital diagnostics"],
      },
    ],
  },
  {
    id: "drives",
    label: "Drive & Control Systems",
    icon: "🖥️",
    brand: "Arkel • Tectronics",
    desc: "ARKEL Arcube drives and Tectronics RTG 24P traction machines for MRL elevators",
    products: [
      {
        image: arkelArcube,
        name: "ARKEL Arcube Controller",
        badge: "ARKEL",
        desc: "ARKEL's advanced Arcube elevator controller offering intuitive programming, smooth ride quality, and full remote diagnostics via RS-485 / CAN bus.",
        specs: ["VVVF drive", "Remote diagnostics", "RS-485 / CAN bus", "Multi-car compatible"],
      },
      {
        image: tractionRTG,
        name: "Tectronics RTG 24P Traction Machine",
        badge: "Tectronics",
        desc: "Gearless permanent-magnet synchronous motor (PMSM) traction machine by Tectronics. Designed for MRL installations with low noise and high efficiency.",
        specs: ["Gearless PMSM", "MRL compatible", "Low noise < 45 dB", "High efficiency"],
      },
    ],
  },
  {
    id: "doors",
    label: "Doors & Entrances",
    icon: "🚪",
    brand: "Premium Stainless Steel",
    desc: "Stainless steel cabin doors and landing doors for every elevator type",
    products: [
      {
        image: landingDoorNew,
        name: "Stainless Steel Landing & Cabin Doors",
        badge: "Premium SS",
        desc: "Heavy-duty stainless-steel landing and cabin doors. Available in single-speed, two-speed, and centre-opening configurations. Suitable for all commercial and residential elevators.",
        specs: ["SS 304 / SS 316", "Single & centre-open", "Fire rated option", "Custom sizes"],
      },
    ],
  },
  {
    id: "structure",
    label: "Structure & Guide Rails",
    icon: "🏗️",
    brand: "Marazzi • Premium",
    desc: "Precision guide rails, brackets, and structural components for all elevator types",
    products: [
      {
        image: guideRailNew,
        name: "T-Section Guide Rails & Hose Pipe",
        badge: "Marazzi",
        desc: "Precision-machined T-section guide rails by Marazzi (Italy). Vibration-free guidance for smooth ride comfort — available in cold-drawn and machined profiles. Includes hydraulic hose pipes.",
        specs: ["T-8, T-9, T-16 profiles", "Cold-drawn", "Low friction", "ISO 7465 compliant"],
      },
      {
        image: guideBrackets,
        name: "Guide Rail Brackets & Clips",
        badge: "Structural",
        desc: "Galvanised steel guide rail brackets and fixing clips engineered for precise rail alignment. Compatible with all standard T-section guide rail profiles.",
        specs: ["Galvanised steel", "Precision machined", "Anti-vibration", "Universal fit"],
      },
    ],
  },
  {
    id: "homelift",
    label: "Home & Glass Lifts",
    icon: "🏠",
    brand: "GMV • Custom",
    desc: "Compact glass home lifts — panoramic, pit-free, ideal for villas & residences",
    products: [
      {
        image: glassLiftNew,
        name: "Panoramic Glass Home Lift",
        badge: "Pit-Free",
        desc: "Elegant all-glass pit-free home lift — minimal footprint, whisper-quiet hydraulic or pneumatic drive. Perfect for 2–4 floor villas, duplexes, and bungalows.",
        specs: ["Pit-free option", "All-glass cabin", "2–4 floors", "Whisper quiet"],
      },
      {
        image: homeLiftNew,
        name: "Residential Home Lift",
        badge: "Home Friendly",
        desc: "Space-saving residential lift with glass and aluminium construction. Smooth, safe, and smart-home ready — blends perfectly with modern interior designs.",
        specs: ["Smart-home ready", "Compact frame", "Custom interiors", "Safety sensors"],
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
            Elevator <span className="gradient-text">Component Range</span>
          </h2>
          <p className="section-subheading">
            As authorised distributors of GMV (Italy), Tectronics, ARKEL, Marazzi, and Shiv Shakti —
            we supply globally certified elevator components for every application.
          </p>
        </div>

        {/* Brand strip */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          {["GMV — Italy", "Tectronics", "ARKEL", "Marazzi", "Shiv Shakti"].map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 bg-section-alt border border-border rounded-full px-4 py-1.5 font-body text-xs font-semibold text-muted-foreground"
            >
              <Package size={11} className="text-primary" />
              {b}
            </span>
          ))}
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-body font-semibold transition-all duration-200 border-2 ${
                  isActive
                    ? "bg-primary border-primary text-primary-foreground shadow-button scale-105"
                    : "bg-background border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
                }`}
              >
                <span className="text-base leading-none">{cat.icon}</span>
                {cat.label}
                {isActive && <ChevronDown size={14} className="ml-0.5" />}
              </button>
            );
          })}
        </div>

        {/* Active category banner */}
        <div className="mb-8 flex items-center gap-4 p-4 bg-section-alt border border-border rounded-2xl">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
            {current.icon}
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground">{current.label}</h3>
            <p className="font-body text-sm text-muted-foreground">{current.brand} · {current.desc}</p>
          </div>
          <div className="ml-auto flex-shrink-0 bg-background border border-border rounded-xl px-4 py-2 text-center hidden md:block">
            <p className="font-heading font-black text-2xl text-primary leading-none">{current.products.length}</p>
            <p className="font-body text-xs text-muted-foreground mt-0.5">Models</p>
          </div>
        </div>

        {/* Product grid */}
        <div
          key={activeCategory}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-7 ${current.products.length === 1 ? "lg:grid-cols-1 max-w-lg mx-auto" : current.products.length === 2 ? "lg:grid-cols-2 max-w-3xl mx-auto" : ""}`}
        >
          {current.products.map(({ image, name, badge, desc, specs }, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className="group bg-background rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {/* Image — object-contain so full product is always visible */}
              <div className="relative overflow-hidden bg-section-alt" style={{ height: "240px" }}>
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105 p-4"
                  loading="lazy"
                />
                {/* Subtle gradient only at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Badge */}
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-body font-bold px-3 py-1.5 rounded-full shadow-button">
                  {badge}
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

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="font-body text-muted-foreground text-sm mb-4">
            Need a full system or bulk supply? Contact us for custom pricing.
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
