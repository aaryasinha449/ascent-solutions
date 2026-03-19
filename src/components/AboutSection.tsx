import { useInView } from "@/hooks/use-in-view";
import { CheckCircle2, Award, Shield, Zap, ArrowRight, Target, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import exhibitionTeamImg from "@/assets/about-exhibition-team.jpg";

const highlights = [
  "Authorized distributor — GMV, Shiv Shakti, Techtronics, Arkel, Marazzi",
  "Safe, Reliable & Energy Efficient components",
  "Emerging components supplier in West & North India",
  "Strong technical support team across regions",
  "Customized solutions for all building types",
  "Cost-effective vertical transportation solutions",
];

const values = [
  { icon: Shield, title: "Safety First",    desc: "Components meeting global safety standards with rigorous quality checks." },
  { icon: Award,  title: "Quality Assured", desc: "Partnered with globally certified elevator manufacturers worldwide." },
  { icon: Zap,    title: "Fast Delivery",   desc: "Efficient project timelines with minimal disruption to operations." },
];

const visionMission = [
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be a leading elevator solution provider — delivering high quality, affordable and innovative solutions.",
    accentClass: "bg-primary/5 border-primary/20",
  },
  {
    icon: Target,
    title: "Our Mission",
    desc: "To become a leading technology partner providing quality-oriented elevator solutions across West & North India.",
    accentClass: "bg-muted/60 border-border",
  },
];

// Only 2 required images — teamExhibitionImg removed
function ImgWithSkeleton({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ background: "hsl(var(--muted)/0.5)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, hsl(var(--muted)/0.8) 50%, transparent 100%)",
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
        className="w-full h-full object-contain p-4"
        style={{
          transition: "opacity 0.55s cubic-bezier(0.4,0,0.2,1)",
          opacity: loaded ? 1 : 0,
          display: "block",
        }}
      />
    </div>
  );
}

export default function AboutSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.3) 50%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Decorative ambient orbs */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[560px] h-[560px] bg-primary/3 rounded-full -translate-y-1/3 translate-x-1/3 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/4 rounded-full translate-y-1/2 -translate-x-1/3 blur-[70px] pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-800 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDuration: "800ms" }}
      >
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ════ LEFT: Image ════ */}
          <div
            className={`relative transition-all duration-900 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDuration: "900ms", transitionDelay: "100ms" }}
          >
            {/* Vertical red accent bar */}
            <div className="absolute -left-4 top-10 bottom-10 w-[3px] bg-gradient-to-b from-primary via-primary/60 to-transparent rounded-full hidden md:block" />

            {/* Glassmorphism image card */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px -10px rgba(0,0,0,0.18), 0 4px 16px 0 rgba(0,0,0,0.08)",
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              {/* Fixed-height container — prevents layout shift */}
              <div
                className="relative overflow-hidden rounded-3xl"
                style={{ height: "520px", background: "hsl(var(--muted)/0.25)" }}
              >
                <ImgWithSkeleton
                  src={exhibitionTeamImg}
                  alt="Eletech Trading Corporation Team"
                />

                {/* Experience badge — glassmorphism */}
                <div
                  className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
                    border: "1px solid rgba(255,255,255,0.7)",
                  }}
                >
                  <div className="w-11 h-11 bg-gradient-primary rounded-xl flex items-center justify-center shadow-[var(--shadow-button)]">
                    <Award className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="font-heading font-black text-2xl text-foreground leading-tight">10+</p>
                    <p className="font-body text-xs text-muted-foreground">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating "Est. 2015" card */}
            <div
              className="absolute -top-5 -right-5 md:-right-10 rounded-2xl p-4 hidden md:block animate-float"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(255,255,255,0.7)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse block" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-foreground leading-tight">Est. 2015</p>
                  <p className="font-body text-xs text-green-600">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>

          {/* ════ RIGHT: Content ════ */}
          <div
            className={`space-y-6 transition-all duration-900 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDuration: "900ms", transitionDelay: "200ms" }}
          >
            {/* Section label + heading */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="red-line" />
                <span className="font-body font-semibold text-primary text-sm uppercase tracking-widest">
                  About Eletech
                </span>
              </div>
              <h2 className="section-heading mb-4">
                India's Trusted Partner in{" "}
                <span className="gradient-text">Elevator Solutions</span>
              </h2>
              <p className="font-body text-muted-foreground leading-[1.8] text-base">
                Eletech Trading Corporation was established in{" "}
                <span className="font-semibold text-foreground">2015</span> by a team of successful professionals
                with rich corporate experience in vertical transportation. We enable you to design,
                specify, procure and execute exceptional elevator solutions — partnering in your success
                with efficient, cost-effective vertical transportation.
              </p>
            </div>

            <p className="font-body text-muted-foreground leading-[1.8]">
              Our strength lies in{" "}
              <span className="font-semibold text-foreground">strong ethical values</span> and deep
              industry knowledge, combined with practical leadership experience and domain expertise.
              We supply Safe, Reliable &amp; Energy Efficient components meeting global safety
              standards — emerging as a premier elevator components supplier in{" "}
              <span className="font-semibold text-foreground">West &amp; North India</span>.
            </p>

            {/* Elegant red divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-primary/15 to-transparent rounded-full" />
              <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-60" />
            </div>

            {/* Vision & Mission — refined glassmorphism cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {visionMission.map(({ icon: Icon, title, desc, accentClass }, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl border ${accentClass} transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary" size={14} />
                    </div>
                    <p className="font-heading font-bold text-sm text-foreground">{title}</p>
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/40 border border-border/50 hover:border-primary/25 hover:bg-primary/3 transition-all duration-200"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={14} />
                  <span className="font-body text-xs text-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Value cards */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 border border-border/60 bg-background/70 backdrop-blur-sm hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-primary/20 transition-all duration-300 group shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
                >
                  <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary/18 rounded-xl flex items-center justify-center mb-3 transition-colors duration-200">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <p className="font-heading font-bold text-sm text-foreground mb-1">{title}</p>
                  <p className="font-body text-xs text-muted-foreground leading-snug">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-heading font-bold text-sm px-6 py-3.5 rounded-xl shadow-[var(--shadow-button)] hover:opacity-90 hover:scale-[1.03] transition-all duration-300"
            >
              Get a Free Consultation <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
