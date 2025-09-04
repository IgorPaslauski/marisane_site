import Header from "./components/Header";
import Services from "./components/service/Services";
import Appointment from "./components/appointment/Appointment";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import TestimonialsSection from "./components/testimonial/TestimonialsSection";
import FAQSection from "./faq/FAQSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF2EB] to-[#FFE8CD]">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Services />
        <TestimonialsSection />
        <Appointment />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
