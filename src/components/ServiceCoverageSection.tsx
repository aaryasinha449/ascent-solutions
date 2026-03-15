import { useState } from "react";
import { MapPin, Clock, PhoneCall, Users, ChevronRight, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

/* ── Data — only specified service locations ─────────────────── */
const statesData = [
  {
    name: "Maharashtra",
    region: "West",
    cities: [
      {
        name: "Pune",
        landmark: "Shaniwar Wada",
        img: "https://images.unsplash.com/photo-1580581096469-c6a7c5a5e8a3?w=600&q=85",
      },
      {
        name: "Nashik",
        landmark: "Panchavati Temples",
        img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=85",
      },
    ],
  },
  {
    name: "Rajasthan",
    region: "North",
    cities: [
      {
        name: "Jaipur",
        landmark: "Hawa Mahal",
        img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=85",
      },
    ],
  },
  {
    name: "West Bengal",
    region: "East",
    cities: [
      {
        name: "Kolkata",
        landmark: "Howrah Bridge",
        img: "https://images.unsplash.com/photo-1558431382-27e303142255?w=600&q=85",
      },
    ],
  },
  {
    name: "Assam",
    region: "East",
    cities: [
      {
        name: "Guwahati",
        landmark: "Kamakhya Temple",
        img: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=600&q=85",
      },
      {
        name: "Dibrugarh",
        landmark: "Brahmaputra River",
        img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=85",
      },
    ],
  },
  {
    name: "Uttar Pradesh",
    region: "North",
    cities: [
      {
        name: "Ayodhya",
        landmark: "Ram Mandir",
        img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=85",
      },
    ],
  },
  {
    name: "Delhi NCR",
    region: "North",
    cities: [
      {
        name: "New Delhi",
        landmark: "India Gate",
        img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=85",
      },
      {
        name: "Noida",
        landmark: "Sector 18 Market",
        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=85",
      },
      {
        name: "Gurgaon",
        landmark: "Cyber Hub",
        img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=85",
      },
    ],
  },
];

const coverageStats = [
  { icon: MapPin,     value: "6",     label: "States Covered" },
  { icon: Users,      value: "10+",   label: "Cities Served" },
  { icon: Clock,      value: "4 hrs", label: "Avg Response Time" },
  { icon: PhoneCall,  value: "24/7",  label: "Emergency Support" },
];

const regionColors: Record<string, string> = {
  North: "bg-blue-50 border-blue-200 text-blue-700",
  South: "bg-green-50 border-green-200 text-green-700",
  West:  "bg-primary/10 border-primary/30 text-primary",
  East:  "bg-amber-50 border-amber-200 text-amber-700",
};
const regionDots: Record<string, string> = {
  North: "bg-blue-500",
  South: "bg-green-600",
  West:  "bg-primary",
  East:  "bg-amber-500",
};

export default function ServiceCoverageSection() {
  const [activeState, setActiveState] = useState(statesData[0].name);
  const { ref, inView } = useInView(0.08);

  const currentState = statesData.find((s) => s.name === activeState) ?? statesData[0];

  return (
    <section id="coverage" className="py-24 md:py-32 bg-section-alt relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-primary mb-4">Pan-India Presence</span>
          <h2 className="section-heading mb-4">
            Service Coverage <span className="gradient-text">Across India</span>
          </h2>
          <p className="section-subheading">
            Click a state to explore the cities we actively serve. Our certified engineers
            ensure rapid response and on-site support across every location.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {coverageStats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-2xl p-5 text-center card-hover group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                <Icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={22} />
              </div>
              <p className="font-heading font-black text-3xl text-primary leading-none mb-1">{value}</p>
              <p className="font-body text-muted-foreground text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* Main panel */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-8 items-start">

          {/* ── Left: State selector ── */}
          <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-card">
            <div className="bg-gradient-primary px-5 py-4">
              <h3 className="font-heading font-bold text-base text-primary-foreground">Select a State</h3>
              <p className="font-body text-primary-foreground/70 text-xs mt-0.5">Click to see cities & coverage</p>
            </div>
            <div className="divide-y divide-border">
              {statesData.map((state) => {
                const isActive = state.name === activeState;
                return (
                  <button
                    key={state.name}
                    onClick={() => setActiveState(state.name)}
                    className={`w-full flex items-center justify-between px-5 py-4 text-left transition-all duration-200 group ${
                      isActive
                        ? "bg-primary/5 border-l-4 border-l-primary"
                        : "hover:bg-section-alt border-l-4 border-l-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${regionDots[state.region]}`} />
                      <div>
                        <p className={`font-heading font-bold text-sm ${isActive ? "text-primary" : "text-foreground"}`}>
                          {state.name}
                        </p>
                        <span className={`inline-block text-xs font-body font-semibold px-2 py-0.5 rounded-full border mt-0.5 ${regionColors[state.region]}`}>
                          {state.region} India
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-body text-xs text-muted-foreground">{state.cities.length} {state.cities.length === 1 ? "city" : "cities"}</span>
                      <ChevronRight
                        size={14}
                        className={`transition-all duration-200 ${isActive ? "text-primary rotate-90" : "text-muted-foreground group-hover:text-primary"}`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Right: City cards ── */}
          <div>
            {/* State header */}
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <div className={`w-3 h-3 rounded-full animate-pulse-red ${regionDots[currentState.region]}`} />
              <h3 className="font-heading font-bold text-2xl text-foreground">{currentState.name}</h3>
              <span className={`inline-block text-xs font-body font-semibold px-3 py-1 rounded-full border ${regionColors[currentState.region]}`}>
                {currentState.region} India
              </span>
              <div className="flex items-center gap-1.5 ml-auto bg-green-50 border border-green-200 rounded-full px-3 py-1">
                <CheckCircle size={12} className="text-green-600" />
                <span className="font-body text-xs font-semibold text-green-700">{currentState.cities.length} {currentState.cities.length === 1 ? "City" : "Cities"} Actively Served</span>
              </div>
            </div>

            {/* City grid */}
            <div
              key={activeState}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 animate-fade-in"
            >
              {currentState.cities.map((city, i) => (
                <div
                  key={city.name}
                  className="group relative bg-background border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={city.img}
                      alt={city.landmark}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                    {/* Active badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="font-body text-white text-xs font-semibold">Active</span>
                    </div>

                    {/* City name over image */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="font-heading font-bold text-white text-lg leading-tight drop-shadow">{city.name}</p>
                    </div>

                    {/* Top red accent */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  </div>

                  {/* Info bar */}
                  <div className="px-4 py-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={12} className="text-primary" />
                    </div>
                    <p className="font-body text-xs text-muted-foreground truncate">{city.landmark}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 bg-foreground rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern-dark opacity-30" />
              <div className="relative z-10 text-center md:text-left">
                <p className="font-heading font-bold text-lg text-white">🇮🇳 Don't see your city?</p>
                <p className="font-body text-white/65 text-sm mt-1">
                  We likely serve your area — contact us to confirm coverage in your location.
                </p>
              </div>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="relative z-10 flex-shrink-0 flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-xl shadow-button transition-all duration-200 whitespace-nowrap hover:scale-105"
              >
                <PhoneCall size={15} /> Check Your Coverage
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
