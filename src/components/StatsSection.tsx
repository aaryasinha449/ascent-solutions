import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Building2, Award, Wrench, MapPin, Star, ShieldCheck } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
}

const stats: StatItem[] = [
  {
    icon: TrendingUp,
    numericValue: 10,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Established 2015",
    iconColor: "text-primary",
    bgColor: "bg-primary/20",
    borderColor: "border-primary/30",
  },
  {
    icon: Users,
    numericValue: 500,
    suffix: "+",
    label: "Satisfied Clients",
    sublabel: "Across West & North India",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Building2,
    numericValue: 5000,
    suffix: "+",
    label: "Components Supplied",
    sublabel: "Yearly across India",
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
  },
  {
    icon: Award,
    numericValue: 5,
    suffix: "",
    label: "Authorized Brands",
    sublabel: "GMV, ARKEL, Tectronics & more",
    iconColor: "text-amber-400",
    bgColor: "bg-amber-400/20",
    borderColor: "border-amber-400/30",
  },
  {
    icon: Wrench,
    numericValue: 24,
    suffix: "/7",
    label: "Support Available",
    sublabel: "Emergency helpline",
    iconColor: "text-purple-400",
    bgColor: "bg-purple-400/20",
    borderColor: "border-purple-400/30",
  },
  {
    icon: MapPin,
    numericValue: 7,
    suffix: "+",
    label: "States Covered",
    sublabel: "Pan-India network",
    iconColor: "text-rose-400",
    bgColor: "bg-rose-400/20",
    borderColor: "border-rose-400/30",
  },
];

const brands = [
  { name: "GMV", origin: "Italy" },
  { name: "ARKEL", origin: "Turkey" },
  { name: "Tectronics", origin: "India" },
  { name: "Marazzi", origin: "Italy" },
  { name: "Shiv Shakti", origin: "India" },
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-section-dark relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dot-pattern-dark pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary rounded-full px-4 py-1.5 font-body text-xs font-bold uppercase tracking-widest mb-5">
            <Star size={12} className="text-amber-400 fill-amber-400" />
            Our Achievements
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Numbers That <span className="text-primary">Speak</span> for Themselves
          </h2>
          <p className="font-body text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Established in 2015 — a decade of excellence in elevator components across West &amp; North India
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mb-14">
          {stats.map(({ icon: Icon, numericValue, suffix, label, sublabel, iconColor, bgColor, borderColor }, i) => (
            <div
              key={i}
              className={`group relative text-center p-6 md:p-7 rounded-2xl border ${borderColor} bg-white/4 backdrop-blur-sm hover:bg-white/8 hover:-translate-y-2 transition-all duration-400 cursor-default ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-white/4 to-transparent rounded-bl-2xl rounded-tr-2xl" />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${bgColor} border ${borderColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className={iconColor} size={24} />
              </div>

              {/* Value */}
              <p className="font-heading font-black text-4xl md:text-5xl text-white leading-none mb-1.5 tabular-nums tracking-tight">
                <AnimatedCounter target={numericValue} suffix={suffix} active={visible} />
              </p>

              <p className="font-heading font-bold text-white/80 text-sm mb-1 leading-tight">{label}</p>
              <p className="font-body text-white/35 text-xs leading-tight">{sublabel}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Achievement highlight cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {[
            {
              icon: ShieldCheck,
              title: "Authorized Distributor",
              desc: "Officially certified by GMV Italy, ARKEL, Tectronics, Marazzi & Shiv Shakti for Western & Northern India",
              color: "text-emerald-400",
              bg: "bg-emerald-400/10",
              border: "border-emerald-400/20",
            },
            {
              icon: Award,
              title: "Distributor of the Year",
              desc: "Recognized as GMV's top performing distributor multiple times for outstanding sales and customer satisfaction",
              color: "text-amber-400",
              bg: "bg-amber-400/10",
              border: "border-amber-400/20",
            },
            {
              icon: TrendingUp,
              title: "Decade of Growth",
              desc: "From a startup in 2015 to serving 500+ clients across 7+ states — Eletech has grown into a nationally recognized brand",
              color: "text-blue-400",
              bg: "bg-blue-400/10",
              border: "border-blue-400/20",
            },
          ].map(({ icon: Icon, title, desc, color, bg, border }, i) => (
            <div
              key={i}
              className={`group flex gap-4 p-6 rounded-2xl border ${border} ${bg} hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={color} size={22} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base mb-1.5">{title}</h4>
                <p className="font-body text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Authorized distributor brand strip */}
        <div className="border-t border-white/10 pt-10">
          <p className="text-center font-body text-white/35 text-xs uppercase tracking-widest mb-7">
            Authorized Distributor For
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {brands.map(({ name, origin }) => (
              <div key={name} className="text-center group cursor-default">
                <p className="font-heading font-black text-xl md:text-2xl text-white/25 hover:text-white/70 transition-colors duration-300 tracking-wide">
                  {name}
                </p>
                <p className="font-body text-xs text-white/20 group-hover:text-white/45 transition-colors duration-300 mt-0.5">
                  {origin}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
