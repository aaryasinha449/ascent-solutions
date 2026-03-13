const clients = [
  { name: "DLF Limited", sector: "Real Estate" },
  { name: "Godrej Properties", sector: "Real Estate" },
  { name: "Prestige Group", sector: "Builders" },
  { name: "Lodha Group", sector: "Developers" },
  { name: "Tata Housing", sector: "Real Estate" },
  { name: "Shapoorji Pallonji", sector: "Construction" },
  { name: "Apollo Hospitals", sector: "Healthcare" },
  { name: "Fortis Healthcare", sector: "Healthcare" },
  { name: "Pacific Malls", sector: "Retail" },
  { name: "K Raheja Corp", sector: "Real Estate" },
  { name: "Oberoi Realty", sector: "Real Estate" },
  { name: "Mahindra Lifespaces", sector: "Developers" },
];

export default function ClientLogosSection() {
  return (
    <section className="py-16 bg-section-alt border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="font-body font-semibold text-muted-foreground text-sm uppercase tracking-wider mb-2">
            Trusted By Leading Organizations
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
            Our <span className="text-primary">Clients</span>
          </h2>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-section-alt to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-section-alt to-transparent pointer-events-none" />
          
          <div className="flex gap-4 animate-[marquee_30s_linear_infinite]">
            {[...clients, ...clients].map(({ name, sector }, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-44 bg-background border border-border rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-primary hover:shadow-card-hover transition-all duration-300"
              >
                {/* Logo placeholder with initials */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                  <span className="font-heading font-black text-primary text-base">
                    {name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <p className="font-heading font-bold text-xs text-foreground leading-tight">{name}</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">{sector}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}
