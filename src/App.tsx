import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF2EB] to-[#FFE8CD]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Appointment />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;