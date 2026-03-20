import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useState } from "react";

import gmvPowerUnit    from "@/assets/prod-gmv-powerunit-new.jpg";
import gmvControlPanel from "@/assets/prod-gmv-controlpanel-new.jpg";
import guideRailNew    from "@/assets/prod-guide-rail-new.jpg";
import guideBrackets   from "@/assets/prod-guide-brackets-new.jpg";
import arkelArcube     from "@/assets/prod-arkel-arcube-new.jpg";
import tractionRTG     from "@/assets/prod-traction-machine-rtg.jpg";
import glassLiftNew    from "@/assets/prod-glass-lift-new.jpg";
import homeLiftNew     from "@/assets/prod-home-lift-new.jpg";
import landingDoorNew  from "@/assets/prod-landing-door-new.jpg";

const products = [
  {
    image: gmvPowerUnit,
    name: "Hydraulic Power Unit",
    desc: "World-class compact hydraulic power unit with energy-saving variable-speed motor for smooth, silent elevator operation.",
  },
  {
    image: gmvControlPanel,
    name: "Hydraulic Control Panel",
    desc: "Factory-assembled electrical control panel — fully wired, pre-tested, EN81-compliant for hydraulic elevator systems.",
  },
  {
    image: arkelArcube,
    name: "Arcube Elevator Controller",
    desc: "Advanced elevator controller with intuitive programming, smooth ride quality, and full remote diagnostics capability.",
  },
  {
    image: tractionRTG,
    name: "RTG 24P Traction Machine",
    desc: "Gearless permanent-magnet synchronous traction machine — engineered for MRL installations with ultra-low noise.",
  },
  {
    image: landingDoorNew,
    name: "Landing & Cabin Doors",
    desc: "Heavy-duty stainless-steel doors in single-speed, two-speed, and centre-opening configurations for all elevator types.",
  },
  {
    image: guideRailNew,
    name: "T-Section Guide Rails",
    desc: "Precision-machined cold-drawn guide rails delivering vibration-free guidance and smooth, comfortable ride quality.",
  },
  {
    image: guideBrackets,
    name: "Guide Rail Brackets & Clips",
    desc: "Galvanised steel fixing brackets engineered for precise rail alignment, compatible with all standard T-section profiles.",
  },
  {
    image: glassLiftNew,
    name: "Panoramic Glass Home Lift",
    desc: "Elegant all-glass pit-free home lift — minimal footprint, whisper-quiet drive for villas, duplexes, and bungalows.",
  },
  {
    image: homeLiftNew,
    name: "Residential Home Lift",
    desc: "Space-saving glass and aluminium residential lift — smooth, safe, and smart-home ready for modern interiors.",
  },
];

/** Shimmer skeleton + lazy image with no-jump loading */
function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full">
      {/* Shimmer shown until image loaded */}
      {!loaded && (
        <div
          className="absolute inset-0"
          style={{ background: "hsl(var(--muted)/0.45)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, hsl(var(--muted)/0.75) 50%, transparent 100%)",
              animation: "shimmer 1.6s infinite",
            }}
          />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-contain p-6 transition-all duration-700 ease-out group-hover:scale-[1.04]"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease, transform 0.7s ease" }}
      />
    </div>
  );
}

export default function ProductsSection() {
  const { ref, inView } = useInView(0.06);

  return (
    <section
      id="products"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.4) 50%, hsl(var(--background)) 100%)" }}
    >
      {/* Ambient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full translate-x-1/2 -translate-y-1/3 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/4 rounded-full -translate-x-1/2 translate-y-1/3 blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.12] pointer-events-none" />

      <div
        ref={ref}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        {/* ── Header ── */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-widest">Our Products</span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            Elevator{" "}
            <span className="gradient-text">Component Range</span>
          </h2>
          <p className="section-subheading">
            As authorised distributors of GMV India, Shiv Shakti and Marazzi, along with other leading industry partners —
            we supply globally certified elevator components for every application.
          </p>
        </div>

        {/* ── Premium product grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {products.map(({ image, name, desc }, i) => (
            <div
              key={i}
              className={`group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${i * 60}ms`,
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.55)",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07), 0 1.5px 6px 0 rgba(0,0,0,0.04)",
              }}
            >
              {/* Hover glow border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{ boxShadow: "0 0 0 1.5px hsl(var(--primary)/0.22), 0 16px 48px 0 rgba(0,0,0,0.13)" }}
              />

              {/* Accent bar — slides in from left on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary via-primary/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20 rounded-t-2xl" />

              {/* Image area — fixed height prevents layout shift */}
              <div
                className="relative overflow-hidden flex-shrink-0"
                style={{
                  height: "260px",
                  background: "linear-gradient(145deg, hsl(var(--muted)/0.35) 0%, hsl(var(--muted)/0.15) 100%)",
                }}
              >
                <ProductImage src={image} alt={name} />
                {/* Soft bottom vignette */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
                <h3 className="font-heading font-bold text-base text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors duration-300">
                  {name}
                </h3>
                {/* Animated red underline */}
                <div className="h-[2px] rounded-full mb-3 bg-primary/30 w-8 group-hover:w-12 transition-all duration-400" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {desc}
                </p>

                {/* CTA */}
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group/btn flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-body font-semibold text-sm text-primary border border-primary/25 bg-primary/5 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:shadow-[var(--shadow-button)]"
                >
                  Request Quote
                  <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="font-body text-muted-foreground text-sm mb-5">
            Need a full system or bulk supply? Contact us for custom pricing.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2.5 bg-gradient-primary text-primary-foreground font-heading font-bold px-9 py-3.5 rounded-2xl shadow-[var(--shadow-button)] hover:opacity-90 hover:scale-[1.03] transition-all duration-300"
          >
            Get a Custom Quote <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
