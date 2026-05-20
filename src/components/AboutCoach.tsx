import { CheckCircle2, Award, Users, BookOpen, ThumbsUp } from "lucide-react";

export default function AboutCoach() {
  const credentials = [
    { title: "Certified Personal Trainer", desc: "Gold standard fitness credential from international academies." },
    { title: "Transformation Lead Expert", desc: "500+ successful cases in Bangalore and remote programs." },
    { title: "Precision Nutrition Coach", desc: "Crafting scientific, sustainable daily diets without starvation." },
    { title: "Friendly Coaching Philosophy", desc: "Non-judgmental, warm approach to keep you highly accountable." },
  ];

  return (
    <section id="about" className="py-24 bg-neutral-950 border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 aspect-square max-w-[400px] mx-auto">
              <img
                src="/input_file_3.png"
                alt="Head coach assisting client"
                className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              {/* Overlay Stat Counter */}
              <div className="absolute bottom-6 left-6 bg-red-600/95 backdrop-blur-md px-4 py-3 rounded-xl text-white flex items-center gap-3 border border-red-500/20">
                <ThumbsUp className="h-5 w-5 text-white" />
                <div>
                  <p className="font-sans font-black text-lg leading-none">8+ Years</p>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-red-100">Active Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text/Bio Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-red-500" />
              <span className="text-red-500 font-mono text-xs uppercase tracking-widest font-bold">MEET THE COACH</span>
            </div>
            
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
              I Don&apos;t Just Train Bodies.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                I Rebuild Confidence.
              </span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Hey, I&apos;m your personal coach at <strong>Tone &amp; Transform</strong>. My passion is taking people out of self-doubt and putting them onto a clear, actionable path to their absolute dream physique. No generic YouTube plans, and no restrictive starvations.
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed">
              By combining custom biometric tracking, realistic strength progression, and friendly, ultra-supportive lifestyle accountability, you&apos;ll build habits that stand the test of time. Whether in Bangalore (Electronic City) or through my online transformation system—we work together to ensure you succeed.
            </p>

            {/* Value Check Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex gap-3 p-4 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-red-500/20 transition-all">
                  <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white text-sm font-semibold tracking-wide uppercase">{cred.title}</h4>
                    <p className="text-neutral-400 text-xs mt-1 leading-snug">{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Friendly Lifestyle focus note */}
            <div className="bg-gradient-to-r from-red-950/30 to-neutral-900 border border-red-500/20 rounded-xl p-4 mt-2">
              <span className="text-red-500 text-xs font-mono font-bold uppercase tracking-wider block mb-1">Coach Promise:</span>
              <p className="text-neutral-300 text-xs leading-normal">
                &ldquo;You don&apos;t have to sacrifice social gatherings, or eat boiled chicken all day. I build sustainable diet macros around foods you already love and cook at home.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
