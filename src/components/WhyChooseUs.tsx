import { Eye, Award, CheckSquare, Clock, Users, ShieldAlert, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "1. Fully Personalized Workouts",
      desc: "No general PDF files. Every single rep, lift, and volume set is computed specifically around your body structure, past injuries, and current strength level.",
      icon: CheckSquare,
    },
    {
      title: "2. Warm & Friendly Coaching Style",
      desc: "No toxic drill instructor vibes. I support you through hard weeks, motivate you on low energy days, and build long-term confidence constructively.",
      icon: HeartHandshake,
    },
    {
      title: "3. Flexible shift Timings",
      desc: "Perfect for busy professionals in Bangalore IT hubs! We coordinate training slot schedules so you can stay consistent around irregular shifts.",
      icon: Clock,
    },
    {
      title: "4. Absolute Transformation Focus",
      desc: "We don't repeat the same workouts indefinitely. Every week we progressively overload your muscles and trace metric changes visually.",
      icon: Award,
    },
    {
      title: "5. Highly Result-Oriented Training",
      desc: "Our target metrics are body fat percentage, posture stability, and high performance levels, ensuring you see genuine weekly change.",
      icon: Eye,
    },
    {
      title: "6. Ultimate Supportive Environment",
      desc: "Join a dedicated tribe of high achievers who push limits. Receive constant check-ins, macro corrections, and motivation checks over WhatsApp.",
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-8 h-px bg-red-500" />
            <span className="text-red-500 font-mono text-xs uppercase tracking-widest font-bold">WHY CHOOSE US</span>
            <span className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            How we guarantee <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">your change</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Most gym memberships fail because of zero personal guidance. Under Tone &amp; Transform, you have private elite coaching supporting you at every single step.
          </p>
        </div>

        {/* Reasons Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-900/40 border border-white/5 hover:border-red-500/15 p-6 sm:p-8 rounded-2xl flex flex-col gap-4 hover:bg-neutral-900 transition-all duration-300"
              >
                <div className="text-red-500 bg-neutral-950 p-3 rounded-xl border border-white/10 self-start">
                  <IconComponent className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
