import { useState } from "react";
import { MapPin, Clock, PhoneCall, Users, ChevronRight } from "lucide-react";

/* ── Data ─────────────────────────────────────────────────── */
const statesData = [
  {
    name: "Maharashtra",
    region: "West",
    cities: [
      { name: "Mumbai", landmark: "Gateway of India", img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400&q=80" },
      { name: "Pune", landmark: "Shaniwar Wada", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80" },
      { name: "Nagpur", landmark: "Deekshabhoomi", img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&q=80" },
      { name: "Nashik", landmark: "Panchavati Temples", img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80" },
    ],
  },
  {
    name: "Delhi NCR",
    region: "North",
    cities: [
      { name: "New Delhi", landmark: "India Gate", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80" },
      { name: "Noida", landmark: "Sector 18 Market", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80" },
      { name: "Gurgaon", landmark: "Cyber Hub", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&q=80" },
      { name: "Faridabad", landmark: "Badkhal Lake", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400&q=80" },
    ],
  },
  {
    name: "Gujarat",
    region: "West",
    cities: [
      { name: "Ahmedabad", landmark: "Sabarmati Ashram", img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80" },
      { name: "Surat", landmark: "Diamond City Waterfront", img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&q=80" },
      { name: "Vadodara", landmark: "Laxmi Vilas Palace", img: "https://images.unsplash.com/photo-1609766857958-4b69f5bc8ff6?w=400&q=80" },
      { name: "Rajkot", landmark: "Rotary Dolls Museum", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80" },
    ],
  },
  {
    name: "Karnataka",
    region: "South",
    cities: [
      { name: "Bangalore", landmark: "Vidhana Soudha", img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&q=80" },
      { name: "Mysore", landmark: "Mysore Palace", img: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=400&q=80" },
      { name: "Mangalore", landmark: "Panambur Beach", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
      { name: "Hubli", landmark: "Unkal Lake", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80" },
    ],
  },
  {
    name: "Tamil Nadu",
    region: "South",
    cities: [
      { name: "Chennai", landmark: "Marina Beach", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80" },
      { name: "Coimbatore", landmark: "Adiyogi Shiva", img: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?w=400&q=80" },
      { name: "Madurai", landmark: "Meenakshi Temple", img: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=400&q=80" },
      { name: "Salem", landmark: "Yercaud Hills", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80" },
    ],
  },
  {
    name: "Rajasthan",
    region: "North",
    cities: [
      { name: "Jaipur", landmark: "Hawa Mahal", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&q=80" },
      { name: "Jodhpur", landmark: "Mehrangarh Fort", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80" },
      { name: "Udaipur", landmark: "Lake Palace", img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=400&q=80" },
      { name: "Jaisalmer", landmark: "Golden Fort", img: "https://images.unsplash.com/photo-1602642977157-b7c7f7b9e3ed?w=400&q=80" },
    ],
  },
  {
    name: "West Bengal",
    region: "East",
    cities: [
      { name: "Kolkata", landmark: "Howrah Bridge", img: "https://images.unsplash.com/photo-1558431382-27e303142255?w=400&q=80" },
      { name: "Siliguri", landmark: "Mahananda Wildlife", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80" },
      { name: "Durgapur", landmark: "Durgapur Barrage", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80" },
    ],
  },
  {
    name: "Telangana",
    region: "South",
    cities: [
      { name: "Hyderabad", landmark: "Charminar", img: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=400&q=80" },
      { name: "Warangal", landmark: "Warangal Fort", img: "https://images.unsplash.com/photo-1604497181015-76590d828b82?w=400&q=80" },
      { name: "Nizamabad", landmark: "Nizamabad Fort", img: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=400&q=80" },
    ],
  },
  {
    name: "Uttar Pradesh",
    region: "North",
    cities: [
      { name: "Agra", landmark: "Taj Mahal", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80" },
      { name: "Lucknow", landmark: "Bara Imambara", img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=400&q=80" },
      { name: "Varanasi", landmark: "Ganges Ghats", img: "https://images.unsplash.com/photo-1561361513-2d000a50f396?w=400&q=80" },
      { name: "Kanpur", landmark: "Moti Jheel", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80" },
    ],
  },
  {
    name: "Kerala",
    region: "South",
    cities: [
      { name: "Kochi", landmark: "Chinese Fishing Nets", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80" },
      { name: "Thiruvananthapuram", landmark: "Padmanabhaswamy Temple", img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80" },
      { name: "Calicut", landmark: "Kappad Beach", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
    ],
  },
  {
    name: "Punjab",
    region: "North",
    cities: [
      { name: "Chandigarh", landmark: "Rock Garden", img: "https://images.unsplash.com/photo-1609766857958-4b69f5bc8ff6?w=400&q=80" },
      { name: "Amritsar", landmark: "Golden Temple", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80" },
      { name: "Ludhiana", landmark: "Ranjit Singh War Museum", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80" },
    ],
  },
  {
    name: "Odisha",
    region: "East",
    cities: [
      { name: "Bhubaneswar", landmark: "Lingaraj Temple", img: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=400&q=80" },
      { name: "Puri", landmark: "Jagannath Temple", img: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=400&q=80" },
      { name: "Cuttack", landmark: "Barabati Fort", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80" },
    ],
  },
];

const coverageStats = [
  { icon: MapPin, value: "28+", label: "States Covered" },
  { icon: Users, value: "100+", label: "Cities Served" },
  { icon: Clock, value: "4 hrs", label: "Avg Response Time" },
  { icon: PhoneCall, value: "24/7", label: "Emergency Support" },
];

const regionColors: Record<string, string> = {
  North: "bg-blue-50 border-blue-200 text-blue-700",
  South: "bg-green-50 border-green-200 text-green-700",
  West: "bg-primary/10 border-primary/30 text-primary",
  East: "bg-amber-50 border-amber-200 text-amber-700",
};

const regionDots: Record<string, string> = {
  North: "bg-blue-500",
  South: "bg-green-600",
  West: "bg-primary",
  East: "bg-amber-500",
};

export default function ServiceCoverageSection() {
  const [activeState, setActiveState] = useState(statesData[0].name);

  const currentState = statesData.find((s) => s.name === activeState) ?? statesData[0];

  return (
    <section id="coverage" className="py-20 md:py-28 bg-section-alt">
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
            Click a state to explore the cities we serve. Our certified engineers and
            service partners ensure rapid response across the country.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {coverageStats.map(({ icon: Icon, value, label }, i) => (
            <div key={i} className="bg-background border border-border rounded-2xl p-5 text-center card-hover">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="text-primary" size={20} />
              </div>
              <p className="font-heading font-black text-3xl text-primary leading-none mb-1">{value}</p>
              <p className="font-body text-muted-foreground text-sm">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">

          {/* Left: State selector */}
          <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-card">
            <div className="bg-gradient-primary px-5 py-4">
              <h3 className="font-heading font-bold text-base text-primary-foreground">Select a State</h3>
              <p className="font-body text-primary-foreground/70 text-xs mt-0.5">Click to see cities & coverage</p>
            </div>
            <div className="divide-y divide-border max-h-[460px] overflow-y-auto scrollbar-hide">
              {statesData.map((state) => {
                const isActive = state.name === activeState;
                return (
                  <button
                    key={state.name}
                    onClick={() => setActiveState(state.name)}
                    className={`w-full flex items-center justify-between px-5 py-3.5 text-left transition-all duration-200 group ${
                      isActive
                        ? "bg-primary/8 border-l-4 border-l-primary"
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
                      <span className="font-body text-xs text-muted-foreground">{state.cities.length} cities</span>
                      <ChevronRight size={14} className={`transition-all duration-200 ${isActive ? "text-primary rotate-90" : "text-muted-foreground group-hover:text-primary"}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: City cards */}
          <div>
            {/* Region badge + state name */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-3 h-3 rounded-full ${regionDots[currentState.region]}`} />
              <h3 className="font-heading font-bold text-2xl text-foreground">{currentState.name}</h3>
              <span className={`inline-block text-xs font-body font-semibold px-3 py-1 rounded-full border ${regionColors[currentState.region]}`}>
                {currentState.region} India
              </span>
              <span className="font-body text-muted-foreground text-sm ml-auto">
                {currentState.cities.length} cities covered
              </span>
            </div>

            {/* City cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" key={activeState}>
              {currentState.cities.map((city, i) => (
                <div
                  key={city.name}
                  className="group relative bg-background border border-border rounded-2xl overflow-hidden card-hover cursor-default"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {/* Image */}
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={city.img}
                      alt={city.landmark}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Active indicator */}
                    <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-green-400 shadow-sm" title="Actively Served" />
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <p className="font-heading font-bold text-sm text-foreground">{city.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={10} className="text-primary flex-shrink-0" />
                      <p className="font-body text-xs text-muted-foreground truncate">{city.landmark}</p>
                    </div>
                  </div>

                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              ))}
            </div>

            {/* Bottom banner */}
            <div className="mt-8 bg-foreground rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
              </div>
              <div className="relative z-10 text-center md:text-left">
                <p className="font-heading font-bold text-lg text-white">🇮🇳 Can't find your city?</p>
                <p className="font-body text-white/65 text-sm mt-1">
                  We likely serve your area through our certified partner network across all 28+ states.
                </p>
              </div>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="relative z-10 flex-shrink-0 flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-xl shadow-button transition-all duration-200 whitespace-nowrap"
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
