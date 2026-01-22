import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AiConsultant from './components/AiConsultant';

const App: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 selection:bg-gold-500 selection:text-white">
      <Navigation onNavigate={scrollToSection} />
      
      <main>
        <Hero onBook={() => scrollToSection('booking')} />
        <Services />
        <Gallery />
        <Booking />
      </main>

      <Footer />
      <AiConsultant />
    </div>
  );
};

export default App;
