import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Award, Star, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

/* ─── Certificate data ─────────────────────────────────────────── */
const certs = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    body: "Certified for maintaining the highest standards in quality management across all our operations and service delivery.",
    icon: "🏆",
    accent: "from-amber-500 to-yellow-400",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    title: "IS 14665",
    subtitle: "Bureau of Indian Standards",
    body: "Compliant with the Indian national standard for lift installation and safety as mandated by BIS.",
    icon: "🇮🇳",
    accent: "from-orange-500 to-orange-400",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    title: "CE Certified",
    subtitle: "European Conformity Mark",
    body: "Products meet EU safety, health, and environmental protection requirements — accepted across European markets.",
    icon: "🇪🇺",
    accent: "from-blue-600 to-blue-400",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    title: "NSIC Registered",
    subtitle: "National Small Industries Corp.",
    body: "Registered with NSIC, qualifying us for government procurement and public sector elevator projects.",
    icon: "📋",
    accent: "from-green-600 to-green-400",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    title: "MSME Certified",
    subtitle: "Ministry of MSME, India",
    body: "Officially recognised as a Micro, Small & Medium Enterprise by the Ministry of MSME, Government of India.",
    icon: "🏅",
    accent: "from-purple-600 to-purple-400",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    title: "OHSAS 18001",
    subtitle: "Occupational Health & Safety",
    body: "Certified for robust workplace safety management, ensuring zero-incident standards on every job site.",
    icon: "🛡️",
    accent: "from-teal-600 to-teal-400",
    bg: "bg-teal-50",
    border: "border-teal-200",
  },
  {
    title: "ISO 14001:2015",
    subtitle: "Environmental Management",
    body: "Committed to reducing our environmental footprint through certified sustainable practices and eco-friendly operations.",
    icon: "🌿",
    accent: "from-lime-600 to-lime-400",
    bg: "bg-lime-50",
    border: "border-lime-200",
  },
  {
    title: "Authorized Dealer",
    subtitle: "Multiple Premium Brands",
    body: "Official authorised dealer for Johnson Lifts, KONE, Otis, Schindler, ThyssenKrupp and more globally trusted brands.",
    icon: "✅",
    accent: "from-primary to-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
  },
];

/* ─── Awards ─────────────────────────────────────────────────────── */
const awards = [
  { year: "2023", title: "Best Elevator Distributor — West India",  org: "Elevator Industry Association" },
  { year: "2022", title: "Excellence in Safety Standards",          org: "National Safety Council India" },
  { year: "2021", title: "Top Rated Service Provider",              org: "BuildIndia Awards" },
  { year: "2019", title: "10 Years of Excellence Award",            org: "Eletech Internal Achievement" },
];

/* ─── Authorized brands ──────────────────────────────────────────── */
const brands = [
  "Johnson Lifts", "Otis", "KONE", "Schindler",
  "ThyssenKrupp", "Mitsubishi", "Fujitec", "Hyundai Elevator",
];

export default function CertificatesSection() {
  const { ref, inView } = useInView(0.08);
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplay.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
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
    <section id="industries" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-primary mb-4">Certified & Awarded</span>
          <h2 className="section-heading mb-4">
            Certifications & <span className="gradient-text">Awards</span>
          </h2>
          <p className="section-subheading">
            Our commitment to quality and safety is backed by internationally recognised
            certifications and industry awards.
          </p>
        </div>

        {/* ── Embla Carousel ── */}
        <div className="mb-16 relative">
          {/* Nav arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background border-2 border-border shadow-card hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground flex items-center justify-center transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background border-2 border-border shadow-card hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground flex items-center justify-center transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Viewport */}
          <div ref={emblaRef} className="overflow-hidden mx-6">
            <div className="flex gap-5">
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 w-[260px] md:w-[300px] group rounded-2xl border-2 ${cert.border} ${cert.bg} p-6 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-card hover:shadow-card-hover cursor-default`}
                >
                  {/* Icon + gradient strip */}
                  <div className={`w-full h-1.5 rounded-full bg-gradient-to-r ${cert.accent} mb-5 opacity-70`} />

                  <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 leading-none`}>
                    {cert.icon}
                  </div>

                  <h3 className="font-heading font-black text-lg text-foreground mb-1">{cert.title}</h3>
                  <p className={`font-body font-bold text-xs uppercase tracking-wider mb-3 bg-gradient-to-r ${cert.accent} bg-clip-text text-transparent`}>
                    {cert.subtitle}
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{cert.body}</p>

                  <div className="mt-4 pt-4 border-t border-border/60 flex items-center gap-1.5">
                    <ExternalLink size={11} className="text-muted-foreground" />
                    <span className="font-body text-xs text-muted-foreground">Verified Certification</span>
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
                  i === selectedIndex ? "w-7 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-muted hover:bg-primary/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Awards & Brands grid ── */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Awards */}
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="text-primary" size={18} />
              </div>
              Industry Awards & Recognition
            </h3>
            <div className="space-y-3">
              {awards.map(({ year, title, org }, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl bg-section-alt border border-border card-hover"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-xl flex flex-col items-center justify-center shadow-button">
                    <Star className="text-primary-foreground" size={14} />
                    <span className="text-primary-foreground font-heading font-black text-xs mt-0.5">{year}</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground mb-0.5">{title}</p>
                    <p className="font-body text-xs text-muted-foreground">{org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Authorized brands */}
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="text-primary" size={18} />
              </div>
              Authorized Dealer For
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {brands.map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-section-alt border border-border rounded-xl card-hover group"
                >
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                    <span className="font-heading font-black text-primary group-hover:text-primary-foreground transition-colors duration-200 text-xs">
                      {brand.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                  <span className="font-body text-sm font-semibold text-foreground">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
