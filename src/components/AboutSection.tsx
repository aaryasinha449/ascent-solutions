import { useInView } from "@/hooks/use-in-view";
import { CheckCircle2, Award, Shield, Zap, ArrowRight, Target, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import ribbonImg        from "@/assets/about-ribbon-cutting.jpg";
import teamExhibitionImg from "@/assets/gallery-team-exhibition.jpg";
import officeEntranceImg from "@/assets/gallery-office-entrance.jpg";

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
    desc: "To be a leading elevator solution provider in our regions — delivering high quality, affordable and innovative solutions to elevator companies.",
    accentClass: "bg-primary/5 border-primary/20",
  },
  {
    icon: Target,
    title: "Our Mission",
    desc: "To become a leading technology partner providing innovative and quality-oriented elevator solutions across West & North India.",
    accentClass: "bg-muted border-border",
  },
];

const photos = [
  { src: teamExhibitionImg,  label: "Eletech Team at National Exhibition" },
  { src: officeEntranceImg,  label: "Corporate Office — Pune" },
  { src: ribbonImg,          label: "GMV Elevator Inauguration Ceremony" },
];

export default function AboutSection() {
  const { ref, inView } = useInView(0.12);
  const [activeImg, setActiveImg] = useState(0);
  const [fading, setFading] = useState(false);

  // Smooth cross-fade auto-slider
  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActiveImg((prev) => (prev + 1) % photos.length);
        setFading(false);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    if (i === activeImg) return;
    setFading(true);
    setTimeout(() => {
      setActiveImg(i);
      setFading(false);
    }, 300);
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-primary/4 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Image slider ── */}
          <div className="relative">
            {/* Red accent bar */}
            <div className="absolute -left-5 top-8 bottom-8 w-1.5 bg-gradient-primary rounded-full hidden md:block" />

            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card-hover)] glow-red">
              {/* Cross-fade image */}
              <div className="relative overflow-hidden" style={{ height: "520px" }}>
                <img
                  src={photos[activeImg].src}
                  alt={photos[activeImg].label}
                  className="w-full h-full object-contain bg-muted/30 transition-opacity duration-500"
                  style={{ opacity: fading ? 0 : 1 }}
                />
                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

                {/* Caption pill */}
                <div className="absolute bottom-[72px] left-5 right-5">
                  <span className="inline-block bg-primary/90 backdrop-blur-sm text-primary-foreground font-body text-xs px-3 py-1.5 rounded-full shadow-sm">
                    {photos[activeImg].label}
                  </span>
                </div>

                {/* Experience badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-[var(--shadow-card)]">
                  <div className="w-11 h-11 bg-gradient-primary rounded-xl flex items-center justify-center shadow-[var(--shadow-button)]">
                    <Award className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="font-heading font-black text-2xl text-foreground leading-tight">10+</p>
                    <p className="font-body text-xs text-muted-foreground">Years of Excellence</p>
                  </div>
                </div>

                {/* Dot indicators */}
                <div className="absolute bottom-5 right-5 flex gap-2 items-center">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`rounded-full transition-all duration-400 ${
                        i === activeImg
                          ? "w-6 h-2.5 bg-primary shadow-sm"
                          : "w-2.5 h-2.5 bg-white/60 hover:bg-white/90"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating "Est. 2015" card */}
            <div className="absolute -top-5 -right-5 md:-right-10 bg-background border border-border rounded-2xl p-4 shadow-[var(--shadow-card-hover)] hidden md:block animate-float">
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

          {/* ── Right: Content ── */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="red-line" />
                <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">About Eletech</span>
              </div>
              <h2 className="section-heading mb-4">
                India's Trusted Partner in{" "}
                <span className="gradient-text">Elevator Solutions</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-base">
                Eletech Trading Corporation was established in 2015 by a team of successful professionals
                with rich corporate experience in vertical transportation. We enable you to design,
                specify, procure and execute exceptional elevator solutions — partnering in your success
                with efficient, cost-effective vertical transportation.
              </p>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed">
              Our strength lies in strong ethical values and deep industry knowledge, combined with
              practical leadership experience and domain expertise. We supply Safe, Reliable &amp;
              Energy Efficient components meeting global safety standards — emerging as a premier
              elevator components supplier in West &amp; North India.
            </p>

            {/* Subtle red divider */}
            <div className="h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent rounded-full" />

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {visionMission.map(({ icon: Icon, title, desc, accentClass }, i) => (
                <div key={i} className={`p-4 rounded-2xl border ${accentClass} transition-shadow duration-200 hover:shadow-[var(--shadow-card)]`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-primary" size={16} />
                    <p className="font-heading font-bold text-sm text-foreground">{title}</p>
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-snug">{desc}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-section-alt border border-border/60 hover:border-primary/30 hover:bg-primary/3 transition-all duration-200"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={15} />
                  <span className="font-body text-xs text-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Value cards */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="bg-background rounded-2xl p-4 border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-3 transition-colors duration-200">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <p className="font-heading font-bold text-sm text-foreground mb-1">{title}</p>
                  <p className="font-body text-xs text-muted-foreground leading-snug">{desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-heading font-bold text-sm px-6 py-3.5 rounded-xl shadow-[var(--shadow-button)] hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Get a Free Consultation <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
