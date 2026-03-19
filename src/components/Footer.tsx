import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";
import eletechLogo from "@/assets/eletech-logo.jpg";

const footerLinks = {
  "Quick Links": [
    { label: "Home",       href: "#home" },
    { label: "About Us",   href: "#about" },
    { label: "Services",   href: "#services" },
    { label: "Products",   href: "#products" },
    { label: "Gallery",    href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ],
  "What We Do": [
    { label: "Components Supply",        href: "#services" },
    { label: "Customized Solutions",     href: "#services" },
    { label: "Technical Consultation",   href: "#services" },
    { label: "Authorized Distribution",  href: "#services" },
    { label: "Safety & Compliance",      href: "#services" },
    { label: "After-Sales Commitment",   href: "#services" },
  ],
  "Products": [
    { label: "Hydraulic Systems",      href: "#products" },
    { label: "Drive & Control",        href: "#products" },
    { label: "Doors & Entrances",      href: "#products" },
    { label: "Guide Rails & Brackets", href: "#products" },
    { label: "Home & Glass Lifts",     href: "#products" },
    { label: "Glass Elevators",        href: "#products" },
  ],
};

const social = [
  { icon: Facebook,  href: "#", label: "Facebook" },
  { icon: Twitter,   href: "#", label: "Twitter" },
  { icon: Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube,   href: "#", label: "YouTube" },
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
      {/* Dot texture */}
      <div className="absolute inset-0 bg-dot-pattern-dark pointer-events-none" />
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-primary rounded-xl flex items-center justify-center shadow-button">
                <span className="text-white font-heading font-black text-lg">E</span>
              </div>
              <div>
                <p className="font-heading font-bold text-white text-base leading-tight">Eletech</p>
                <p className="font-body text-white/55 text-xs leading-tight">Trading Corporation</p>
              </div>
            </div>

            <p className="font-body text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              India's trusted partner for premium elevator components and lift solutions.
              Authorized distributor of GMV, ARKEL, Tectronics, Marazzi &amp; Shiv Shakti since 2015.
            </p>

            {/* ── Office 1: Pune ── */}
            <p className="font-heading font-bold text-white/80 text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-primary rounded-full" /> Corporate Office — Pune
            </p>
            <div className="space-y-2.5 mb-5">
              <a href="tel:+917722091584" className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors duration-200 group">
                <div className="w-8 h-8 bg-white/8 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                  <Phone size={13} />
                </div>
                <span className="font-body text-sm">+91 77220 91584</span>
              </a>
              <a href="mailto:Sales@eletechtradingcorp.com" className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors duration-200 group">
                <div className="w-8 h-8 bg-white/8 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                  <Mail size={13} />
                </div>
                <span className="font-body text-sm">Sales@eletechtradingcorp.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <div className="w-8 h-8 bg-white/8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={13} />
                </div>
                <span className="font-body text-sm leading-snug">
                  Office No. 12, 4th Floor, Vishnupriya Apartment,<br />
                  Sinhagad Road, Dattawadi, Pune – 411030
                </span>
              </div>
            </div>

            {/* ── Office 2: Gujarat ── */}
            <p className="font-heading font-bold text-white/80 text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-primary rounded-full" /> Gujarat Office / Warehouse
            </p>
            <div className="flex items-start gap-3 text-white/60 mb-6">
              <div className="w-8 h-8 bg-white/8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={13} />
              </div>
              <span className="font-body text-sm leading-snug">
                27 &amp; 28, Fortune Industrial Park,<br />
                Odhav Industrial Estate, Ahmedabad – 382430
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2.5">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-primary border border-white/10 hover:border-primary flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-button"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-primary rounded-full" />
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(href)}
                      className="font-body text-sm text-white/55 hover:text-primary flex items-center gap-1.5 group transition-colors duration-200"
                    >
                      <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
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
          <p className="font-body text-sm text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} Eletech Trading Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((t, i) => (
              <button key={i} className="font-body text-xs text-white/40 hover:text-primary transition-colors duration-200">{t}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
