import { Settings, RefreshCcw, Wrench, Package, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import serviceMaintenance from "@/assets/service-maintenance.jpg";

const services = [
  {
    icon: Settings,
    number: "01",
    title: "Elevator Installation",
    desc: "End-to-end elevator installation services for residential, commercial, and industrial buildings with precision and strict safety protocols.",
    points: ["Site survey & consultation", "Custom fabrication & supply", "Professional installation team", "Final testing & handover"],
    color: "from-red-50 to-red-100/50",
  },
  {
    icon: RefreshCcw,
    number: "02",
    title: "Elevator Modernization",
    desc: "Upgrade your existing elevator systems with the latest technology, improving performance, safety, aesthetics, and energy efficiency.",
    points: ["Control system upgrades", "Cabin refurbishment", "Safety component upgrade", "Energy efficiency improvement"],
    color: "from-slate-50 to-slate-100/50",
  },
  {
    icon: Wrench,
    number: "03",
    title: "AMC Maintenance",
    desc: "Comprehensive Annual Maintenance Contracts to keep your elevators running safely and efficiently with zero downtime.",
    points: ["Regular preventive maintenance", "Emergency breakdown service", "Certified technicians", "Detailed service reports"],
    color: "from-red-50 to-red-100/50",
  },
  {
    icon: Package,
    number: "04",
    title: "Spare Parts Supply",
    desc: "Genuine OEM spare parts for all major elevator brands. Fast delivery across India with warranty on all supplied components.",
    points: ["Genuine branded parts", "Pan-India delivery", "Competitive pricing", "Warranty assured"],
    color: "from-slate-50 to-slate-100/50",
  },
  {
    icon: MessageSquare,
    number: "05",
    title: "Technical Consultation",
    desc: "Expert advisory services for selecting the right elevator solution. Our engineers guide you from design stage to commissioning.",
    points: ["Needs assessment", "Technical specifications", "Regulatory compliance", "Project management"],
    color: "from-red-50 to-red-100/50",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">
              What We Do
            </span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            Comprehensive Elevator <span className="text-primary">Services</span>
          </h2>
          <p className="section-subheading">
            From initial consultation to ongoing maintenance, Eletech provides a full spectrum
            of elevator services to meet every requirement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map(({ icon: Icon, number, title, desc, points, color }, i) => (
            <div
              key={i}
              className="group relative bg-background border border-border rounded-2xl overflow-hidden card-hover cursor-default"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Number badge */}
              <div className={`bg-gradient-to-br ${color} px-6 pt-6 pb-4`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 border border-border/50">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <span className="font-heading font-black text-4xl text-border/60 group-hover:text-primary/20 transition-colors duration-300 leading-none">
                    {number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">{title}</h3>
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>

                {/* Points */}
                <ul className="space-y-2 mb-5">
                  {points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-xs font-body text-muted-foreground">
                      <CheckCircle className="text-primary flex-shrink-0" size={13} />
                      {pt}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-primary font-body font-semibold text-sm group-hover:gap-3 transition-all duration-200 mt-auto">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="relative bg-foreground rounded-2xl overflow-hidden flex flex-col justify-between">
            <img
              src={serviceMaintenance}
              alt="Our services"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-foreground/40" />
            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end">
              <div className="w-10 h-1 bg-primary rounded-full mb-5" />
              <h3 className="font-heading font-bold text-xl text-white mb-3">Need a Custom Solution?</h3>
              <p className="font-body text-sm text-white/75 leading-relaxed mb-6">
                Every building is unique. Contact our expert team for a customized elevator solution
                tailored to your specific requirements.
              </p>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-sm py-3.5 rounded-xl transition-all duration-200 shadow-button"
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
