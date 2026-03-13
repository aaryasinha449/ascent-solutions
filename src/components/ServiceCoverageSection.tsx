import { MapPin, CheckCircle2 } from "lucide-react";
import indiaMap from "@/assets/india-coverage-map.jpg";

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune",
  "Ahmedabad", "Kolkata", "Jaipur", "Surat", "Lucknow", "Kochi",
  "Chandigarh", "Nagpur", "Indore", "Bhopal", "Coimbatore", "Vadodara",
  "Nashik", "Vijayawada", "Visakhapatnam", "Patna", "Bhubaneswar", "Guwahati",
];

export default function ServiceCoverageSection() {
  return (
    <section className="py-20 md:py-28 bg-section-dark relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="red-line" />
              <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">
                Pan-India Presence
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-5">
              Service Coverage <span className="text-primary">Across India</span>
            </h2>
            <p className="font-body text-white/70 leading-relaxed mb-8">
              Eletech Trading Corporation operates an extensive service network spanning 28+ states 
              and all major cities across India. Our regional offices and certified service partners 
              ensure fast response times and consistent quality everywhere.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <p className="font-heading font-black text-3xl text-primary">28+</p>
                <p className="font-body text-white/60 text-sm">States Covered</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <p className="font-heading font-black text-3xl text-primary">100+</p>
                <p className="font-body text-white/60 text-sm">Cities Served</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <p className="font-heading font-black text-3xl text-primary">4h</p>
                <p className="font-body text-white/60 text-sm">Avg Response Time</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <p className="font-heading font-black text-3xl text-primary">24/7</p>
                <p className="font-body text-white/60 text-sm">Emergency Support</p>
              </div>
            </div>

            {/* City list */}
            <div>
              <p className="font-body text-white/60 text-xs uppercase tracking-wider mb-3">Major Cities We Serve</p>
              <div className="flex flex-wrap gap-2">
                {cities.map((city, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                    <MapPin className="text-primary" size={10} />
                    <span className="font-body text-white/80 text-xs">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <img
                src={indiaMap}
                alt="India service coverage map"
                className="w-full max-h-[500px] object-contain opacity-90"
              />
              {/* Overlay pulse indicators */}
              <div className="absolute top-[30%] left-[35%] w-3 h-3 rounded-full bg-primary animate-pulse-red" title="Delhi" />
              <div className="absolute top-[55%] left-[28%] w-3 h-3 rounded-full bg-primary animate-pulse-red" title="Mumbai" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-[68%] left-[38%] w-3 h-3 rounded-full bg-primary animate-pulse-red" title="Hyderabad" style={{ animationDelay: "1s" }} />
              <div className="absolute top-[75%] left-[44%] w-3 h-3 rounded-full bg-primary animate-pulse-red" title="Bangalore" style={{ animationDelay: "0.3s" }} />
              <div className="absolute top-[78%] left-[55%] w-3 h-3 rounded-full bg-primary animate-pulse-red" title="Chennai" style={{ animationDelay: "0.8s" }} />
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-full shadow-button">
              <p className="font-heading font-bold text-sm whitespace-nowrap">🇮🇳 Serving All Across India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
