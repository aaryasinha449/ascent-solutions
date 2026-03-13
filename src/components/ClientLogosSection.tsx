const clients = [
  { name: "DLF Limited",          sector: "Real Estate",  initials: "DL" },
  { name: "Godrej Properties",    sector: "Real Estate",  initials: "GP" },
  { name: "Prestige Group",       sector: "Builders",     initials: "PG" },
  { name: "Lodha Group",          sector: "Developers",   initials: "LG" },
  { name: "Tata Housing",         sector: "Real Estate",  initials: "TH" },
  { name: "Shapoorji Pallonji",   sector: "Construction", initials: "SP" },
  { name: "Apollo Hospitals",     sector: "Healthcare",   initials: "AH" },
  { name: "Fortis Healthcare",    sector: "Healthcare",   initials: "FH" },
  { name: "Pacific Malls",        sector: "Retail",       initials: "PM" },
  { name: "K Raheja Corp",        sector: "Real Estate",  initials: "KR" },
  { name: "Oberoi Realty",        sector: "Real Estate",  initials: "OR" },
  { name: "Mahindra Lifespaces",  sector: "Developers",   initials: "ML" },
];

export default function ClientLogosSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden border-y border-border">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-primary mb-3">Trusted By</span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
            Our <span className="gradient-text">Valued Clients</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
            Partnered with India's most respected builders, developers, and institutions
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          <div
            className="flex gap-5 hover:[animation-play-state:paused]"
            style={{ animation: "marquee 32s linear infinite" }}
          >
            {[...clients, ...clients].map(({ name, sector, initials }, i) => (
              <div
                key={i}
                className="group flex-shrink-0 w-48 bg-background border border-border rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-primary/40 hover:shadow-card-hover hover:-translate-y-1 cursor-default"
              >
                {/* Logo circle — grayscale → color on hover */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 bg-muted group-hover:bg-primary/10 filter grayscale group-hover:grayscale-0 shadow-sm group-hover:shadow-button">
                  <span className="font-heading font-black text-lg text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {initials}
                  </span>
                </div>
                <p className="font-heading font-bold text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-tight mb-0.5">
                  {name}
                </p>
                <span className="font-body text-xs text-muted-foreground/60 group-hover:text-primary transition-colors duration-300">
                  {sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {["300+ Projects Delivered", "28+ States Covered", "15+ Years Experience", "ISO 9001:2015 Certified"].map((t, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="font-body text-sm text-muted-foreground font-medium">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
