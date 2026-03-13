import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Building2, Star, Wrench, MapPin } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  numericValue: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  { icon: TrendingUp, numericValue: 15,   suffix: "+",  label: "Years Experience",     color: "bg-primary/10 text-primary" },
  { icon: Users,      numericValue: 300,  suffix: "+",  label: "Satisfied Clients",    color: "bg-blue-50 text-blue-600" },
  { icon: Building2,  numericValue: 5000, suffix: "+",  label: "Elevators Installed",  color: "bg-green-50 text-green-600" },
  { icon: Star,       numericValue: 99,   suffix: "%",  label: "Client Satisfaction",  color: "bg-amber-50 text-amber-600" },
  { icon: Wrench,     numericValue: 24,   suffix: "/7", label: "Support Available",    color: "bg-purple-50 text-purple-600" },
  { icon: MapPin,     numericValue: 28,   suffix: "+",  label: "States Covered",       color: "bg-red-50 text-red-600" },
];

function AnimatedCounter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    // Special case: "24/7" — just jump straight to target
    if (suffix === "/7") { setCount(target); return; }

    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target, suffix]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-section-dark relative overflow-hidden">
      {/* Dot texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
      </div>
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="red-line mx-auto" />
          </div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
            Numbers That Speak for Themselves
          </h2>
          <p className="font-body text-white/60 text-sm">
            Over a decade of excellence in elevator solutions across India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map(({ icon: Icon, numericValue, suffix, label, color }, i) => (
            <div
              key={i}
              className={`text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/8 ${
                visible ? "animate-count-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mx-auto mb-3`}>
                <Icon size={22} />
              </div>
              <p className="font-heading font-black text-3xl md:text-4xl text-white leading-none mb-1 tabular-nums">
                <AnimatedCounter target={numericValue} suffix={suffix} active={visible} />
              </p>
              <p className="font-body text-white/60 text-xs leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
