import { Package, Layers, Lightbulb, BadgeCheck, ShieldCheck, Truck, TrendingUp, HeartHandshake } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    icon: Package,
    number: "01",
    title: "Elevator Components Supply",
    desc: "We offer an exclusive range of precision-engineered elevator components, sourced from globally renowned manufacturers to ensure exceptional performance, durability, and reliability.",
    iconBg: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
    topBar: "from-primary to-primary/60",
  },
  {
    icon: Layers,
    number: "02",
    title: "Customized Elevator Solutions",
    desc: "Every space deserves a tailored approach. We deliver bespoke elevator solutions designed to seamlessly integrate with diverse architectural and functional requirements.",
    iconBg: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
    topBar: "from-blue-500 to-blue-300",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Technical Consultation & Expertise",
    desc: "Backed by deep industry knowledge and practical experience, our team provides strategic guidance to help you make informed, future-ready decisions.",
    iconBg: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    topBar: "from-amber-500 to-amber-300",
  },
  {
    icon: BadgeCheck,
    number: "04",
    title: "Authorized Distribution",
    desc: "As trusted partners of leading international brands, we ensure access to authentic, high-quality components that meet the highest global standards.",
    iconBg: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-600",
    topBar: "from-emerald-500 to-emerald-300",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Safety & Compliance Assurance",
    desc: "Safety is at the core of everything we deliver. Our solutions adhere to stringent international safety norms, ensuring complete peace of mind.",
    iconBg: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
    topBar: "from-purple-500 to-purple-300",
  },
  {
    icon: Truck,
    number: "06",
    title: "Fast & Reliable Delivery",
    desc: "With a robust and efficient supply network, we ensure timely execution and seamless delivery, maintaining the highest standards of professionalism.",
    iconBg: "bg-sky-50 border-sky-100",
    iconColor: "text-sky-600",
    topBar: "from-sky-500 to-sky-300",
  },
  {
    icon: TrendingUp,
    number: "07",
    title: "Cost-Effective Excellence",
    desc: "We combine premium quality with intelligent cost efficiency, delivering solutions that offer long-term value without compromise.",
    iconBg: "bg-rose-50 border-rose-100",
    iconColor: "text-rose-600",
    topBar: "from-rose-500 to-rose-300",
  },
  {
    icon: HeartHandshake,
    number: "08",
    title: "After-Sales Commitment",
    desc: "Our relationship extends beyond delivery. We provide dedicated support to ensure sustained performance and operational excellence over time.",
    iconBg: "bg-teal-50 border-teal-100",
    iconColor: "text-teal-600",
    topBar: "from-teal-500 to-teal-300",
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="services" className="py-24 md:py-32 bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-primary/4 rounded-full translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-72 h-72 bg-blue-50 rounded-full -translate-x-1/2 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">What We Do</span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            Comprehensive Elevator <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subheading">
            From initial consultation to ongoing maintenance, Eletech provides a full spectrum
            of elevator services — backed by globally authorized brands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, number, title, desc, iconBg, iconColor, topBar }, i) => (
            <div
              key={i}
              className="group relative bg-background border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 cursor-default flex flex-col"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Animated top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${topBar} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + number row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${iconBg} border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={iconColor} size={26} />
                  </div>
                  <span className="font-heading font-black text-5xl text-border/60 group-hover:text-primary/10 transition-colors duration-300 leading-none select-none">
                    {number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-200 mb-2 leading-snug">
                  {title}
                </h3>

                {/* Animated underline */}
                <div className="w-10 h-0.5 bg-primary/30 rounded-full mb-4 group-hover:w-16 transition-all duration-300" />

                {/* Description */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="relative bg-foreground rounded-2xl overflow-hidden flex flex-col justify-end min-h-[340px] shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-foreground/90 to-foreground" />
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />
            <div className="relative z-10 p-7">
              <div className="w-12 h-1 bg-primary rounded-full mb-5" />
              <h3 className="font-heading font-bold text-xl text-white mb-3">Need a Custom Solution?</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
                Every building is unique. Contact our expert team for a customized elevator solution tailored to your specific requirements.
              </p>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-sm py-4 rounded-xl transition-all duration-200 shadow-button hover:scale-[1.02]"
              >
                Contact Our Experts <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
