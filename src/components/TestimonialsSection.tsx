import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Managing Director",
    company: "Mehta Builders Pvt. Ltd.",
    location: "Mumbai, Maharashtra",
    rating: 5,
    review: "Eletech Trading Corporation has been our go-to partner for elevator installations in all our residential projects over the past 8 years. Their quality of work, timely delivery, and excellent after-sales support is unmatched. Highly recommended!",
    initial: "RM",
  },
  {
    name: "Dr. Sunita Patel",
    role: "Hospital Administrator",
    company: "Sunrise Multi-Specialty Hospital",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review: "We needed hospital-grade elevators that could handle stretchers and wheelchairs reliably. Eletech delivered exactly what we needed, completed on time, and within budget. Their technical team was incredibly professional.",
    initial: "SP",
  },
  {
    name: "Vikram Singh",
    role: "Facility Manager",
    company: "Central Park Commercial Complex",
    location: "New Delhi, NCR",
    rating: 5,
    review: "Our complex has 12 elevators all serviced under Eletech's AMC. The preventive maintenance is thorough, breakdowns are extremely rare, and when any issue arises their response time is within 2 hours. Outstanding service!",
    initial: "VS",
  },
  {
    name: "Priya Sharma",
    role: "Director",
    company: "Sharma Infra Projects",
    location: "Pune, Maharashtra",
    rating: 5,
    review: "Eletech modernized our 15-year-old elevator fleet across 5 buildings. The transformation is remarkable — smoother rides, energy savings of 40%, and modern aesthetics. The team is knowledgeable and very easy to work with.",
    initial: "PS",
  },
  {
    name: "Arun Nair",
    role: "Property Owner",
    company: "Nair Residences",
    location: "Kochi, Kerala",
    rating: 5,
    review: "Installed a beautiful home elevator for my 4-storey villa. The entire process was smooth, the quality is exceptional, and the elevator blends perfectly with our home interior. The Eletech team is professional and punctual.",
    initial: "AN",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  const visible = [
    testimonials[(current) % total],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ];

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">
              Client Feedback
            </span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="section-subheading">
            The trust of over 300 satisfied clients across India is what drives our commitment 
            to excellence every single day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visible.map(({ name, role, company, location, rating, review, initial }, i) => (
            <div
              key={`${current}-${i}`}
              className={`bg-background border border-border rounded-2xl p-6 shadow-card card-hover animate-fade-in-up ${
                i === 0 ? "" : i === 1 ? "delay-100" : "delay-200"
              }`}
            >
              <Quote className="text-primary/20 mb-4" size={36} />
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} className="text-amber-400 fill-amber-400" size={14} />
                ))}
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-5">
                "{review}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-heading font-bold text-xs">{initial}</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-foreground">{name}</p>
                  <p className="font-body text-xs text-muted-foreground">{role}, {company}</p>
                  <p className="font-body text-xs text-primary">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-border hover:border-primary hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-6 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-border hover:border-primary hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
