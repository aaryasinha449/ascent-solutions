import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Building2, Star, Wrench, MapPin } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "15+", label: "Years Experience", color: "bg-primary/10 text-primary" },
  { icon: Users, value: "300+", label: "Satisfied Clients", color: "bg-blue-50 text-blue-600" },
  { icon: Building2, value: "5000+", label: "Elevators Installed", color: "bg-green-50 text-green-600" },
  { icon: Star, value: "99%", label: "Client Satisfaction", color: "bg-amber-50 text-amber-600" },
  { icon: Wrench, value: "24/7", label: "Support Available", color: "bg-purple-50 text-purple-600" },
  { icon: MapPin, value: "28+", label: "States Covered", color: "bg-red-50 text-red-600" },
];

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
      {/* Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      {/* Red accent line */}
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
          {stats.map(({ icon: Icon, value, label, color }, i) => (
            <div
              key={i}
              className={`text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/8 ${
                visible ? "animate-count-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mx-auto mb-3`}>
                <Icon size={22} />
              </div>
              <p className="font-heading font-black text-3xl md:text-4xl text-white leading-none mb-1">
                {value}
              </p>
              <p className="font-body text-white/60 text-xs leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
