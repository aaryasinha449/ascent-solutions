import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Building2, Star, Wrench, MapPin } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  numericValue: number;
  suffix: string;
  label: string;
  iconColor: string;
  bgColor: string;
}

const stats: StatItem[] = [
  { icon: TrendingUp, numericValue: 10,   suffix: "+",  label: "Years Experience",      iconColor: "text-primary",     bgColor: "bg-primary/15" },
  { icon: Users,      numericValue: 500,  suffix: "+",  label: "Satisfied Clients",     iconColor: "text-blue-400",    bgColor: "bg-blue-500/15" },
  { icon: Building2,  numericValue: 5000, suffix: "+",  label: "Components Supplied",   iconColor: "text-emerald-400", bgColor: "bg-emerald-500/15" },
  { icon: Star,       numericValue: 5,    suffix: "",   label: "Authorized Brands",     iconColor: "text-amber-400",   bgColor: "bg-amber-400/15" },
  { icon: Wrench,     numericValue: 24,   suffix: "/7", label: "Support Available",     iconColor: "text-purple-400",  bgColor: "bg-purple-400/15" },
  { icon: MapPin,     numericValue: 7,    suffix: "+",  label: "States Covered",        iconColor: "text-rose-400",    bgColor: "bg-rose-400/15" },
];

function AnimatedCounter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (suffix === "/7") { setCount(target); return; }
    const duration = 1800, steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target, suffix]);
  return <span>{count}{suffix}</span>;
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-24 bg-section-dark relative overflow-hidden">
      {/* Dot texture */}
      <div className="absolute inset-0 bg-dot-pattern-dark pointer-events-none" />
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge-primary mb-4 inline-flex" style={{ background: "hsl(0 75% 42% / 0.15)", color: "hsl(0 75% 70%)", border: "1px solid hsl(0 75% 42% / 0.3)" }}>
            Our Achievements
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">
            Numbers That Speak for Themselves
          </h2>
          <p className="font-body text-white/55 text-base max-w-xl mx-auto">
            Established in 2015 — a decade of excellence in elevator components across West &amp; North India
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {stats.map(({ icon: Icon, numericValue, suffix, label, iconColor, bgColor }, i) => (
            <div
              key={i}
              className={`group relative text-center p-6 md:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-400 cursor-default ${
                visible ? "animate-count-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-13 h-13 rounded-2xl ${bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                   style={{ width: "52px", height: "52px" }}>
                <Icon className={iconColor} size={24} />
              </div>
              {/* Value */}
              <p className="font-heading font-black text-4xl md:text-5xl text-white leading-none mb-2 tabular-nums tracking-tight">
                <AnimatedCounter target={numericValue} suffix={suffix} active={visible} />
              </p>
              <p className="font-body text-white/55 text-xs leading-tight font-medium">{label}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Brand strip */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <p className="text-center font-body text-white/40 text-xs uppercase tracking-widest mb-6">
            Authorized Distributor For
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["GMV", "ARKEL", "Tectronics", "Marazzi", "Shiv Shakti"].map((brand) => (
              <span key={brand} className="font-heading font-black text-lg md:text-xl text-white/25 hover:text-white/60 transition-colors duration-300 cursor-default tracking-wide">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
