import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Managing Director",
    company: "Mehta Builders Pvt. Ltd.",
    location: "Mumbai, Maharashtra",
    rating: 5,
    review: "Eletech Trading Corporation has been our go-to partner for elevator installations in all our residential projects over the past 8 years. Their quality of work, timely delivery, and excellent after-sales support is unmatched. Highly recommended!",
    initial: "RM",
    color: "from-red-500 to-rose-600",
  },
  {
    name: "Dr. Sunita Patel",
    role: "Hospital Administrator",
    company: "Sunrise Multi-Specialty Hospital",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review: "We needed hospital-grade elevators that could handle stretchers and wheelchairs reliably. Eletech delivered exactly what we needed, completed on time, and within budget. Their technical team was incredibly professional.",
    initial: "SP",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Vikram Singh",
    role: "Facility Manager",
    company: "Central Park Commercial Complex",
    location: "New Delhi, NCR",
    rating: 5,
    review: "Our complex has 12 elevators all serviced under Eletech's AMC. The preventive maintenance is thorough, breakdowns are extremely rare, and when any issue arises their response time is within 2 hours. Outstanding service!",
    initial: "VS",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Priya Sharma",
    role: "Director",
    company: "Sharma Infra Projects",
    location: "Pune, Maharashtra",
    rating: 5,
    review: "Eletech modernized our 15-year-old elevator fleet across 5 buildings. The transformation is remarkable — smoother rides, energy savings of 40%, and modern aesthetics. The team is knowledgeable and very easy to work with.",
    initial: "PS",
    color: "from-violet-500 to-purple-700",
  },
  {
    name: "Arun Nair",
    role: "Property Owner",
    company: "Nair Residences",
    location: "Kochi, Kerala",
    rating: 5,
    review: "Installed a beautiful home elevator for my 4-storey villa. The entire process was smooth, the quality is exceptional, and the elevator blends perfectly with our home interior. The Eletech team is professional and punctual.",
    initial: "AN",
    color: "from-amber-500 to-orange-600",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView(0.12);
  const total = testimonials.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  const visible = [
    testimonials[current % total],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ];

  return (
    <section className="py-24 md:py-32 bg-section-dark relative overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern-dark pointer-events-none" />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider mb-4"
                style={{ background: "hsl(0 75% 42% / 0.15)", color: "hsl(0 75% 70%)", border: "1px solid hsl(0 75% 42% / 0.3)" }}>
            Client Feedback
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="font-body text-white/55 text-base md:text-lg leading-relaxed">
            The trust of over 300 satisfied clients across India is what drives our commitment
            to excellence every single day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visible.map(({ name, role, company, location, rating, review, initial, color }, i) => (
            <div
              key={`${current}-${i}`}
              className={`relative bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-7 hover:bg-white/8 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up ${
                i === 0 ? "" : i === 1 ? "delay-100" : "delay-200"
              }`}
            >
              {/* Large quote */}
              <Quote className="text-white/10 mb-3 -ml-1" size={44} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} className="text-amber-400 fill-amber-400" size={15} />
                ))}
              </div>

              <p className="font-body text-sm text-white/75 leading-relaxed mb-7 line-clamp-5">
                "{review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className={`w-11 h-11 bg-gradient-to-br ${color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-white font-heading font-bold text-sm">{initial}</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-white">{name}</p>
                  <p className="font-body text-xs text-white/55">{role}, {company}</p>
                  <p className="font-body text-xs text-primary mt-0.5">{location}</p>
                </div>
              </div>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-primary hover:border-primary text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-7 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-primary hover:border-primary text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
