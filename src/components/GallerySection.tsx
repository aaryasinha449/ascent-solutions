import { useState, useRef } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import exhibitionTeam    from "@/assets/about-exhibition-team.jpg";
import ribbonCutting     from "@/assets/about-ribbon-cutting.jpg";
import awardTrophy       from "@/assets/award-gmv-distributor-trophy.jpg";
import awardCeremony     from "@/assets/award-gmv-office-ceremony.jpg";
import awardStrategy     from "@/assets/award-gmv-strategy-meet.jpg";
import awardExhibition   from "@/assets/award-eletech-exhibition.jpg";
import certGmv           from "@/assets/cert-gmv-authorised-distributor.jpg";
import certShivshakti    from "@/assets/cert-shivshakti-appreciation.jpg";
import gmvAward10        from "@/assets/award-gmv-10years.jpg";
import teamExhibition    from "@/assets/gallery-team-exhibition.jpg";
import officeEntrance    from "@/assets/gallery-office-entrance.jpg";
import galleryVideo1     from "@/assets/gallery-video-1.mp4";
import galleryVideo2     from "@/assets/gallery-video-2.mp4";

const galleryItems = [
  { src: teamExhibition,  title: "Eletech Team at National Exhibition", category: "Team", large: true },
  { src: officeEntrance,  title: "Corporate Office — Pune", category: "Office" },
  { src: exhibitionTeam,  title: "Eletech at Industry Exhibition", category: "Events", large: true },
  { src: ribbonCutting,   title: "GMV Elevator Inauguration Ceremony", category: "Events" },
  { src: awardTrophy,     title: "GMV Distributor of the Year Trophy", category: "Awards" },
  { src: awardCeremony,   title: "GMV Award Ceremony – Office", category: "Awards" },
  { src: awardExhibition, title: "Eletech Exhibition Booth", category: "Events" },
  { src: awardStrategy,   title: "GMV Strategy Meet", category: "Team" },
  { src: certGmv,         title: "GMV Authorised Distributor Certificate", category: "Certificates" },
  { src: certShivshakti,  title: "Shiv Shakti Appreciation Certificate", category: "Certificates" },
  { src: gmvAward10,      title: "GMV 10 Years Partnership Award", category: "Awards" },
];

const filters = ["All", "Events", "Awards", "Team", "Office", "Certificates"];

const videoItems = [
  {
    src: galleryVideo1,
    title: "Eletech — Corporate Highlights",
    description: "A showcase of Eletech Trading Corporation's office, team and milestones.",
  },
  {
    src: galleryVideo2,
    title: "Eletech — Events & Recognitions",
    description: "Industry events, exhibitions and award ceremonies featuring Eletech.",
  },
];

function VideoCard({ src, title, description }: { src: string; title: string; description: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-background shadow-card group">
      <div className="relative bg-muted">
        <video
          ref={videoRef}
          src={src}
          controls
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="w-full aspect-video object-cover block"
        />
        {!playing && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-200 group/play"
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/60 group-hover/play:scale-110 transition-transform duration-200">
              <Play className="text-white fill-white" size={26} />
            </div>
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-sm text-foreground leading-snug mb-1">{title}</h3>
        <p className="font-body text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, inView } = useInView(0.1);

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => setSelected(index);

  const navLightbox = (dir: "prev" | "next") => {
    if (selected === null) return;
    const total = filtered.length;
    setSelected(dir === "prev" ? (selected - 1 + total) % total : (selected + 1) % total);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-section-alt">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">
              Our Gallery
            </span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="section-subheading">
            A glimpse into Eletech's journey — our office, team events, award ceremonies,
            and industry exhibitions showcasing over a decade of excellence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-background border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Responsive Grid — aspect-ratio boxes so images are never cropped */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.map(({ src, title, category, large }, i) => (
            <div
              key={`${activeFilter}-${i}`}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer animate-fade-in border border-border/50 break-inside-avoid mb-3 ${large ? "row-span-2" : ""}`}
              onClick={() => openLightbox(i)}
            >
              {/* Image — contain so nothing is ever cropped */}
              <div className="bg-muted flex items-center justify-center w-full">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-auto object-contain block"
                  style={{ maxHeight: large ? "460px" : "260px", minHeight: "160px", objectFit: "contain" }}
                  loading="lazy"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Zoom icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ZoomIn className="text-white" size={18} />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-heading font-bold text-sm leading-tight">{title}</p>
                <span className="inline-block bg-primary text-primary-foreground text-xs font-body px-2 py-0.5 rounded-full mt-1">
                  {category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Item count */}
        <p className="text-center font-body text-sm text-muted-foreground mt-6">
          Showing <span className="text-primary font-semibold">{filtered.length}</span> photos
        </p>

        {/* ── Videos ── */}
        <div className="mt-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">Videos</span>
            <span className="red-line" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {videoItems.map((v, i) => (
              <VideoCard key={i} src={v.src} title={v.title} description={v.description} />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
          >
            <X size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navLightbox("prev"); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navLightbox("next"); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
          >
            <ChevronRight size={22} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[selected].src}
              alt={filtered[selected].title}
              className="w-full max-h-[78vh] object-contain rounded-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-heading font-bold text-lg">{filtered[selected].title}</p>
              <span className="inline-block bg-primary text-primary-foreground text-xs font-body px-3 py-1 rounded-full mt-1.5">
                {filtered[selected].category}
              </span>
              <p className="text-white/40 font-body text-xs mt-2">{selected + 1} / {filtered.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

