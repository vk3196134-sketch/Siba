import { useState, useRef, useEffect } from "react";
import { Calendar, TrendingDown, Eye, CheckCircle } from "lucide-react";

interface Transformation {
  id: string;
  type: string;
  name: string;
  duration: string;
  achievement: string;
  before: {
    weight: string;
    bodyFat: string;
    label: string;
    image: string;
  };
  after: {
    weight: string;
    bodyFat: string;
    label: string;
    image: string;
  };
}

export default function BeforeAfterSlider() {
  const [activeClient, setActiveClient] = useState<string>("weight-loss");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const transformations: Transformation[] = [
    {
      id: "weight-loss",
      type: "Weight Loss",
      name: "Amit Sharma",
      duration: "16 Weeks",
      achievement: "-18 kg Fat Loss & Sharp Jawline",
      before: {
        weight: "92 kg",
        bodyFat: "28 %",
        label: "Before (January 15)",
        image: "/input_file_1.png",
      },
      after: {
        weight: "74 kg",
        bodyFat: "13 %",
        label: "After (May 20)",
        image: "/input_file_1.png",
      },
    },
    {
      id: "muscle-gain",
      type: "Muscle Gain",
      name: "Swakshardev",
      duration: "4 Weeks (30 Days)",
      achievement: "30 Days Athletic Core Transformation",
      before: {
        weight: "74 kg",
        bodyFat: "18 %",
        label: "Before Program",
        image: "/input_file_2.png",
      },
      after: {
        weight: "71 kg",
        bodyFat: "11 %",
        label: "After Program",
        image: "/input_file_2.png",
      },
    },
    {
      id: "peak-performance",
      type: "Elite Physique",
      name: "Vikram & Amit",
      duration: "Ongoing Program",
      achievement: "Double Bicep Stage Condition & Peak Power",
      before: {
        weight: "85 kg",
        bodyFat: "15 %",
        label: "Active Program",
        image: "/input_file_0.png",
      },
      after: {
        weight: "82 kg",
        bodyFat: "10 %",
        label: "Transformation Success",
        image: "/input_file_0.png",
      },
    },
  ];

  const current = transformations.find((t) => t.id === activeClient) || transformations[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const onMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleTouchStart = () => {
    isDragging.current = true;
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
  };

  return (
    <section id="transformations" className="py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-8 h-px bg-red-500" />
            <span className="text-red-500 font-mono text-xs uppercase tracking-widest font-bold">CLIENT TRANSFORMATIONS</span>
            <span className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            The Results of <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Hard Work!</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Drag the glow slider to see the literal body progress achieved under my customized nutrition &amp; workout schedules. Real humans, authentic progress.
          </p>

          {/* Transformation Type Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 bg-neutral-900/60 p-1.5 rounded-xl border border-white/10">
            {transformations.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveClient(t.id);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeClient === t.id
                    ? "bg-red-600 text-white shadow-lg shadow-red-950/40"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {t.type}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Comparison Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Slider Column (Col: 7) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Interactive Glow Canvas Container */}
            <div
              ref={containerRef}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl shadow-neutral-950/80 select-none border border-white/10 group"
              onMouseDown={current.before.image !== current.after.image ? handleMouseDown : undefined}
              onTouchStart={current.before.image !== current.after.image ? handleTouchStart : undefined}
              style={{ cursor: current.before.image !== current.after.image ? "ew-resize" : "default" }}
            >
              {current.before.image === current.after.image ? (
                // Single consolidated gorgeous collage representation
                <div className="absolute inset-0 z-10 bg-neutral-900">
                  <img
                    src={current.before.image}
                    alt={current.name}
                    className="w-full h-full object-cover object-center filter saturate-100 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 right-4 z-40 bg-red-600/95 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest text-white border border-red-500/20 uppercase">
                    Verified Transformation
                  </div>
                </div>
              ) : (
                <>
                  {/* BEFORE STATE (Entire Width background) */}
                  <div className="absolute inset-0 z-0 bg-neutral-900">
                    <img
                      src={current.before.image}
                      alt={current.before.label}
                      className="w-full h-full object-cover object-center filter saturate-75 brightness-75 contrast-90"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Before Badge Tag */}
                    <div className="absolute top-4 left-4 z-40 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest text-[#cfcfcf] border border-white/10 uppercase">
                      BEFORE (THEN)
                    </div>
                  </div>

                  {/* AFTER STATE (Masked width overlay) */}
                  <div
                    className="absolute inset-y-0 left-0 z-20 overflow-hidden bg-neutral-900 pointer-events-none transition-all duration-75"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}>
                      <img
                        src={current.after.image}
                        alt={current.after.label}
                        className="w-full h-full object-cover object-center filter saturate-110 brightness-105 contrast-125"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* After Badge Tag */}
                      <div className="absolute top-4 right-4 z-40 bg-red-600/95 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest text-white border border-red-500/20 uppercase" style={{ transform: `scale(${sliderPosition < 15 ? 0 : 1})`, transition: "transform 0.2s" }}>
                        AFTER (NOW)
                      </div>
                    </div>
                  </div>

                  {/* SLIDER CONTROLLER HANDLE BAR */}
                  <div
                    className="absolute inset-y-0 z-30 w-1 bg-red-500 cursor-ew-resize shadow-[0_0_15px_rgba(239,68,68,0.8)]"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    {/* Glowing Draggable Center Dial */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-white shadow-2xl shadow-red-500/50 group-hover:scale-110 transition-transform duration-200">
                      <Eye className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Interactive Help Hint overlay footer */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-black/65 backdrop-blur-md text-[10px] text-neutral-400 py-1 px-3 rounded-full font-mono uppercase tracking-wider flex items-center gap-1.5 pointer-events-none">
                    <Eye className="h-3 w-3 text-red-500 animate-pulse" />
                    Hold and slide left-right to compare
                  </div>
                </>
              )}
            </div>
            
          </div>

          {/* Transformation Bio and Statistics Details (Col: 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="bg-red-500/10 text-red-500 text-[10px] font-mono font-black px-2.5 py-1 rounded-full uppercase tracking-widest border border-red-500/20">
                CLIENT SUCCESS SPOTLIGHT
              </span>
              <h3 className="text-white font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight mt-3">
                {current.name}
              </h3>
              <p className="text-red-500 font-mono text-sm font-bold mt-1">
                {current.achievement}
              </p>
            </div>

            {/* Timings Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                <div className="flex items-center gap-1.5 text-neutral-500">
                  <Calendar className="h-4 w-4 text-red-500" />
                  <span className="text-xs uppercase font-mono tracking-wider">Timeline</span>
                </div>
                <p className="text-white font-black text-lg mt-1">{current.duration}</p>
                <div className="bg-red-500/5 border border-red-500/10 px-2 py-0.5 rounded text-[10px] text-red-400 inline-block mt-2">
                  Completed Program
                </div>
              </div>

              <div className="bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                <div className="flex items-center gap-1.5 text-neutral-500">
                  <TrendingDown className="h-4 w-4 text-red-500" />
                  <span className="text-xs uppercase font-mono tracking-wider">Fat Burned / Gained</span>
                </div>
                <p className="text-red-500 font-black text-lg mt-1">
                  {current.id === "muscle-gain" ? "+14 kg Muscle" : "-15% Fat"}
                </p>
                <div className="bg-green-500/5 border border-green-500/10 px-2 py-0.5 rounded text-[10px] text-green-400 inline-block mt-2">
                  Metabolic Shift
                </div>
              </div>
            </div>

            {/* Before vs After Parameters Compare Card */}
            <div className="bg-neutral-950 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              <h4 className="text-white text-xs font-mono uppercase tracking-wider">Detailed Body Measurements</h4>
              
              <div className="grid grid-cols-2 gap-6 divide-x divide-white/5">
                {/* BEFORE STATS */}
                <div>
                  <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">THEN (BEFORE)</span>
                  <div className="flex flex-col gap-2 mt-2">
                    <div>
                      <span className="text-neutral-400 text-xs">Weight:</span>
                      <p className="text-neutral-300 font-bold font-sans text-sm">{current.before.weight}</p>
                    </div>
                    <div>
                      <span className="text-neutral-400 text-xs">Est. Body Fat:</span>
                      <p className="text-neutral-300 font-bold font-sans text-sm">{current.before.bodyFat}</p>
                    </div>
                  </div>
                </div>

                {/* AFTER STATS */}
                <div className="pl-6">
                  <span className="text-red-500 text-xs font-mono uppercase tracking-widest">NOW (AFTER)</span>
                  <div className="flex flex-col gap-2 mt-2">
                    <div>
                      <span className="text-neutral-400 text-xs">Weight:</span>
                      <p className="text-white font-black font-sans text-sm">{current.after.weight}</p>
                    </div>
                    <div>
                      <span className="text-neutral-400 text-xs">Est. Body Fat:</span>
                      <p className="text-red-500 font-black font-sans text-sm">{current.after.bodyFat}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client feedback quote */}
            <div className="bg-neutral-900/40 border-l-2 border-red-500 pl-4 py-2">
              <p className="italic text-neutral-300 text-xs leading-relaxed">
                &ldquo;I was skeptical before registering, but {current.name.split(" ")[0]}&apos;s nutrition guide gave me double the energy while stripping my visceral belly fat. Absolute game changer!&rdquo;
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
