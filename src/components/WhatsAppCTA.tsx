import { MessageSquare } from "lucide-react";

export default function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/919567111831?text=Hi%20Coach!%20I'm%20interested%20in%20starting%20my%20fitness%20transformation%20coaching."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center border-2 border-white/20 select-none cursor-pointer"
      referrerPolicy="no-referrer"
    >
      {/* Outer Glow Pulse Aura */}
      <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping -z-10" />
      
      {/* WhatsApp Message bubble Icon */}
      <MessageSquare className="h-6 w-6 text-white fill-current" />

      {/* Pop Hover Label */}
      <div className="absolute right-full mr-3 bg-neutral-900 border border-white/10 text-white px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block pointer-events-none">
        Chat with Coach on WhatsApp
      </div>
    </a>
  );
}
