import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ],
  "Our Services": [
    { label: "Elevator Installation", href: "#services" },
    { label: "Elevator Modernization", href: "#services" },
    { label: "AMC Maintenance", href: "#services" },
    { label: "Spare Parts Supply", href: "#services" },
    { label: "Technical Consultation", href: "#services" },
    { label: "Emergency Repair", href: "#contact" },
  ],
  "Products": [
    { label: "Passenger Elevators", href: "#products" },
    { label: "Hospital Elevators", href: "#products" },
    { label: "Freight Elevators", href: "#products" },
    { label: "Capsule Elevators", href: "#products" },
    { label: "Home Elevators", href: "#products" },
    { label: "Glass Elevators", href: "#products" },
  ],
};

const social = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="bg-section-dark text-white relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />

      {/* Main footer */}
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-button">
                <span className="text-primary-foreground font-heading font-black text-lg">E</span>
              </div>
              <div>
                <p className="font-heading font-bold text-white text-base leading-tight">Eletech</p>
                <p className="font-body text-white/60 text-xs leading-tight">Trading Corporation</p>
              </div>
            </div>
            <p className="font-body text-white/65 text-sm leading-relaxed mb-6 max-w-xs">
              India's trusted partner for premium elevator and lift solutions. 
              Delivering excellence in vertical transportation since 2009.
            </p>
            
            {/* Contact quick info */}
            <div className="space-y-2.5">
              <a href="tel:+919876543210" className="flex items-center gap-2.5 text-white/70 hover:text-primary transition-colors duration-200">
                <Phone size={14} />
                <span className="font-body text-sm">+91 98765 43210</span>
              </a>
              <a href="mailto:info@eletechtrading.in" className="flex items-center gap-2.5 text-white/70 hover:text-primary transition-colors duration-200">
                <Mail size={14} />
                <span className="font-body text-sm">info@eletechtrading.in</span>
              </a>
              <div className="flex items-start gap-2.5 text-white/70">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm">Andheri East, Mumbai – 400093, Maharashtra</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wide">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(href)}
                      className="font-body text-sm text-white/60 hover:text-primary flex items-center gap-1.5 group transition-colors duration-200"
                    >
                      <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} Eletech Trading Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button className="font-body text-xs text-white/50 hover:text-primary transition-colors">Privacy Policy</button>
            <span className="text-white/20">|</span>
            <button className="font-body text-xs text-white/50 hover:text-primary transition-colors">Terms of Service</button>
            <span className="text-white/20">|</span>
            <button className="font-body text-xs text-white/50 hover:text-primary transition-colors">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
