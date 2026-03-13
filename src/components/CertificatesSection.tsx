import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";
import { Award, CheckSquare, Star, ChevronLeft, ChevronRight } from "lucide-react";

const certs = [
  { title: "ISO 9001:2015",   subtitle: "Quality Management System",         icon: "🏆", color: "border-amber-200 bg-amber-50" },
  { title: "IS 14665",        subtitle: "Bureau of Indian Standards",          icon: "🇮🇳", color: "border-orange-200 bg-orange-50" },
  { title: "CE Certified",    subtitle: "European Conformity Mark",            icon: "🇪🇺", color: "border-blue-200 bg-blue-50" },
  { title: "NSIC Registered", subtitle: "National Small Industries Corp.",     icon: "📋", color: "border-green-200 bg-green-50" },
  { title: "MSME Certified",  subtitle: "Ministry of MSME, India",             icon: "🏅", color: "border-purple-200 bg-purple-50" },
  { title: "Authorized Dealer",subtitle: "Multiple Premium Brands",            icon: "✅", color: "border-red-200 bg-red-50" },
  { title: "OHSAS 18001",     subtitle: "Occupational Health & Safety",        icon: "🛡️", color: "border-teal-200 bg-teal-50" },
  { title: "ISO 14001:2015",  subtitle: "Environmental Management",            icon: "🌿", color: "border-lime-200 bg-lime-50" },
];

const awards = [
  { year: "2023", title: "Best Elevator Distributor — West India",  org: "Elevator Industry Association" },
  { year: "2022", title: "Excellence in Safety Standards",          org: "National Safety Council India" },
  { year: "2021", title: "Top Rated Service Provider",              org: "BuildIndia Awards" },
  { year: "2019", title: "10 Years of Excellence Award",            org: "Eletech Internal Achievement" },
];

export default function CertificatesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView(0.1);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <section id="industries" className="py-20 md:py-28 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">
              Certified & Awarded
            </span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            Certifications & <span className="text-primary">Awards</span>
          </h2>
          <p className="section-subheading">
            Our commitment to quality and safety is backed by multiple industry certifications
            and recognized by leading associations.
          </p>
        </div>

        {/* Certifications Carousel */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
              <CheckSquare className="text-primary" size={22} />
              Certifications & Approvals
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full border-2 border-border hover:border-primary hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full border-2 border-border hover:border-primary hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Scroll container */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {certs.map(({ title, subtitle, icon, color }, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 w-48 rounded-2xl border-2 ${color} p-5 text-center card-hover cursor-default`}
                >
                  <div className="text-5xl mb-3">{icon}</div>
                  <p className="font-heading font-bold text-sm text-foreground mb-1">{title}</p>
                  <p className="font-body text-xs text-muted-foreground leading-tight">{subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll dots indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === 0 ? "w-5 bg-primary" : "w-1.5 bg-muted"}`} />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards */}
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <Award className="text-primary" size={22} />
              Industry Awards & Recognition
            </h3>
            <div className="space-y-4">
              {awards.map(({ year, title, org }, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl bg-section-alt border border-border card-hover"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-xl flex flex-col items-center justify-center shadow-button">
                    <Star className="text-primary-foreground" size={16} />
                    <span className="text-primary-foreground font-heading font-black text-xs mt-1">{year}</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground mb-0.5">{title}</p>
                    <p className="font-body text-xs text-muted-foreground">{org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Partners */}
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <Award className="text-primary" size={22} />
              Authorized Dealer For
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {["Johnson Lifts", "Otis", "KONE", "Schindler", "ThyssenKrupp", "Mitsubishi", "Fujitec", "Hyundai Elevator"].map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-section-alt border border-border rounded-xl card-hover"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-black text-primary text-xs">
                      {brand.split(" ").map(w => w[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                  <span className="font-body text-sm font-medium text-foreground">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
