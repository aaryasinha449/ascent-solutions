import { useInView } from "@/hooks/use-in-view";
import { CheckCircle2, Award, Shield, Zap, ArrowRight, Target, Eye } from "lucide-react";
import { useState } from "react";
import ribbonImg from "@/assets/about-ribbon-cutting.jpg";
import exhibitionImg from "@/assets/about-exhibition-team.jpg";
import teamExhibitionImg from "@/assets/gallery-team-exhibition.jpg";
import officeEntranceImg from "@/assets/gallery-office-entrance.jpg";

const highlights = [
  "Authorized distributor — GMV, ARKEL, Tectronics, Marazzi, Shiv Shakti",
  "Safe, Reliable & Energy Efficient components",
  "Emerging components supplier in West & North India",
  "Strong technical support team across regions",
  "Customized solutions for all building types",
  "Cost-effective vertical transportation solutions",
];

const values = [
  { icon: Shield, title: "Safety First",    desc: "Components meeting global safety standards with rigorous quality checks." },
  { icon: Award,  title: "Quality Assured", desc: "Partnered with globally certified elevator manufacturers worldwide." },
  { icon: Zap,    title: "Fast Delivery",   desc: "Efficient project timelines with minimal disruption to operations." },
];

const visionMission = [
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be a leading elevator solution provider in our regions and become a significant player by providing high quality, affordable and innovative solutions to elevator companies.",
    accentClass: "bg-primary/5 border-primary/20",
  },
  {
    icon: Target,
    title: "Our Mission",
    desc: "To become a leading technology partner to provide innovative and quality-oriented elevator solutions across West & North India.",
    accentClass: "bg-muted border-border",
  },
];

export default function AboutSection() {
  const { ref, inView } = useInView(0.12);
  const [activeImg, setActiveImg] = useState(0);

  const photos = [
    { src: teamExhibitionImg,  label: "Eletech Team at National Exhibition" },
    { src: officeEntranceImg,  label: "Corporate Office — Pune" },
    { src: exhibitionImg,      label: "Eletech at Industry Exhibition" },
    { src: ribbonImg,          label: "GMV Elevator Inauguration Ceremony" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Visual ── */}
          <div className="relative">
            {/* Main image with switcher */}
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover glow-red">
              <img
                key={activeImg}
                src={photos[activeImg].src}
                alt={photos[activeImg].label}
                className="w-full h-[460px] md:h-[540px] object-cover object-center animate-fade-in"
                style={{ objectPosition: activeImg === 0 ? "center top" : "center center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-20 left-6 right-6">
                <span className="inline-block bg-primary/90 backdrop-blur text-primary-foreground font-body text-xs px-3 py-1.5 rounded-full">
                  {photos[activeImg].label}
                </span>
              </div>

              {/* Experience badge overlaid on image bottom-left */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-card">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-button">
                  <Award className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <p className="font-heading font-black text-3xl text-foreground leading-tight">10+</p>
                  <p className="font-body text-xs text-muted-foreground">Years of Excellence</p>
                </div>
              </div>

              {/* Image switcher dots */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`rounded-full transition-all duration-300 ${i === activeImg ? "w-6 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-white/60 hover:bg-white"}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating mini card — top right */}
            <div className="absolute -top-5 -right-5 md:-right-10 bg-background border border-border rounded-2xl p-4 shadow-card-hover hidden md:block animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-foreground leading-tight">Est. 2015</p>
                  <p className="font-body text-xs text-green-600">Pune, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Red left accent bar */}
            <div className="absolute -left-5 top-10 bottom-10 w-1.5 bg-gradient-primary rounded-full hidden md:block" />
          </div>

          {/* ── Right: Content ── */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="red-line" />
                <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">About Eletech</span>
              </div>
              <h2 className="section-heading mb-4">
                India's Trusted Partner in{" "}
                <span className="gradient-text">Elevator Solutions</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-base">
                Eletech Trading Corporation was established in 2015 by a team of successful professionals
                with rich corporate experience in the field of vertical transportation. We enable you to design,
                specify, procure and execute exceptional elevator solutions — we are here to partner in your
                success and deliver efficient, cost-effective vertical solutions.
              </p>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed">
              Our strength lies in our strong ethical value systems and industry knowledge, combined with
              practical leadership experience and domain expertise. We provide Safe, Reliable &amp; Energy
              Efficient components meeting global safety standards — emerging as a premier elevator
              components supplier in West &amp; North India.
            </p>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {visionMission.map(({ icon: Icon, title, desc, accentClass }, i) => (
                <div key={i} className={`p-4 rounded-2xl border ${accentClass}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-primary" size={16} />
                    <p className="font-heading font-bold text-sm text-foreground">{title}</p>
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-snug">{desc}</p>
                </div>
              ))}
            </div>

            {/* Highlights in 2-col grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-section-alt border border-border/60 hover:border-primary/30 transition-colors duration-200">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={15} />
                  <span className="font-body text-xs text-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Value cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-background rounded-2xl p-4 border border-border shadow-card card-hover group">
                  <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-3 transition-colors duration-200">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <p className="font-heading font-bold text-sm text-foreground mb-1">{title}</p>
                  <p className="font-body text-xs text-muted-foreground leading-snug">{desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-heading font-bold text-sm px-6 py-3.5 rounded-xl shadow-button hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Get a Free Consultation <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
