import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "Weight Loss",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
    // Simulate successful save
  };

  const handleReset = () => {
    setFormData({ name: "", phone: "", goal: "Weight Loss", message: "" });
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-8 h-px bg-red-500" />
            <span className="text-red-500 font-mono text-xs uppercase tracking-widest font-bold">START YOUR JOURNEY</span>
            <span className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            Book your <span className="text-red-500">Free Consultation</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Ready to completely change your body posture, energy, and look? Drop your contact details below, and let&apos;s talk about your transformation roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Column (Col: 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-2xl font-sans font-black uppercase tracking-wide">
                Get In Touch Directly
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Have questions regarding custom diet guides or pricing structures? Don&apos;t hesitate to call or ping directly on WhatsApp.
              </p>

              {/* Contacts info list */}
              <div className="flex flex-col gap-4 mt-2">
                
                {/* Location */}
                <div className="flex gap-4 p-4 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-red-500/10 transition-colors">
                  <MapPin className="h-6 w-6 text-red-500 shrink-0" />
                  <div>
                    <h4 className="text-white text-xs font-mono uppercase tracking-wider text-neutral-400">Our Main Location</h4>
                    <p className="text-white text-sm mt-1 font-semibold">
                      Neeladri Rd, near Electronic City Phase I, Bangalore, Karnataka 560100
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 p-4 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-red-500/10 transition-colors">
                  <Phone className="h-6 w-6 text-red-500 shrink-0" />
                  <div>
                    <h4 className="text-white text-xs font-mono uppercase tracking-wider text-neutral-400">Call / Text Phone</h4>
                    <a href="tel:09567111831" className="text-white text-sm mt-1 font-bold hover:text-red-500 block transition-colors">
                      +91 95671 11831
                    </a>
                  </div>
                </div>

                {/* Gym Hours */}
                <div className="flex gap-4 p-4 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-red-500/10 transition-colors">
                  <Clock className="h-6 w-6 text-red-500 shrink-0" />
                  <div>
                    <h4 className="text-white text-xs font-mono uppercase tracking-wider text-neutral-400">Coaching Timings</h4>
                    <p className="text-white text-sm mt-1 font-semibold leading-relaxed">
                      Mon &ndash; Sat: 5:30 AM &ndash; 10:00 PM
                      <span className="block text-red-400 text-xs font-normal">Sunday: Exclusively Pre-booked Consultations</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Instant Action Links */}
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="tel:09567111831"
                className="bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white py-3 px-6 rounded-xl font-bold uppercase tracking-wider transition-all text-sm border border-red-500 text-center flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Coach Now</span>
              </a>
              <a
                href="https://wa.me/919567111831?text=Hi%20Coach!%20I'm%20interested%20in%20starting%20my%20fitness%20transformation%20coaching."
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-bold uppercase tracking-wider transition-all text-sm text-center flex items-center justify-center gap-2"
                referrerPolicy="no-referrer"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Form and Map Column (Col: 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Consultation Intake Form */}
            <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center gap-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center border border-green-500">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white text-xl font-black uppercase tracking-wide">ROADMAP INITIATED!</h4>
                    <p className="text-neutral-400 text-sm mt-2 max-w-sm">
                      Thank you! Coach will reach out on your phone number within 12 hours to schedule your free baseline biometrics fitness checkup.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="text-red-500 text-xs uppercase tracking-widest font-bold underline cursor-pointer mt-4 hover:text-red-400"
                  >
                    Submit Another Goal Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h4 className="text-white text-lg font-sans font-black uppercase tracking-wide mb-2">
                    Enter Transformation Parameters
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase font-mono tracking-wider text-neutral-400">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="bg-neutral-950 border border-white/10 text-white p-3 rounded-lg text-sm focus:outline-none focus:border-red-500 placeholder-neutral-600"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase font-mono tracking-wider text-neutral-400">WhatsApp / Phone No.</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 95671 11831"
                        className="bg-neutral-950 border border-white/10 text-white p-3 rounded-lg text-sm focus:outline-none focus:border-red-500 placeholder-neutral-600"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-neutral-400">Primary Goal</label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="bg-neutral-950 border border-white/10 text-white p-3 rounded-lg text-sm focus:outline-none focus:border-red-500 cursor-pointer"
                    >
                      <option value="Weight Loss">Weight Loss &amp; Toning</option>
                      <option value="Muscle Building">Muscle Hypertrophy &amp; Bulk</option>
                      <option value="Strength Training">Compound Strength Lift Training</option>
                      <option value="Online Coaching">Online Global Hybrid Program</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-neutral-400">Past Injuries / Experience (Optional)</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Beginner, severe knee stiffness, want to transform safely..."
                      className="bg-neutral-950 border border-white/10 text-white p-3 rounded-lg text-sm focus:outline-none focus:border-red-500 placeholder-neutral-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs mt-4 transition-all duration-300 shadow-lg shadow-red-950/40 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Start Fitness Journey</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps placeholder visual */}
            <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden aspect-[16/9] relative shadow-lg">
              {/* Fake Interactive map visual representation with red pin */}
              <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center p-6 text-center">
                {/* Embed modern maps styling if permitted, or display elegant dark stylish map vector */}
                <iframe
                  title="Gym Google Maps location Neeladri road Electronic city Bangalore"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.761066750012!2d77.65482317590822!3d12.858711687446345!2m3!1f0!2f0!3f0!3m2!1i124!2s!4f13.1!3m3!1m2!1s0x3bae6c3746c820cb%3A0xc6c4f8ef0e9fd19c!2sNeeladri%20Rd%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1716162000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 opacity-80 filter invert contrast-125"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
