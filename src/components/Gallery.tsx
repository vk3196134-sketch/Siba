import { useState } from "react";
import { Eye, Dumbbell, Award, Flame, X } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "coaching" | "lifting" | "atmosphere" | "session";
  image: string;
  desc: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "One-on-One Form Progression",
      category: "coaching",
      image: "/input_file_3.png",
      desc: "Checking form alignment and target muscle engagement during dumbbell curls.",
    },
    {
      id: 2,
      title: "Double Bicep Showcase Pose",
      category: "session",
      image: "/input_file_0.png",
      desc: "High energy celebrations with clients posing proud on reaching key milestones.",
    },
    {
      id: 3,
      title: "Premium Elite Training Facility",
      category: "atmosphere",
      image: "/input_file_3.png",
      desc: "High-end luxury atmosphere with neon lighting, premium barbells, dumbbells, and customized guidance.",
    },
    {
      id: 4,
      title: "Hard Work Case Transformation",
      category: "lifting",
      image: "/input_file_1.png",
      desc: "Then vs Now: Stunning physical proof showing results of science-based customized coaching.",
    },
    {
      id: 5,
      title: "30 Days Fast-Track Results",
      category: "coaching",
      image: "/input_file_2.png",
      desc: "Before and After: Building athletic muscle density and burning fat cells simultaneously.",
    },
    {
      id: 6,
      title: "Double Bicep flex celebration",
      category: "atmosphere",
      image: "/input_file_0.png",
      desc: "Coach and client proud bicep poses showing real, raw energy and hard work progress.",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeFilter);

  const filters = [
    { label: "All Photos", id: "all" },
    { label: "Strength Coaching", id: "coaching" },
    { label: "Heavy Lifting", id: "lifting" },
    { label: "Atmosphere", id: "atmosphere" },
  ];

  return (
    <section id="gallery" className="py-24 bg-neutral-950 border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-8 h-px bg-red-500" />
            <span className="text-red-500 font-mono text-xs uppercase tracking-widest font-bold">WORKOUT GALLERY</span>
            <span className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            Inside the <span className="text-red-500 underline decoration-red-600 underline-offset-8">Transformation Lab</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Take a look at real training, actual coaching guidelines, equipment quality, and the high-energy fitness environments we construct.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeFilter === f.id
                    ? "bg-red-600 text-white border-red-500 shadow-lg"
                    : "text-neutral-400 border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 group cursor-pointer shadow-lg"
              onClick={() => setSelectedImage(item)}
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover Interactive Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6 select-none">
                <div className="bg-red-600/90 self-start p-1.5 rounded-lg text-white mb-2">
                  <Eye className="h-4 w-4" />
                </div>
                <h4 className="text-white text-base font-sans font-black uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-neutral-300 text-xs mt-1 line-clamp-2">
                  {item.desc}
                </p>
                <span className="text-red-500 text-[10px] font-mono font-bold uppercase tracking-wider mt-3">Click to zoom in</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Enlarged Overlay */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-red-500 p-2.5 rounded-full bg-neutral-900 border border-white/10 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="max-w-4xl w-full flex flex-col gap-4">
              <div className="aspect-[4/3] max-h-[70vh] rounded-2xl overflow-hidden border border-white/15">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left px-2">
                <span className="text-red-500 font-mono text-[10px] uppercase tracking-wider font-bold">
                  {selectedImage.category}
                </span>
                <h3 className="text-white font-sans font-bold text-lg sm:text-xl uppercase mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-neutral-400 text-sm mt-1">{selectedImage.desc}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
