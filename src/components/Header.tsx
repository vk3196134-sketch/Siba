import { useState, useEffect } from "react";
import { Phone, MessageSquare, Dumbbell, Menu, X } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Results", href: "#transformations" },
    { name: "Coach Bio", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="bg-red-600 p-2 rounded-lg flex items-center justify-center animate-pulse">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="font-sans font-black tracking-tighter text-2xl bg-gradient-to-r from-white via-neutral-100 to-red-500 bg-clip-text text-transparent uppercase">
                Tone <span className="text-red-500">&</span> Transform
              </span>
              <p className="text-[9px] text-neutral-400 tracking-widest uppercase -mt-1 font-mono">Personal Gym Coach</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-neutral-300 hover:text-red-500 text-sm font-medium tracking-wide uppercase transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919567111831?text=Hi%20Coach!%20I'm%20interested%20in%20starting%20my%20fitness%20transformation%20coaching."
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white p-2.5 rounded-lg transition-colors flex items-center justify-center shadow-md shadow-green-950/20"
              title="Chat over WhatsApp"
              referrerPolicy="no-referrer"
            >
              <MessageSquare className="h-4 w-4" />
            </a>
            <button
              onClick={onContactClick}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border border-red-500 shadow-lg shadow-red-900/30"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-red-500 p-2 rounded-lg border border-white/10 bg-neutral-900/50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-950/98 backdrop-blur-lg border-b border-white/10 shadow-2xl py-6 px-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-250">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-neutral-300 hover:text-red-500 text-base font-semibold uppercase tracking-wider py-2 border-b border-white/5"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-center uppercase tracking-wider text-sm transition-all shadow-lg shadow-red-950/40"
            >
              Book Free Consultation
            </button>
            <a
              href="https://wa.me/919567111831?text=Hi%20Coach!%20I'm%20interested%20in%20starting%20my%20fitness%20transformation%20coaching."
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 uppercase tracking-wider text-sm transition-all"
              referrerPolicy="no-referrer"
            >
              <MessageSquare className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
