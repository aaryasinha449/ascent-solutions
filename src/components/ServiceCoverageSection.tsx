import { useState } from "react";
import { MapPin, Clock, PhoneCall, Users, CheckCircle, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

import cityPune from "@/assets/city-pune.jpg";
import cityNashik from "@/assets/city-nashik.jpg";
import cityAhmedabad from "@/assets/city-ahmedabad.jpg";
import cityJaipur from "@/assets/city-jaipur.jpg";
import cityNewDelhi from "@/assets/city-new-delhi.jpg";
import cityNoida from "@/assets/city-noida.jpg";
import cityGurgaon from "@/assets/city-gurgaon.jpg";
import cityAyodhya from "@/assets/city-ayodhya.jpg";
import cityGuwahati from "@/assets/city-guwahati.jpg";
import cityBhubaneswar from "@/assets/city-bhubaneswar.jpg";
import citySurat from "@/assets/city-surat.jpg";
import cityKolkata from "@/assets/city-kolkata.jpg";
import cityRanchi from "@/assets/city-ranchi.jpg";
import cityJamshedpur from "@/assets/city-jamshedpur.jpg";

const statesData = [
  {
    name: "Maharashtra",
    region: "West",
    cities: [
      { name: "Pune",   img: cityPune   },
      { name: "Nashik", img: cityNashik },
    ],
  },
  {
    name: "Gujarat",
    region: "West",
    cities: [
      {
        name: "Ahmedabad",
        img: cityAhmedabad,
      },
      { name: "Surat", img: citySurat },
    ],
  },
  {
    name: "Rajasthan",
    region: "North",
    cities: [
      { name: "Jaipur", img: cityJaipur },
    ],
  },
  {
    name: "Delhi NCR",
    region: "North",
    cities: [
      { name: "New Delhi", img: cityNewDelhi },
      { name: "Noida",     img: cityNoida    },
      { name: "Gurgaon",   img: cityGurgaon  },
    ],
  },
  {
    name: "Uttar Pradesh",
    region: "North",
    cities: [
      { name: "Ayodhya", img: cityAyodhya },
    ],
  },
  {
    name: "West Bengal",
    region: "East",
    cities: [
      { name: "Kolkata", img: cityKolkata },
    ],
  },
  {
    name: "Assam",
    region: "East",
    cities: [
      { name: "Guwahati", img: cityGuwahati },
    ],
  },
  {
    name: "Jharkhand",
    region: "East",
    cities: [
      { name: "Ranchi",      img: cityRanchi      },
      { name: "Jamshedpur", img: cityJamshedpur  },
    ],
  },
  {
    name: "Odisha",
    region: "East",
    cities: [
      { name: "Bhubaneswar", img: cityBhubaneswar },
    ],
  },
];

const coverageStats = [
  { icon: MapPin,    value: "9",     label: "States Covered" },
  { icon: Users,     value: "15+",   label: "Cities Served" },
  { icon: Clock,     value: "4 hrs", label: "Avg Response Time" },
  { icon: PhoneCall, value: "24/7",  label: "Emergency Support" },
];

const regionMeta: Record<string, { pill: string; dot: string; label: string }> = {
  North: { pill: "bg-blue-50 border-blue-200 text-blue-700",    dot: "bg-blue-500",  label: "North India" },
  West:  { pill: "bg-primary/10 border-primary/30 text-primary", dot: "bg-primary",  label: "West India"  },
  East:  { pill: "bg-amber-50 border-amber-200 text-amber-700", dot: "bg-amber-500", label: "East India"  },
  South: { pill: "bg-green-50 border-green-200 text-green-700", dot: "bg-green-600", label: "South India" },
};

/** City card image with shimmer skeleton */
function CityImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full">
      {/* Shimmer placeholder */}
      {!loaded && (
        <div
          className="absolute inset-0"
          style={{ background: "hsl(var(--muted)/0.5)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, hsl(var(--muted)/0.8) 50%, transparent 100%)",
              animation: "shimmer 1.6s infinite",
            }}
          />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease, transform 0.7s ease" }}
      />
    </div>
  );
}

export default function ServiceCoverageSection() {
  const [activeState, setActiveState] = useState(statesData[0].name);
  const { ref, inView } = useInView(0.08);

  const currentState = statesData.find((s) => s.name === activeState) ?? statesData[0];

  return (
    <section id="coverage" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.4) 50%, hsl(var(--background)) 100%)" }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[560px] h-[560px] bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full translate-x-1/3 translate-y-1/3 blur-[80px] pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-widest">Pan-India Presence</span>
            <span className="red-line" />
          </div>
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
              className="group relative overflow-hidden rounded-2xl p-5 text-center hover:-translate-y-1 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.55)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1.5px hsl(var(--primary)/0.18)" }}
              />
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                <Icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={22} />
              </div>
              <p className="font-heading font-black text-3xl text-primary leading-none mb-1">{value}</p>
              <p className="font-body text-muted-foreground text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Main interactive panel ── */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">

          {/* ── Left: pill-style state tabs ── */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.80)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            }}
          >
            {/* Header bar */}
            <div className="bg-gradient-primary px-5 py-4 relative overflow-hidden rounded-t-3xl">
              <div className="absolute inset-0 bg-dot-pattern-dark opacity-20" />
              <p className="relative font-heading font-bold text-base text-primary-foreground">Select a State</p>
              <p className="relative font-body text-primary-foreground/70 text-xs mt-0.5">Click to see cities &amp; coverage</p>
            </div>

            {/* State list */}
            <div className="divide-y divide-border/40 p-2">
              {statesData.map((state) => {
                const isActive = state.name === activeState;
                const meta = regionMeta[state.region] ?? regionMeta.West;
                return (
                  <button
                    key={state.name}
                    onClick={() => setActiveState(state.name)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-xl transition-all duration-250 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-[var(--shadow-button)]"
                        : "hover:bg-primary/6 text-foreground"
                    }`}
                    style={{ marginBottom: "2px" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${isActive ? "bg-primary-foreground/80" : meta.dot}`} />
                      <div>
                        <p className={`font-heading font-bold text-sm leading-tight ${isActive ? "text-primary-foreground" : "text-foreground"}`}>
                          {state.name}
                        </p>
                        <span className={`inline-block text-[10px] font-body font-semibold px-2 py-0.5 rounded-full border mt-0.5 ${isActive ? "bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground" : meta.pill}`}>
                          {meta.label}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`font-body text-xs ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        {state.cities.length} {state.cities.length === 1 ? "city" : "cities"}
                      </span>
                      <ChevronRight
                        size={14}
                        className={`transition-transform duration-200 ${isActive ? "text-primary-foreground rotate-90" : "text-muted-foreground"}`}
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
              <div className="flex items-center gap-1.5 ml-auto"
                style={{
                  background: "rgba(220,252,231,0.9)",
                  border: "1px solid rgba(134,239,172,0.6)",
                  borderRadius: "999px",
                  padding: "4px 12px",
                }}
              >
                <CheckCircle size={12} className="text-green-600" />
                <span className="font-body text-xs font-semibold text-green-700">
                  {currentState.cities.length} {currentState.cities.length === 1 ? "City" : "Cities"} Actively Served
                </span>
              </div>
            </div>

            {/* City grid — fixed height prevents layout shift */}
            <div
              key={activeState}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 animate-fade-in"
            >
              {currentState.cities.map((city, i) => (
                <div
                  key={city.name}
                  className="group relative rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-350 cursor-pointer"
                  style={{
                    animationDelay: `${i * 80}ms`,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                >
                  {/* Hover shadow upgrade */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-10"
                    style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.18), 0 0 0 1.5px hsl(var(--primary)/0.22)" }}
                  />

                  {/* Top accent bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-primary/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left z-20" />

                  {/* Image — fixed height so skeleton & image occupy same space */}
                  <div className="relative overflow-hidden" style={{ height: "220px", background: "hsl(var(--muted)/0.4)" }}>
                    <CityImage src={city.img} alt={city.name} />

                    {/* Multi-layer gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Active badge */}
                    <div
                      className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 border border-white/20 z-10"
                      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="font-body text-white text-[10px] font-semibold tracking-wide">Active</span>
                    </div>

                    {/* City name only — no extra labels */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10 z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-primary/90 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin size={10} className="text-primary-foreground" />
                        </div>
                        <p className="font-heading font-bold text-white text-base leading-tight drop-shadow-sm">{city.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              className="mt-8 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden"
              style={{ background: "hsl(var(--foreground))" }}
            >
              <div className="absolute inset-0 bg-dot-pattern-dark opacity-20 pointer-events-none" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/15 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none" />
              <div className="relative z-10 text-center md:text-left">
                <p className="font-heading font-bold text-lg text-white">🇮🇳 Don't see your city?</p>
                <p className="font-body text-white/65 text-sm mt-1">
                  We likely serve your area — contact us to confirm coverage.
                </p>
              </div>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="relative z-10 flex-shrink-0 flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap hover:scale-105 hover:shadow-[var(--shadow-button)]"
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
