import { useState } from "react";
import { MapPin, Clock, PhoneCall, Users, CheckCircle, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const statesData = [
  {
    name: "Maharashtra",
    region: "West",
    cities: [
      {
        name: "Pune",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Shaniwar_Wada_gate.jpg/1200px-Shaniwar_Wada_gate.jpg",
      },
      {
        name: "Nashik",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Trimbakeshwar_Shiva_Temple.jpg/1200px-Trimbakeshwar_Shiva_Temple.jpg",
      },
    ],
  },
  {
    name: "Gujarat",
    region: "West",
    cities: [
      {
        name: "Ahmedabad",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Sabarmati_Ashram.jpg/1200px-Sabarmati_Ashram.jpg",
      },
      {
        name: "Surat",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Surat_Castle_-_India.jpg/1200px-Surat_Castle_-_India.jpg",
      },
    ],
  },
  {
    name: "Rajasthan",
    region: "North",
    cities: [
      {
        name: "Jaipur",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hawa_Mahal_Jaipur_2.jpg/1200px-Hawa_Mahal_Jaipur_2.jpg",
      },
    ],
  },
  {
    name: "Delhi NCR",
    region: "North",
    cities: [
      {
        name: "New Delhi",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/India_Gate_in_New_Delhi_03-2016.jpg/1200px-India_Gate_in_New_Delhi_03-2016.jpg",
      },
      {
        name: "Noida",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/DND_flyway.jpg/1200px-DND_flyway.jpg",
      },
      {
        name: "Gurgaon",
        img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=85",
      },
    ],
  },
  {
    name: "Uttar Pradesh",
    region: "North",
    cities: [
      {
        name: "Ayodhya",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ram_Mandir_Ayodhya.jpg/1200px-Ram_Mandir_Ayodhya.jpg",
      },
    ],
  },
  {
    name: "West Bengal",
    region: "East",
    cities: [
      {
        name: "Kolkata",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Howrah_Bridge_-_Kolkata_2011-10-13_0097.jpg/1200px-Howrah_Bridge_-_Kolkata_2011-10-13_0097.jpg",
      },
    ],
  },
  {
    name: "Assam",
    region: "East",
    cities: [
      {
        name: "Guwahati",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kamakhya_Temple.jpg/1200px-Kamakhya_Temple.jpg",
      },
    ],
  },
  {
    name: "Jharkhand",
    region: "East",
    cities: [
      {
        name: "Ranchi",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Hundru_Falls.jpg/1200px-Hundru_Falls.jpg",
      },
      {
        name: "Jamshedpur",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Jubilee_Park_Jamshedpur.jpg/1200px-Jubilee_Park_Jamshedpur.jpg",
      },
    ],
  },
  {
    name: "Odisha",
    region: "East",
    cities: [
      {
        name: "Bhubaneswar",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Lingaraj_temple_Bhubaneswar.jpg/1200px-Lingaraj_temple_Bhubaneswar.jpg",
      },
    ],
  },
];

const coverageStats = [
  { icon: MapPin,     value: "9",     label: "States Covered" },
  { icon: Users,      value: "15+",   label: "Cities Served" },
  { icon: Clock,      value: "4 hrs", label: "Avg Response Time" },
  { icon: PhoneCall,  value: "24/7",  label: "Emergency Support" },
];

const regionMeta: Record<string, { pill: string; dot: string; label: string }> = {
  North: { pill: "bg-blue-50 border-blue-200 text-blue-700",   dot: "bg-blue-500",  label: "North India" },
  West:  { pill: "bg-primary/10 border-primary/30 text-primary", dot: "bg-primary", label: "West India"  },
  East:  { pill: "bg-amber-50 border-amber-200 text-amber-700", dot: "bg-amber-500", label: "East India" },
  South: { pill: "bg-green-50 border-green-200 text-green-700", dot: "bg-green-600", label: "South India"},
};

export default function ServiceCoverageSection() {
  const [activeState, setActiveState] = useState(statesData[0].name);
  const { ref, inView } = useInView(0.08);

  const currentState = statesData.find((s) => s.name === activeState) ?? statesData[0];

  return (
    <section id="coverage" className="py-24 md:py-32 bg-section-alt relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-primary mb-4">Pan-India Presence</span>
          <h2 className="section-heading mb-4">
            Service Coverage <span className="gradient-text">Across India</span>
          </h2>
          <p className="section-subheading">
            Select a state to explore cities we actively serve. Our certified engineers ensure
            rapid response and on-site support across every region.
          </p>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {coverageStats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-2xl p-5 text-center group hover:-translate-y-1 transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                <Icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={22} />
              </div>
              <p className="font-heading font-black text-3xl text-primary leading-none mb-1">{value}</p>
              <p className="font-body text-muted-foreground text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Main interactive panel ── */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">

          {/* ── Left: pill-style state tabs ── */}
          <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            {/* Header bar */}
            <div className="bg-gradient-primary px-5 py-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern-dark opacity-20" />
              <p className="relative font-heading font-bold text-base text-primary-foreground">Select a State</p>
              <p className="relative font-body text-primary-foreground/70 text-xs mt-0.5">Click to see cities &amp; coverage</p>
            </div>

            {/* State list */}
            <div className="divide-y divide-border/60">
              {statesData.map((state) => {
                const isActive = state.name === activeState;
                const meta = regionMeta[state.region] ?? regionMeta.West;
                return (
                  <button
                    key={state.name}
                    onClick={() => setActiveState(state.name)}
                    className={`w-full flex items-center justify-between px-5 py-3.5 text-left transition-all duration-200 ${
                      isActive
                        ? "bg-primary/6 border-l-[3px] border-l-primary"
                        : "hover:bg-section-alt border-l-[3px] border-l-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${meta.dot}`} />
                      <div>
                        <p className={`font-heading font-bold text-sm leading-tight ${isActive ? "text-primary" : "text-foreground"}`}>
                          {state.name}
                        </p>
                        <span className={`inline-block text-[10px] font-body font-semibold px-2 py-0.5 rounded-full border mt-0.5 ${meta.pill}`}>
                          {meta.label}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="font-body text-xs text-muted-foreground">
                        {state.cities.length} {state.cities.length === 1 ? "city" : "cities"}
                      </span>
                      <ChevronRight
                        size={14}
                        className={`transition-transform duration-200 ${isActive ? "text-primary rotate-90" : "text-muted-foreground"}`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Right: city cards ── */}
          <div>
            {/* State headline */}
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <span className={`w-3 h-3 rounded-full animate-pulse-red ${regionMeta[currentState.region]?.dot ?? "bg-primary"}`} />
              <h3 className="font-heading font-bold text-2xl text-foreground">{currentState.name}</h3>
              <span className={`inline-block text-xs font-body font-semibold px-3 py-1 rounded-full border ${regionMeta[currentState.region]?.pill}`}>
                {regionMeta[currentState.region]?.label}
              </span>
              <div className="flex items-center gap-1.5 ml-auto bg-green-50 border border-green-200 rounded-full px-3 py-1">
                <CheckCircle size={12} className="text-green-600" />
                <span className="font-body text-xs font-semibold text-green-700">
                  {currentState.cities.length} {currentState.cities.length === 1 ? "City" : "Cities"} Actively Served
                </span>
              </div>
            </div>

            {/* City grid — key forces re-mount animation on state change */}
            <div
              key={activeState}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 animate-fade-in"
            >
              {currentState.cities.map((city, i) => (
                <div
                  key={city.name}
                  className="group relative bg-background border border-border rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2 transition-all duration-350"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: "190px" }}>
                    <img
                      src={city.img}
                      alt={city.name}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Active badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="font-body text-white text-[10px] font-semibold tracking-wide">Active</span>
                    </div>

                    {/* Top accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-primary/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                    {/* City name pinned to bottom */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="flex items-center gap-2">
                        <MapPin size={13} className="text-primary flex-shrink-0" />
                        <p className="font-heading font-bold text-white text-base leading-tight">{city.name}</p>
                      </div>
                    </div>
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
                  We likely serve your area — contact us to confirm coverage.
                </p>
              </div>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="relative z-10 flex-shrink-0 flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-xl shadow-[var(--shadow-button)] transition-all duration-200 whitespace-nowrap hover:scale-105"
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
