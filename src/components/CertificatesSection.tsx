import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star, Trophy } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

// Award & certificate images
import awardGmv10Years      from "@/assets/award-gmv-10years.jpg";
import awardGmvTrophy       from "@/assets/award-gmv-distributor-trophy.jpg";
import awardGmvStrategyMeet from "@/assets/award-gmv-strategy-meet.jpg";
import certGmvDistributor   from "@/assets/cert-gmv-authorised-distributor.jpg";
import awardExhibition      from "@/assets/award-eletech-exhibition.jpg";
import awardOfficeCeremony  from "@/assets/award-gmv-office-ceremony.jpg";
import certShivShakti       from "@/assets/cert-shivshakti-appreciation.jpg";
import awardShelfDisplay    from "@/assets/award-shelf-display.jpg";
import awardGmvBriskMrl     from "@/assets/award-gmv-brisk-mrl-launch.jpg";

// Authorized distributor logos
import logoGmv        from "@/assets/logo-gmv.png";
import logoShivShakti from "@/assets/logo-shivshakti.png";
import logoMarazzi    from "@/assets/logo-marazzi.png";

const slides = [
  {
    image: awardGmvTrophy,
    title: "Distributor of the Year — GMV India 2024–25",
    subtitle: "GMV Lift Systems",
    desc: "Eletech Trading Corporation, Gujarat, recognised as the Distributor of the Year for GMV India for the financial year 2024–25 at the GMV India Strategy Meet.",
    tag: "Award",
    tagColor: "bg-amber-500",
  },
  {
    image: certShivShakti,
    title: "Certificate of Appreciation — Shiv Shakti",
    subtitle: "Shiv Shakti Elevator Components Pvt. Ltd.",
    desc: "Certificate of Appreciation presented to Eletech Trading Corporation for esteemed partnership and business contribution in FY 24–25.",
    tag: "Certificate",
    tagColor: "bg-blue-600",
  },
  {
    image: certGmvDistributor,
    title: "GMV Authorised Distributor Certificate",
    subtitle: "GMV India Pvt. Ltd.",
    desc: "Official certificate certifying Eletech Trading Corporation as an Authorised Distributor of GMV India for Pune — valid from 1st April 2022.",
    tag: "Certificate",
    tagColor: "bg-blue-600",
  },
  {
    image: awardGmv10Years,
    title: "10 Years of Partnership Award",
    subtitle: "GMV Lift Systems",
    desc: "\"For Constant Support & Leadership\" — a special GMV award presented to Eletech Trading Corporation for 10 outstanding years of business partnership.",
    tag: "Award",
    tagColor: "bg-amber-500",
  },
  {
    image: awardGmvStrategyMeet,
    title: "GMV India Strategy Meet 2025",
    subtitle: "GMV Lift Systems — No.1 in Hydraulic Elevator Technology",
    desc: "Eletech's Director receiving the prestigious Distributor of the Year award at the GMV India Strategy Meet 2025.",
    tag: "Recognition",
    tagColor: "bg-primary",
  },
  {
    image: awardOfficeCeremony,
    title: "Award Ceremony — GMV Corporate Office",
    subtitle: "GMV India",
    desc: "Eletech's team receiving the special award for constant support and leadership from GMV India's management team at their corporate head office.",
    tag: "Recognition",
    tagColor: "bg-primary",
  },
  {
    image: awardExhibition,
    title: "GMV Authorised Distributor — Exhibition",
    subtitle: "Elevator Industry Exhibition",
    desc: "Eletech Trading Corporation's exhibition booth at the national elevator industry expo — recognised as the largest GLO-CAL distributor of GMV India.",
    tag: "Recognition",
    tagColor: "bg-green-600",
  },
];

const awards = [
  { year: "2024–25", title: "Distributor of the Year — GMV India", org: "GMV Lift Systems India" },
  { year: "2024–25", title: "Certificate of Appreciation", org: "Shiv Shakti Elevator Components Pvt. Ltd." },
  { year: "2022",    title: "Authorised Distributor Certificate", org: "GMV India Pvt. Ltd." },
  { year: "2019",    title: "10 Years of Partnership Award", org: "GMV Lift Systems — For Constant Support & Leadership" },
];

const distributorLogos = [
  { logo: logoGmv,        name: "GMV Lift Systems",  country: "Italy 🇮🇹" },
  { logo: logoShivShakti, name: "Shiv Shakti",       country: "India 🇮🇳" },
  { logo: logoMarazzi,    name: "Marazzi (China)",   country: "China 🇨🇳" },
];

export default function CertificatesSection() {
  const { ref, inView } = useInView(0.08);
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", slidesToScroll: 1 },
    [autoplay.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps]     = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo   = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section id="industries" className="py-24 md:py-32 bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">Certified & Awarded</span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            Certifications & <span className="text-primary">Awards</span>
          </h2>
          <p className="section-subheading">
            Recognised by GMV India, Shiv Shakti and Marazzi, along with other leading industry partners,
            for our consistent excellence, strong partnerships, and reliable service delivery.
          </p>
        </div>

        {/* ── Embla Carousel ── */}
        <div className="mb-16 relative">
          <button
            onClick={scrollPrev}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background border-2 border-border shadow-card hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground flex items-center justify-center transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background border-2 border-border shadow-card hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground flex items-center justify-center transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          <div ref={emblaRef} className="overflow-hidden mx-8">
            <div className="flex gap-6">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[300px] md:w-[380px] rounded-2xl overflow-hidden border border-border bg-background shadow-card transition-all duration-300 cursor-default"
                >
                  <div className="relative overflow-hidden bg-muted flex items-center justify-center" style={{ height: "280px" }}>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                    <span className={`absolute top-4 left-4 ${slide.tagColor} text-white text-xs font-body font-bold px-3 py-1 rounded-full shadow-sm`}>
                      {slide.tag}
                    </span>
                  </div>
                  <div className="p-5 bg-background">
                    <p className="font-body text-xs font-semibold text-primary uppercase tracking-wider mb-1">{slide.subtitle}</p>
                    <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-snug">{slide.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">{slide.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "w-7 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-primary/40"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Awards & Brands ── */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Awards timeline */}
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Trophy className="text-primary" size={17} />
              </div>
              Industry Awards & Recognition
            </h3>
            <div className="space-y-3">
              {awards.map(({ year, title, org }, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl bg-background border border-border shadow-card"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-xl flex flex-col items-center justify-center shadow-button">
                    <Star className="text-primary-foreground" size={13} />
                    <span className="text-primary-foreground font-heading font-black text-[10px] mt-0.5 text-center leading-tight px-1">{year}</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground mb-0.5">{title}</p>
                    <p className="font-body text-xs text-muted-foreground">{org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Authorized distributor logos — real images */}
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Star className="text-primary" size={17} />
              </div>
              Authorized Distributor For
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {distributorLogos.map(({ logo, name, country }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center p-4 bg-background border border-border rounded-xl shadow-card text-center"
                >
                  <div className="w-full h-16 flex items-center justify-center mb-3">
                    <img
                      src={logo}
                      alt={name}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="font-body text-xs font-semibold text-foreground leading-tight">{name}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
