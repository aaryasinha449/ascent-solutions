import { useInView } from "@/hooks/use-in-view";
import { CheckCircle2, Award, Shield, Zap } from "lucide-react";

const highlights = [
  "Authorized distributor of India's leading elevator brands",
  "ISO certified installation and maintenance processes",
  "Nationwide service network with 24/7 support",
  "Expert team of certified elevator engineers & technicians",
  "Customized solutions for residential, commercial & industrial",
  "Transparent pricing with no hidden charges",
];

const values = [
  {
    icon: Shield,
    title: "Safety First",
    desc: "Every installation meets IS/ISO safety standards with rigorous quality checks.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    desc: "We partner only with globally certified elevator manufacturers.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Efficient project timelines with minimal disruption to your operations.",
  },
];

export default function AboutSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Eletech Trading Corporation team"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-background rounded-xl shadow-card-hover p-5 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-button flex-shrink-0">
                  <Award className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <p className="font-heading font-black text-3xl text-foreground leading-tight">15+</p>
                  <p className="font-body text-sm text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>
            {/* Red accent bar */}
            <div className="absolute -left-4 top-8 bottom-8 w-1.5 bg-gradient-primary rounded-full hidden md:block" />
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="red-line" />
              <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">
                About Eletech
              </span>
            </div>

            <h2 className="section-heading mb-5">
              India's Trusted Partner in{" "}
              <span className="text-primary">Elevator Solutions</span>
            </h2>

            <p className="section-subheading mb-5">
              Eletech Trading Corporation is a leading supplier and distributor of premium elevator
              and lift solutions across India. Founded with a vision to transform vertical
              transportation, we have grown into one of India's most reliable names in the elevator
              industry.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              With over 15 years of industry expertise, we serve residential complexes, commercial
              towers, hospitals, hotels, and industrial facilities — delivering customized,
              high-quality elevator systems backed by comprehensive after-sales support.
            </p>

            {/* Highlights */}
            <ul className="space-y-2.5 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span className="font-body text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Value cards */}
            <div className="grid grid-cols-3 gap-3">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-section-alt rounded-xl p-4 border border-border card-hover">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <p className="font-heading font-bold text-sm text-foreground mb-1">{title}</p>
                  <p className="font-body text-xs text-muted-foreground leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
