import { Award, CheckSquare, Star } from "lucide-react";

const certs = [
  { title: "ISO 9001:2015", subtitle: "Quality Management System", icon: "🏆", color: "border-amber-200 bg-amber-50" },
  { title: "IS 14665", subtitle: "Bureau of Indian Standards", icon: "🇮🇳", color: "border-orange-200 bg-orange-50" },
  { title: "CE Certified", subtitle: "European Conformity Mark", icon: "🇪🇺", color: "border-blue-200 bg-blue-50" },
  { title: "NSIC Registered", subtitle: "National Small Industries Corp.", icon: "📋", color: "border-green-200 bg-green-50" },
  { title: "MSME Certified", subtitle: "Ministry of MSME, India", icon: "🏅", color: "border-purple-200 bg-purple-50" },
  { title: "Authorized Dealer", subtitle: "Multiple Premium Brands", icon: "✅", color: "border-red-200 bg-red-50" },
];

const awards = [
  { year: "2023", title: "Best Elevator Distributor — West India", org: "Elevator Industry Association" },
  { year: "2022", title: "Excellence in Safety Standards", org: "National Safety Council India" },
  { year: "2021", title: "Top Rated Service Provider", org: "BuildIndia Awards" },
  { year: "2019", title: "10 Years of Excellence Award", org: "Eletech Internal Achievement" },
];

export default function CertificatesSection() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <CheckSquare className="text-primary" size={22} />
              Certifications & Approvals
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {certs.map(({ title, subtitle, icon, color }, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border-2 ${color} p-4 text-center card-hover`}
                >
                  <div className="text-4xl mb-3">{icon}</div>
                  <p className="font-heading font-bold text-sm text-foreground mb-1">{title}</p>
                  <p className="font-body text-xs text-muted-foreground leading-tight">{subtitle}</p>
                </div>
              ))}
            </div>
          </div>

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

              {/* Industry Partners */}
              <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-2xl">
                <p className="font-heading font-bold text-sm text-foreground mb-3">Authorized Dealer for</p>
                <div className="flex flex-wrap gap-2">
                  {["Johnson Lifts", "Otis", "KONE", "Schindler", "ThyssenKrupp", "Mitsubishi", "Fujitec"].map((brand, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-background border border-border rounded-full text-xs font-body font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
