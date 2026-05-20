import { ArrowRight, MessageSquare, Dumbbell, Star, Percent, Flame } from "lucide-react";

interface HeroProps {
  onStartClick: () => void;
}

export default function Hero({ onStartClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-24 pb-16 overflow-hidden">
      {/* Cinematic Gym Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        <img
          src="/input_file_0.png"
          alt="Premium Authentic Gym"
          className="w-full h-full object-cover opacity-25 object-center scale-105 filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Brand Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            {/* Promo Badge */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start bg-neutral-900 border border-red-500/30 px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider text-red-500 uppercase">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
              Limited Intake: 5 New Client slots left for May 2026
            </div>

            {/* Headline */}
            <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05] uppercase">
              Transform Your Body.<br />
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-white bg-clip-text text-transparent">
                Transform Your Life.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-neutral-400 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
              Professional fitness coaching for weight loss, muscle gain, strength, and confidence. Get a personalized roadmap tailored to your genes, metabolism, and lifestyle.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-4">
              <button
                onClick={onStartClick}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-red-950/40 hover:-translate-y-0.5 border border-red-500/50 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Start Transformation</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="https://wa.me/919567111831?text=Hi%20Coach!%20I'm%20interested%20in%20starting%20my%20fitness%20transformation%20coaching."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-neutral-900/90 hover:bg-neutral-800 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center justify-center gap-2"
                referrerPolicy="no-referrer"
              >
                <MessageSquare className="h-4 w-4 text-green-500" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Short trust stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-4 max-w-md mx-auto lg:mx-0 text-left">
              <div>
                <span className="block font-sans font-black text-2xl sm:text-3xl text-white">4.9/5</span>
                <span className="block font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider">120+ Google Reviews</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="block font-sans font-black text-2xl sm:text-3xl text-red-500">100%</span>
                <span className="block font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider">Result Program</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="block font-sans font-black text-2xl sm:text-3xl text-white">500+</span>
                <span className="block font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider">Bodies Transformed</span>
              </div>
            </div>
          </div>

          {/* Premium Coach Image Column */}
          <div className="lg:col-span-5 relative flex justify-center mt-8 lg:mt-0">
            {/* Visual Backdrops / Frame */}
            <div className="absolute inset-0 bg-red-600/5 rounded-full filter blur-3xl" />
            
            <div className="relative group w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-red-500/20 shadow-2xl shadow-red-950/20 bg-neutral-900">
              {/* Image of Muscular Trainer confident pose */}
              <img
                src="/input_file_0.png"
                alt="Muscular Certified Coach"
                className="w-full h-full object-cover object-center filter contrast-110 brightness-95 transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Decorative Red neon accent lines */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              {/* Float Cards */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md border border-white/15 p-4 rounded-2xl flex items-center gap-3">
                <div className="bg-red-600 p-2 rounded-lg text-white">
                  <Flame className="h-5 w-5 fill-current animate-bounce" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-mono uppercase tracking-wider font-bold">In-Person & Online</h4>
                  <p className="text-neutral-400 text-xs">Transformations in Bangalore & Nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
