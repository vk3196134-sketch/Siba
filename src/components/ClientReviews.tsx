import { Star, Check, Quote, Globe } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export default function ClientReviews() {
  const reviews: Testimonial[] = [
    {
      id: 1,
      name: "Sarthak Mittal",
      role: "Software Architect, Electronic City",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "Looking for a gym trainer to help achieve your weight loss goals? This coach completely transformed my confidence and fitness journey. Lost 14kg in 3 months safely!",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Meera Krishnan",
      role: "Wipro Senior Lead Designer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "I've been training here for months and the results are amazing. Friendly trainer and customized workouts that perfectly fit my demanding IT shift timings.",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Abhinav Hegde",
      role: "Tech Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "Best personal fitness coaching experience. Highly recommended for fat loss and strength building. The diet guides are scientific and super easy to prepare.",
      date: "3 months ago",
    },
    {
      id: 4,
      name: "Rohini Deshpande",
      role: "Corporate Lawyer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "Highly personalized body transformation training! The coach is incredibly understanding, pushes you to your limits, and makes workout galleries enjoyable.",
      date: "1 month ago",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-neutral-950 border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Ratings Dashboard Overview Header */}
        <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Huge Rating Number */}
            <div className="bg-black/80 border border-red-500/30 rounded-2xl px-6 py-4 flex flex-col items-center justify-center">
              <span className="font-sans font-black text-5xl text-white">4.9</span>
              <div className="flex items-center gap-0.5 text-yellow-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="bg-red-500/10 text-red-500 text-[10px] font-mono py-0.5 px-2 rounded-md font-bold uppercase tracking-wider">Verified Reviews</span>
                <span className="text-neutral-500 text-xs">•</span>
                <span className="text-neutral-400 text-xs font-mono uppercase tracking-wider flex items-center gap-1">
                  <Globe className="h-3 w-3 text-red-500" />
                  Google Business Listing
                </span>
              </div>
              <h3 className="text-white text-2xl font-sans font-black mt-2 uppercase tracking-wide">
                CUSTOMER FEEDBACK RATING
              </h3>
              <p className="text-neutral-400 text-sm mt-1 max-w-lg">
                Rated outstanding by business owners, tech employees, and locals near Neeladri Road, Electronic City Phase I, Bangalore.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end shrink-0">
            <span className="text-neutral-500 text-xs uppercase tracking-wider font-mono">Based on 124 Client reviews</span>
            <div className="h-1.5 w-32 bg-neutral-800 rounded-full overflow-hidden mt-2">
              <div className="h-full w-[98%] bg-red-600 rounded-full" />
            </div>
            <span className="text-green-500 font-mono text-xs font-bold mt-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              100% Satisfaction Rate
            </span>
          </div>
        </div>

        {/* Individual Client Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-neutral-900/60 hover:bg-neutral-900 border border-white/5 hover:border-red-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group"
            >
              {/* Quote marks background */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <Quote className="h-16 w-16 text-white" />
              </div>

              <div className="flex flex-col gap-4">
                {/* 5-Stars rating line */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-neutral-500 font-mono text-xs">{rev.date}</span>
                </div>

                {/* Review Message Text */}
                <p className="text-neutral-200 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Meta Avatar */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-5 mt-6">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-500/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h5 className="text-white text-sm font-bold uppercase tracking-wide">{rev.name}</h5>
                    <span className="bg-red-500 text-white text-[8px] font-bold p-0.5 rounded-full flex items-center justify-center" title="Verified Customer">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                  </div>
                  <p className="text-neutral-500 text-xs mt-0.5">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
