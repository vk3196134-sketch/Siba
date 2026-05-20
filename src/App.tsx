import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutCoach from "./components/AboutCoach";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ClientReviews from "./components/ClientReviews";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import WhatsAppCTA from "./components/WhatsAppCTA";
import Footer from "./components/Footer";

export default function App() {
  const scrollToContactForm = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      
      // Delay to allow scroll completion, then try focusing the name input
      setTimeout(() => {
        const input = section.querySelector("input");
        if (input) {
          input.focus();
        }
      }, 800);
    }
  };

  return (
    <div className="relative bg-black text-neutral-100 min-h-screen selection:bg-red-600 selection:text-white overflow-x-hidden antialiased">
      {/* Sticky Top Header Navigation */}
      <Header onContactClick={scrollToContactForm} />

      {/* Hero Section */}
      <Hero onStartClick={scrollToContactForm} />

      {/* About Coach Section */}
      <AboutCoach />

      {/* Before vs After Slider Transformations showcase */}
      <BeforeAfterSlider />

      {/* Features & Why Choose Us Section */}
      <WhyChooseUs />

      {/* Premium Programs & Services */}
      <Services onBookClick={scrollToContactForm} />

      {/* Google Business & Client Review Cards */}
      <ClientReviews />

      {/* Interactive Photo Portfolio Gallery */}
      <Gallery />

      {/* Interactive Contact Form & Maps Location Section */}
      <Contact />

      {/* Footer Branding Navigation Blocks */}
      <Footer />

      {/* Floating Dynamic WhatsApp Attention Signal Button */}
      <WhatsAppCTA />
    </div>
  );
}
