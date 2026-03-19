import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

import gmvPowerUnit     from "@/assets/prod-gmv-powerunit-new.jpg";
import gmvControlPanel  from "@/assets/prod-gmv-controlpanel-new.jpg";
import guideRailNew     from "@/assets/prod-guide-rail-new.jpg";
import guideBrackets    from "@/assets/prod-guide-brackets-new.jpg";
import arkelArcube      from "@/assets/prod-arkel-arcube-new.jpg";
import tractionRTG      from "@/assets/prod-traction-machine-rtg.jpg";
import glassLiftNew     from "@/assets/prod-glass-lift-new.jpg";
import homeLiftNew      from "@/assets/prod-home-lift-new.jpg";
import landingDoorNew   from "@/assets/prod-landing-door-new.jpg";

const products = [
  {
    image: gmvPowerUnit,
    name: "GMV Hydraulic Power Unit",
    desc: "World No.1 hydraulic power unit by GMV, Made in Italy since 1958. Compact design with energy-saving variable-speed motor for smooth silent operation.",
  },
  {
    image: gmvControlPanel,
    name: "GMV Hydraulic Control Panel",
    desc: "Factory-assembled GMV electrical control panel — fully wired, pre-tested, and compliant with EN81 safety standards for hydraulic elevators.",
  },
  {
    image: arkelArcube,
    name: "ARKEL Arcube Controller",
    desc: "ARKEL's advanced Arcube elevator controller offering intuitive programming, smooth ride quality, and full remote diagnostics via RS-485 / CAN bus.",
  },
  {
    image: tractionRTG,
    name: "Tectronics RTG 24P Traction Machine",
    desc: "Gearless permanent-magnet synchronous motor traction machine by Tectronics. Designed for MRL installations with low noise and high efficiency.",
  },
  {
    image: landingDoorNew,
    name: "Stainless Steel Landing & Cabin Doors",
    desc: "Heavy-duty stainless-steel landing and cabin doors. Available in single-speed, two-speed, and centre-opening configurations for all elevator types.",
  },
  {
    image: guideRailNew,
    name: "T-Section Guide Rails & Hose Pipe",
    desc: "Precision-machined T-section guide rails by Marazzi (Italy). Vibration-free guidance for smooth ride comfort — available in cold-drawn and machined profiles.",
  },
  {
    image: guideBrackets,
    name: "Guide Rail Brackets & Clips",
    desc: "Galvanised steel guide rail brackets and fixing clips engineered for precise rail alignment. Compatible with all standard T-section guide rail profiles.",
  },
  {
    image: glassLiftNew,
    name: "Panoramic Glass Home Lift",
    desc: "Elegant all-glass pit-free home lift — minimal footprint, whisper-quiet hydraulic or pneumatic drive. Perfect for 2–4 floor villas, duplexes, and bungalows.",
  },
  {
    image: homeLiftNew,
    name: "Residential Home Lift",
    desc: "Space-saving residential lift with glass and aluminium construction. Smooth, safe, and smart-home ready — blends perfectly with modern interior designs.",
  },
];

export default function ProductsSection() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="products" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-muted rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">Our Products</span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            Elevator <span className="gradient-text">Component Range</span>
          </h2>
          <p className="section-subheading">
            As authorised distributors of GMV, Shiv Shakti, Techtronics, Arkel and Marazzi —
            we supply globally certified elevator components for every application.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map(({ image, name, desc }, i) => (
            <div
              key={i}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-350 flex flex-col"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Image area */}
              <div className="relative overflow-hidden bg-muted/40" style={{ height: "260px" }}>
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.06]"
                  loading="lazy"
                />
                {/* Top accent bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />
                {/* Subtle bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-[15px] text-foreground group-hover:text-primary transition-colors duration-200 leading-snug mb-2">
                  {name}
                </h3>
                <div className="w-8 h-0.5 bg-primary/40 rounded-full mb-3 group-hover:w-16 transition-all duration-300" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>

                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group/btn mt-5 flex items-center gap-2 bg-primary/8 hover:bg-primary text-primary hover:text-primary-foreground font-body font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-200 w-full justify-center border border-primary/20 hover:border-transparent hover:shadow-button"
                >
                  Request Quote
                  <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="font-body text-muted-foreground text-sm mb-5">
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
