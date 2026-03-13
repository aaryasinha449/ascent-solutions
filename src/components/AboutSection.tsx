import { useInView } from "@/hooks/use-in-view";
import { CheckCircle2, Award, Shield, Zap, ArrowRight } from "lucide-react";

const highlights = [
  "Authorized distributor of India's leading elevator brands",
  "ISO certified installation and maintenance processes",
  "Nationwide service network with 24/7 support",
  "Expert team of certified elevator engineers & technicians",
  "Customized solutions for residential, commercial & industrial",
  "Transparent pricing with no hidden charges",
];

const values = [
  { icon: Shield, title: "Safety First",    desc: "Every installation meets IS/ISO safety standards with rigorous quality checks." },
  { icon: Award,  title: "Quality Assured", desc: "We partner only with globally certified elevator manufacturers." },
  { icon: Zap,    title: "Fast Delivery",   desc: "Efficient project timelines with minimal disruption to your operations." },
];

export default function AboutSection() {
  const { ref, inView } = useInView(0.12);

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Visual ── */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover glow-red">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85"
                alt="Eletech Trading Corporation team"
                className="w-full h-[460px] md:h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-black/20 to-transparent" />

              {/* Experience badge overlaid on image bottom-left */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-card">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-button">
                  <Award className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <p className="font-heading font-black text-3xl text-foreground leading-tight">15+</p>
                  <p className="font-body text-xs text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Floating mini card — top right */}
            <div className="absolute -top-5 -right-5 md:-right-10 bg-background border border-border rounded-2xl p-4 shadow-card-hover hidden md:block animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-foreground leading-tight">5000+ Installs</p>
                  <p className="font-body text-xs text-green-600">Pan-India Coverage</p>
                </div>
              </div>
            </div>

            {/* Red left accent bar */}
            <div className="absolute -left-5 top-10 bottom-10 w-1.5 bg-gradient-primary rounded-full hidden md:block" />
          </div>

          {/* ── Right: Content ── */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="red-line" />
                <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">About Eletech</span>
              </div>
              <h2 className="section-heading mb-4">
                India's Trusted Partner in{" "}
                <span className="gradient-text">Elevator Solutions</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-base">
                Eletech Trading Corporation is a leading supplier and distributor of premium elevator
                and lift solutions across India. Founded with a vision to transform vertical
                transportation, we have grown into one of India's most reliable names in the elevator industry.
              </p>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed">
              With over 15 years of industry expertise, we serve residential complexes, commercial
              towers, hospitals, hotels, and industrial facilities — delivering customized,
              high-quality elevator systems backed by comprehensive after-sales support.
            </p>

            {/* Highlights in 2-col grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-section-alt border border-border/60 hover:border-primary/30 transition-colors duration-200">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={15} />
                  <span className="font-body text-xs text-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Value cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-background rounded-2xl p-4 border border-border shadow-card card-hover group">
                  <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-3 transition-colors duration-200">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <p className="font-heading font-bold text-sm text-foreground mb-1">{title}</p>
                  <p className="font-body text-xs text-muted-foreground leading-snug">{desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-heading font-bold text-sm px-6 py-3.5 rounded-xl shadow-button hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Get a Free Consultation <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
