import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import eletechLogo from "@/assets/eletech-logo.jpg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/98 backdrop-blur-md shadow-nav"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-3 group"
          >
            <img
              src={eletechLogo}
              alt="Eletech Trading Corporation"
              className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-contain group-hover:scale-105 transition-transform duration-200 shadow-button flex-shrink-0"
            />
            <span className="font-heading font-semibold text-sm md:text-base text-primary leading-none whitespace-nowrap">
              Eletech Trading Corporation
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium font-body transition-all duration-200 hover:text-primary ${
                  scrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollTo("#contact")}
              className="hidden md:flex bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-button font-heading font-semibold text-sm px-5 h-9 transition-all duration-200 hover:scale-105"
            >
              Get a Quote
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
                scrolled
                  ? "text-foreground hover:bg-secondary"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-background/98 backdrop-blur-md border-t border-border`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-left px-4 py-3 rounded-md text-sm font-body font-medium text-foreground hover:text-primary hover:bg-secondary transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#contact")}
            className="mt-2 bg-gradient-primary text-primary-foreground font-heading font-semibold"
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </nav>
  );
}
