import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-elevator-1.jpg";
import hero2 from "@/assets/hero-elevator-2.jpg";
import hero3 from "@/assets/hero-elevator-3.jpg";
import hero4 from "@/assets/hero-elevator-4.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Excellence in Vertical Transportation",
    body: "Supplying precision elevator components, technical consultation, authorized distribution, safety-compliant solutions, and dedicated after-sales support — proudly partnered with GMV India, Shiv Shakti and Marazzi, along with other leading industry partners.",
  },
  {
    image: hero2,
    subtitle: "Luxury Elevator Interiors",
    body: "From elegant residential home lifts to high-capacity commercial elevators — we craft solutions tailored to your exact requirements.",
  },
  {
    image: hero3,
    subtitle: "Trusted Across Industries",
    body: "Serving residential complexes, commercial towers, hospitals, shopping malls, and industrial facilities with precision-engineered lift systems.",
  },
  {
    image: hero4,
    subtitle: "Elevating Your World",
    body: "Authorized dealer for India's leading elevator brands. Comprehensive installation, AMC, and modernization services nationwide.",
  },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const go = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((idx + slides.length) % slides.length);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning]
  );

  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  useEffect(() => {
    const interval = setInterval(next, 5500);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <img
            src={slide.image}
            alt={slide.subtitle}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div
              key={current}
              className={`transition-all duration-500 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {/* Red accent bar — decorative only */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-primary rounded-full" />
                <div className="w-8 h-0.5 bg-primary/50 rounded-full" />
              </div>

              {/* PRIMARY heading — Company name */}
              <h1
                className="font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-2"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                ELETECH TRADING
                <br />
                CORPORATION
              </h1>

              {/* TAGLINE — "Together we win" */}
              <p
                className={`text-white/80 text-2xl md:text-3xl mb-4 leading-snug transition-all duration-700 delay-150 ${
                  isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
                style={{ fontFamily: "'Brush Script MT', cursive" }}
              >
                — Together we win
              </p>

              {/* SECONDARY heading — slide subtitle */}
              <h2 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 leading-snug">
                {slides[current].subtitle}
              </h2>

              <p className="font-body text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
                {slides[current].body}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollTo("#services")}
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-button font-heading font-bold text-base px-8 h-12 transition-all duration-200 hover:scale-105"
                >
                  Explore Services
                </Button>
                <Button
                  onClick={() => scrollTo("#contact")}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-foreground font-heading font-bold text-base px-8 h-12 backdrop-blur-sm transition-all duration-200 hover:scale-105"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-primary/80 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-primary/80 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2.5 bg-primary"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="w-full h-6 bg-primary/80 animate-[scroll-down_1.5s_ease-in-out_infinite]" />
        </div>
        <span className="text-white/60 text-xs font-body tracking-widest uppercase rotate-90 origin-center translate-y-4">
          Scroll
        </span>
      </div>
    </section>
  );
}
