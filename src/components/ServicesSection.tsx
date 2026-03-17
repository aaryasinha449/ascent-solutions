import { Settings, RefreshCcw, Wrench, Package, MessageSquare, ArrowRight, CheckCircle, Cpu, Layers } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import serviceMaintenance from "@/assets/service-maintenance.jpg";

const services = [
  {
    icon: Settings,
    number: "01",
    title: "Elevator Installation",
    desc: "End-to-end elevator installation services for residential, commercial, and industrial buildings with precision and strict safety protocols.",
    points: ["Site survey & consultation", "Custom fabrication & supply", "Professional installation team", "Final testing & handover"],
  },
  {
    icon: Package,
    number: "02",
    title: "Elevator Components Supply",
    desc: "Genuine OEM components from GMV, ARKEL, Tectronics, Marazzi & Shiv Shakti — fast delivery across India with warranty assured.",
    points: ["GMV Hydraulic Power Units", "ARKEL & Tectronics Controllers", "Marazzi Traction Machines", "Doors, Guide Rails & Hydraulic Jacks"],
  },
  {
    icon: Wrench,
    number: "03",
    title: "AMC Maintenance",
    desc: "Comprehensive Annual Maintenance Contracts to keep your elevators running safely and efficiently with zero downtime.",
    points: ["Regular preventive maintenance", "Emergency breakdown service", "Certified technicians", "Detailed service reports"],
  },
  {
    icon: RefreshCcw,
    number: "04",
    title: "Elevator Modernization",
    desc: "Upgrade your existing elevator systems with the latest technology, improving performance, safety, aesthetics, and energy efficiency.",
    points: ["Control system upgrades", "Cabin refurbishment", "Safety component upgrade", "Energy efficiency improvement"],
  },
  {
    icon: Cpu,
    number: "05",
    title: "Drive & Control Systems",
    desc: "Supply and integration of advanced drive and control systems — ARKEL ARCube, Tectronics RTG 24P Series, and other globally certified controllers.",
    points: ["ARKEL ARCube controllers", "Tectronics RTG 24P Series", "Variable frequency drives", "Remote monitoring systems"],
  },
  {
    icon: MessageSquare,
    number: "06",
    title: "Technical Consultation",
    desc: "Expert advisory services for selecting the right elevator solution. Our engineers guide you from design stage to commissioning.",
    points: ["Needs assessment", "Technical specifications", "Regulatory compliance", "Project management"],
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="services" className="py-24 md:py-32 bg-section-alt relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
      {/* Side glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-primary mb-4">What We Do</span>
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
          {services.map(({ icon: Icon, number, title, desc, points }, i) => (
            <div
              key={i}
              className="group relative bg-background border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Animated top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              {/* Card header with gradient tint */}
              <div className="relative px-6 pt-7 pb-5 bg-gradient-to-br from-section-alt to-background">
                <div className="flex items-start justify-between mb-5">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center shadow-card border border-border group-hover:border-primary/30 group-hover:shadow-button transition-all duration-300">
                    <Icon className="text-primary" size={26} />
                  </div>
                  {/* Number watermark */}
                  <span className="font-heading font-black text-5xl text-border group-hover:text-primary/15 transition-colors duration-300 leading-none select-none">
                    {number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-200">{title}</h3>
              </div>

              {/* Card body */}
              <div className="px-6 pb-6">
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>

                <ul className="space-y-2.5 mb-5">
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
                  className="group/btn flex items-center gap-2 text-primary font-body font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Enquire Now
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="relative bg-foreground rounded-3xl overflow-hidden flex flex-col justify-end min-h-[320px] group shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300">
            <img src={serviceMaintenance} alt="Our services" className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/85 to-foreground/30" />
            <div className="relative z-10 p-7">
              <div className="w-12 h-1 bg-primary rounded-full mb-5" />
              <h3 className="font-heading font-bold text-xl text-white mb-3">Need a Custom Solution?</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
                Every building is unique. Contact our expert team for a customized elevator solution tailored to your specific requirements.
              </p>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-sm py-4 rounded-2xl transition-all duration-200 shadow-button hover:scale-[1.02]"
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
