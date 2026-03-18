import { RefreshCcw, Wrench, Package, MessageSquare, ArrowRight, CheckCircle, Cpu, Layers } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    icon: Package,
    number: "01",
    title: "Elevator Components Supply",
    desc: "Genuine OEM components from GMV, ARKEL, Tectronics, Marazzi & Shiv Shakti — fast delivery across India with warranty assured.",
    points: ["GMV Hydraulic Power Units", "ARKEL & Tectronics Controllers", "Marazzi Traction Machines", "Doors, Guide Rails & Hydraulic Jacks"],
    iconBg: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
    topBar: "bg-primary",
  },
  {
    icon: Wrench,
    number: "02",
    title: "AMC Maintenance",
    desc: "Comprehensive Annual Maintenance Contracts to keep your elevators running safely and efficiently with zero downtime.",
    points: ["Regular preventive maintenance", "Emergency breakdown service", "Certified technicians", "Detailed service reports"],
    iconBg: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
    topBar: "bg-blue-500",
  },
  {
    icon: RefreshCcw,
    number: "03",
    title: "Elevator Modernization",
    desc: "Upgrade your existing elevator systems with the latest technology, improving performance, safety, aesthetics, and energy efficiency.",
    points: ["Control system upgrades", "Cabin refurbishment", "Safety component upgrade", "Energy efficiency improvement"],
    iconBg: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-600",
    topBar: "bg-emerald-500",
  },
  {
    icon: Cpu,
    number: "04",
    title: "Drive & Control Systems",
    desc: "Supply and integration of advanced drive and control systems — ARKEL ARCube, Tectronics RTG 24P Series, and other globally certified controllers.",
    points: ["ARKEL ARCube controllers", "Tectronics RTG 24P Series", "Variable frequency drives", "Remote monitoring systems"],
    iconBg: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    topBar: "bg-amber-500",
  },
  {
    icon: Layers,
    number: "05",
    title: "Turnkey Project Supply",
    desc: "Complete end-to-end supply of all elevator components for new projects. From structural components to control panels — delivered to site.",
    points: ["Complete component packages", "Project-specific sourcing", "Timely delivery guarantee", "Post-supply technical support"],
    iconBg: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
    topBar: "bg-purple-500",
  },
  {
    icon: MessageSquare,
    number: "06",
    title: "Technical Consultation",
    desc: "Expert advisory services for selecting the right elevator solution. Our engineers guide you from design stage to commissioning.",
    points: ["Needs assessment", "Technical specifications", "Regulatory compliance", "Project management"],
    iconBg: "bg-rose-50 border-rose-100",
    iconColor: "text-rose-600",
    topBar: "bg-rose-500",
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
          {services.map(({ icon: Icon, number, title, desc, points, iconBg, iconColor, topBar }, i) => (
            <div
              key={i}
              className="group relative bg-background border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 cursor-default flex flex-col"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Animated top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${topBar} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10`} />

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
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{desc}</p>

                {/* Points */}
                <ul className="space-y-2 mb-5">
                  {points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-primary" size={11} />
                      </div>
                      <span className="font-body text-xs text-muted-foreground">{pt}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group/btn flex items-center gap-2 text-primary font-body font-semibold text-sm hover:gap-3 transition-all duration-200 mt-auto"
                >
                  Enquire Now
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
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
