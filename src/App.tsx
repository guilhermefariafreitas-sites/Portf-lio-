import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedNicheForForm, setSelectedNicheForForm] = useState('');

  return (
    <div className="min-h-screen bg-[#040812] text-[#F8FAFC] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectNicheForForm={setSelectedNicheForForm} />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection preselectedNiche={selectedNicheForForm} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
