import { Dumbbell, ShieldAlert, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="bg-red-600 p-1.5 rounded-lg text-white">
                <Dumbbell className="h-5 w-5" />
              </div>
              <span className="font-sans font-black tracking-tighter text-xl text-white uppercase">
                TONE <span className="text-red-500">&amp;</span> TRANSFORM
              </span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed font-sans">
              Elite dark luxury gym-trainer ecosystem specialized in Bangalore weight loss, muscular hyper-growth, and custom genetic dieting plans.
            </p>
          </div>

          {/* Col 2: Navigation link shortcuts */}
          <div>
            <h4 className="text-white text-xs font-mono uppercase tracking-widest font-black mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-xs text-neutral-400">
              <button onClick={() => handleLinkClick("transformations")} className="hover:text-red-500 transition-colors text-left cursor-pointer uppercase">Client Results</button>
              <button onClick={() => handleLinkClick("about")} className="hover:text-red-500 transition-colors text-left cursor-pointer uppercase">About Trainer</button>
              <button onClick={() => handleLinkClick("programs")} className="hover:text-red-500 transition-colors text-left cursor-pointer uppercase">Training Programs</button>
              <button onClick={() => handleLinkClick("reviews")} className="hover:text-red-500 transition-colors text-left cursor-pointer uppercase">Verified Reviews</button>
              <button onClick={() => handleLinkClick("gallery")} className="hover:text-red-500 transition-colors text-left cursor-pointer uppercase">Workout Gallery</button>
            </div>
          </div>

          {/* Col 3: Programs short list */}
          <div>
            <h4 className="text-white text-xs font-mono uppercase tracking-widest font-black mb-4">Elite Programs</h4>
            <div className="flex flex-col gap-2.5 text-xs text-neutral-500">
              <span>Metabolic Fat Shredding (12w)</span>
              <span>Physique &amp; Abs Hypertrophy</span>
              <span>Compound Lifting Mastery</span>
              <span>1-on-1 Personalized Mentoring</span>
              <span>Online Custom Macro Diet Guide</span>
            </div>
          </div>

          {/* Col 4: Gym info timing recap */}
          <div>
            <h4 className="text-white text-xs font-mono uppercase tracking-widest font-black mb-4">Location &amp; Area</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Neeladri Rd, Phase I, Electronic City, Bangalore, Karnataka &ndash; 560100
              <span className="block text-red-500 font-bold mt-2">Ph: +91 95671 11831</span>
            </p>
          </div>
        </div>

        {/* Footer Sub-row copyrights */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-xs text-neutral-600 font-serif">
            &copy; {currentYear} Tone &amp; Transform. All Rights Reserved. Designed for premium transformation experiences.
          </p>

          <p className="text-[10px] sm:text-xs text-neutral-600 flex items-center gap-1.5 font-mono">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-red-600 fill-current" />
            <span>for Tone &amp; Transform Bangalore</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
