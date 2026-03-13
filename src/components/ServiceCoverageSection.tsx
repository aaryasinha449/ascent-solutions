import { MapPin, Clock, PhoneCall, Users } from "lucide-react";

const regions = [
  {
    name: "North India",
    states: ["Delhi NCR", "Uttar Pradesh", "Punjab", "Haryana", "Rajasthan", "Uttarakhand", "Himachal Pradesh", "J&K"],
    cities: ["Delhi", "Noida", "Gurgaon", "Jaipur", "Chandigarh", "Lucknow", "Agra"],
    color: "border-blue-200 bg-blue-50",
    dot: "bg-blue-500",
    label: "North",
  },
  {
    name: "West India",
    states: ["Maharashtra", "Gujarat", "Goa", "Madhya Pradesh", "Chhattisgarh"],
    cities: ["Mumbai", "Pune", "Ahmedabad", "Surat", "Nagpur", "Bhopal", "Nashik", "Vadodara"],
    color: "border-primary/30 bg-red-50",
    dot: "bg-primary",
    label: "West",
  },
  {
    name: "South India",
    states: ["Karnataka", "Tamil Nadu", "Telangana", "Andhra Pradesh", "Kerala"],
    cities: ["Bangalore", "Chennai", "Hyderabad", "Kochi", "Coimbatore", "Vijayawada", "Visakhapatnam"],
    color: "border-green-200 bg-green-50",
    dot: "bg-green-500",
    label: "South",
  },
  {
    name: "East India",
    states: ["West Bengal", "Odisha", "Bihar", "Jharkhand", "Assam", "North-East States"],
    cities: ["Kolkata", "Bhubaneswar", "Patna", "Ranchi", "Guwahati"],
    color: "border-amber-200 bg-amber-50",
    dot: "bg-amber-500",
    label: "East",
  },
];

const stats = [
  { icon: MapPin, value: "28+", label: "States Covered" },
  { icon: Users, value: "100+", label: "Cities Served" },
  { icon: Clock, value: "4 hrs", label: "Avg Response Time" },
  { icon: PhoneCall, value: "24/7", label: "Emergency Support" },
];

export default function ServiceCoverageSection() {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">
              Pan-India Presence
            </span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            Service Coverage <span className="text-primary">Across India</span>
          </h2>
          <p className="section-subheading">
            Eletech operates an extensive service network spanning 28+ states and all major cities.
            Our regional offices and certified partners ensure fast response times nationwide.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={i} className="bg-background border border-border rounded-2xl p-5 text-center card-hover">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="text-primary" size={20} />
              </div>
              <p className="font-heading font-black text-3xl text-primary leading-none mb-1">{value}</p>
              <p className="font-body text-muted-foreground text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* Region Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {regions.map(({ name, states, cities, color, dot, label }, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 ${color} p-5 card-hover cursor-default`}
            >
              {/* Region Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`w-3 h-3 rounded-full ${dot} shadow-sm flex-shrink-0`} />
                <h3 className="font-heading font-bold text-base text-foreground">{name}</h3>
              </div>

              {/* States */}
              <div className="mb-4">
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">States</p>
                <div className="flex flex-wrap gap-1.5">
                  {states.map((state, j) => (
                    <span key={j} className="bg-white/80 border border-border/50 rounded-full px-2 py-0.5 font-body text-xs text-foreground">
                      {state}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Cities */}
              <div>
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">Key Cities</p>
                <div className="space-y-1">
                  {cities.slice(0, 4).map((city, j) => (
                    <div key={j} className="flex items-center gap-1.5">
                      <MapPin className="text-primary flex-shrink-0" size={10} />
                      <span className="font-body text-xs text-foreground/80">{city}</span>
                    </div>
                  ))}
                  {cities.length > 4 && (
                    <p className="font-body text-xs text-primary ml-3.5">+{cities.length - 4} more cities</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 bg-foreground rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          </div>
          <div className="relative z-10">
            <p className="font-heading font-bold text-2xl text-white mb-2">🇮🇳 Serving All Across India</p>
            <p className="font-body text-white/65 text-sm mb-5">
              Can't find your city? Contact us — we likely serve your area through our certified partner network.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-xl shadow-button transition-all duration-200"
            >
              <PhoneCall size={15} /> Check Your City Coverage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
