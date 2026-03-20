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
  valueColor: string;
}

const stats: StatItem[] = [
  {
    icon: TrendingUp,
    numericValue: 10,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Established 2015",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    valueColor: "text-primary",
  },
  {
    icon: Users,
    numericValue: 2000,
    suffix: "+",
    label: "Satisfied Clients",
    sublabel: "Across West & North India",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    valueColor: "text-blue-600",
  },
  {
    icon: Building2,
    numericValue: 60000,
    suffix: "+",
    label: "Components Supplied",
    sublabel: "Yearly across India",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    valueColor: "text-emerald-600",
  },
  {
    icon: Award,
    numericValue: 3,
    suffix: "+",
    label: "Authorized Brands",
    sublabel: "Trusted industry partnerships",
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    valueColor: "text-amber-600",
  },
  {
    icon: Wrench,
    numericValue: 24,
    suffix: "/7",
    label: "Support Available",
    sublabel: "Emergency helpline",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    valueColor: "text-purple-600",
  },
  {
    icon: MapPin,
    numericValue: 7,
    suffix: "+",
    label: "States Covered",
    sublabel: "Pan-India network",
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100",
    valueColor: "text-rose-600",
  },
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
  return <span>{count.toLocaleString("en-IN")}{suffix}</span>;
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
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Light background pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">Our Achievements</span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            Numbers That <span className="text-primary">Speak</span> for Themselves
          </h2>
          <p className="section-subheading">
            Established in 2015 — a decade of excellence in elevator components across West &amp; North India
          </p>
        </div>

        {/* Stats grid — premium cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          {stats.map(({ icon: Icon, numericValue, suffix, label, sublabel, iconColor, bgColor, borderColor, valueColor }, i) => (
            <div
              key={i}
              className={`group relative text-center px-4 py-6 md:px-5 md:py-7 rounded-2xl border ${borderColor} bg-background cursor-default
                shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.05)]
                hover:shadow-[0_8px_28px_-4px_rgba(0,0,0,0.13),0_2px_8px_-2px_rgba(0,0,0,0.07)]
                hover:-translate-y-2.5 transition-all duration-300 ease-out
                ${visible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/60 via-primary to-primary/60`} />

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl ${bgColor} border ${borderColor} flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={iconColor} size={20} />
              </div>

              {/* Value */}
              <p className={`font-heading font-black text-[2rem] md:text-[2.25rem] leading-none mb-1.5 tabular-nums tracking-tight ${valueColor}`}>
                <AnimatedCounter target={numericValue} suffix={suffix} active={visible} />
              </p>

              <p className="font-heading font-semibold text-foreground text-[0.78rem] mb-1 leading-tight">{label}</p>
              <p className="font-body text-muted-foreground text-[0.7rem] leading-snug">{sublabel}</p>
            </div>
          ))}
        </div>

        {/* Achievement highlight cards — light bg */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {[
            {
              icon: ShieldCheck,
              title: "Authorized Distributor",
              desc: "Officially certified by GMV India, Shiv Shakti and Marazzi, along with other leading industry partners, for Western & Northern India",
              iconColor: "text-emerald-600",
              bg: "bg-emerald-50",
              border: "border-emerald-100",
            },
            {
              icon: Award,
              title: "Distributor of the Year",
              desc: "Recognized as GMV's top performing distributor multiple times for outstanding sales and customer satisfaction",
              iconColor: "text-amber-600",
              bg: "bg-amber-50",
              border: "border-amber-100",
            },
            {
              icon: TrendingUp,
              title: "Decade of Growth",
              desc: "Over a decade of consistent growth, serving 2000+ satisfied clients with reliable solutions and strong industry partnerships.",
              iconColor: "text-blue-600",
              bg: "bg-blue-50",
              border: "border-blue-100",
            },
          ].map(({ icon: Icon, title, desc, iconColor, bg, border }, i) => (
            <div
              key={i}
              className={`group flex gap-4 p-6 rounded-2xl border ${border} ${bg} shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl bg-background border ${border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <Icon className={iconColor} size={22} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground text-base mb-1.5">{title}</h4>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
