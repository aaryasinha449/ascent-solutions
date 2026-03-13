import { Settings, RefreshCcw, Wrench, Package, MessageSquare, ArrowRight } from "lucide-react";
import serviceMaintenance from "@/assets/service-maintenance.jpg";

const services = [
  {
    icon: Settings,
    title: "Elevator Installation",
    desc: "End-to-end elevator installation services for residential, commercial, and industrial buildings. We ensure precision installation with strict safety protocols.",
    points: ["Site survey & consultation", "Custom fabrication & supply", "Professional installation team", "Final testing & handover"],
  },
  {
    icon: RefreshCcw,
    title: "Elevator Modernization",
    desc: "Upgrade your existing elevator systems with the latest technology, improving performance, safety, aesthetics, and energy efficiency.",
    points: ["Control system upgrades", "Cabin refurbishment", "Safety component upgrade", "Energy efficiency improvement"],
  },
  {
    icon: Wrench,
    title: "AMC Maintenance",
    desc: "Comprehensive Annual Maintenance Contracts (AMC) to keep your elevators running safely and efficiently with zero downtime.",
    points: ["Regular preventive maintenance", "Emergency breakdown service", "Certified technicians", "Detailed service reports"],
  },
  {
    icon: Package,
    title: "Spare Parts Supply",
    desc: "Genuine OEM spare parts for all major elevator brands. Fast delivery across India with warranty on all supplied components.",
    points: ["Genuine branded parts", "Pan-India delivery", "Competitive pricing", "Warranty assured"],
  },
  {
    icon: MessageSquare,
    title: "Technical Consultation",
    desc: "Expert advisory services for selecting the right elevator solution. From design stage to commissioning, our engineers guide you at every step.",
    points: ["Needs assessment", "Technical specifications", "Regulatory compliance", "Project management"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map(({ icon: Icon, title, desc, points }, i) => (
            <div
              key={i}
              className="group bg-background border border-border rounded-2xl p-6 card-hover cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 group-hover:bg-gradient-primary rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                <Icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={26} />
              </div>
              
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">{title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
              
              {/* Points */}
              <ul className="space-y-1.5 mb-5">
                {points.map((pt, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-primary font-body font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                Learn More <ArrowRight size={14} />
              </button>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-primary rounded-2xl p-6 flex flex-col justify-between text-primary-foreground">
            <div>
              <img
                src={serviceMaintenance}
                alt="Our services"
                className="w-full h-36 object-cover rounded-xl mb-5 opacity-90"
              />
              <h3 className="font-heading font-bold text-xl mb-2">Need a Custom Solution?</h3>
              <p className="font-body text-sm text-primary-foreground/85 leading-relaxed mb-6">
                Every building is unique. Contact our expert team for a customized elevator solution 
                tailored to your specific requirements.
              </p>
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 w-full bg-white/20 hover:bg-white/30 text-white font-heading font-bold text-sm py-3 rounded-xl transition-all duration-200 border border-white/30"
            >
              Contact Our Experts <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
