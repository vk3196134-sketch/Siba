import { Flame, Dumbbell, Shield, Apple, Sparkles, Globe, Heart, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  intensity: string;
  duration: string;
  desc: string;
  benefits: string[];
  icon: any;
  accentColor: string;
}

export default function Services({ onBookClick }: { onBookClick: () => void }) {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Weight Loss Training",
      intensity: "High Activity",
      duration: "12-16 Weeks",
      desc: "High-intensity metabolic workouts paired with systematic caloric targets designed to shred body weight efficiently.",
      benefits: ["High caloric burn rate", "Tone stubborn areas", "Increase cardiovascular stamina"],
      icon: Flame,
      accentColor: "from-red-500 to-orange-500",
    },
    {
      id: 2,
      title: "Muscle Building",
      intensity: "Hypertrophy",
      duration: "16-24 Weeks",
      desc: "Scientific resistance splits, progressive overload trackers, and protein schedules designed to add dense athletic muscle safely.",
      benefits: ["Incorporate clean mass", "In-depth lifting breakdowns", "Strategic recovery periods"],
      icon: Dumbbell,
      accentColor: "from-orange-500 to-amber-500",
    },
    {
      id: 3,
      title: "Strength Training",
      intensity: "Performance Focus",
      duration: "Ongoing",
      desc: "Focus on compound lifts (squats, bench press, deadlifts) with elite form correction to skyrocket your raw relative power.",
      benefits: ["Elevate bone & joint density", "Optimize neurological power", "Flawless posture adjustment"],
      icon: Shield,
      accentColor: "from-blue-500 to-indigo-500",
    },
    {
      id: 4,
      title: "Fat Loss Programs",
      intensity: "Intense Burn",
      duration: "8-12 Weeks",
      desc: "A focused blitz on persistent visceral fat deposits. Strips body fat while strictly preserving your precious existing muscle tissue.",
      benefits: ["Targeted visceral fat reduction", "Accelerate metabolic speed", "Weekly biometric skinfold tests"],
      icon: Sparkles,
      accentColor: "from-pink-500 to-rose-500",
    },
    {
      id: 5,
      title: "Personalized Diet Guidance",
      intensity: "Custom Macro Coordinated",
      duration: "Adjustable",
      desc: "No boring starvation diets. Get custom-tailored daily meals with food sources you actually love and buy locally.",
      benefits: ["Accurate macronutrient balance", "Delicious home-cooked options", "Cheat meals integrated weekly"],
      icon: Apple,
      accentColor: "from-green-500 to-emerald-500",
    },
    {
      id: 6,
      title: "Online Fitness Coaching",
      intensity: "Flexible Sync",
      duration: "Flexible Monthly",
      desc: "Train on your own time! Get premium app-based workout programs, video form check reviews, and daily WhatsApp check-ins.",
      benefits: ["Train anywhere globally", "Video database support", "Daily metric analysis call"],
      icon: Globe,
      accentColor: "from-purple-500 to-fuchsia-500",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-8 h-px bg-red-500" />
            <span className="text-red-500 font-mono text-xs uppercase tracking-widest font-bold">PREMIUM SERVICES &amp; PROGRAMS</span>
            <span className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            Coaching Designed <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-400">For Your Goals</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Every client is different. I build individual program structures that correspond to your timeline, body shape, and work schedule.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((serv) => {
            const IconComponent = serv.icon;
            return (
              <div
                key={serv.id}
                className="bg-neutral-900/40 hover:bg-neutral-900 border border-white/5 hover:border-red-500/25 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden"
              >
                {/* Decorative background glow path */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors" />

                <div>
                  {/* Icon Area */}
                  <div className={`p-3.5 rounded-xl bg-neutral-950 border border-white/10 text-red-500 inline-flex items-center justify-center mb-5`}>
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Level Flags */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 bg-neutral-950 px-2 py-1 rounded">
                      {serv.intensity}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-red-400 bg-red-950/20 px-2 py-1 rounded">
                      {serv.duration}
                    </span>
                  </div>

                  {/* Program Title */}
                  <h3 className="text-white font-sans font-black text-xl uppercase tracking-wide group-hover:text-red-500 transition-colors">
                    {serv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {serv.desc}
                  </p>

                  {/* Bullet Benefits list */}
                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-white/5 pt-5">
                    {serv.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-neutral-300 text-xs">
                        <span className="text-red-500 font-bold shrink-0 mt-0.5">✔</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <div className="mt-8">
                  <button
                    onClick={onBookClick}
                    className="w-full bg-neutral-950 hover:bg-red-600 text-white hover:text-white py-3 rounded-lg border border-white/10 hover:border-red-500 font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Enquire Program</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
