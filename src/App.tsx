/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AuthoritySection from './sections/AuthoritySection';
import AboutSection from './sections/AboutSection';
import PracticeAreasSection from './sections/PracticeAreasSection';
import DifferencesSection from './sections/DifferencesSection';
import QuoteSection from './sections/QuoteSection';
import CtaSection from './sections/CtaSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BrandCardModal from './components/BrandCardModal';

export default function App() {
  const [isBrandCardModalOpen, setIsBrandCardModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#120407] text-[#EDE8DF] selection:bg-[#C5A869]/30 selection:text-[#FFF8E7] relative">
      {/* Top Navigation Bar */}
      <Navbar onOpenConsultation={() => {
        const contactEl = document.getElementById('contato');
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }
      }} />

      {/* Main Content Flow */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection onOpenCardModal={() => setIsBrandCardModalOpen(true)} />

        {/* 2. Authority Section */}
        <AuthoritySection />

        {/* 3. About Section */}
        <AboutSection onOpenCardModal={() => setIsBrandCardModalOpen(true)} />

        {/* 4. Practice Areas Section */}
        <PracticeAreasSection />

        {/* 5. Differentials Section */}
        <DifferencesSection />

        {/* 6. Impact Quote Visual Pause Section */}
        <QuoteSection />

        {/* 7. WhatsApp Conversion CTA Section */}
        <CtaSection />

        {/* 8. Contact & Auto-WhatsApp Message Builder Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Official Brand Identity Card Modal */}
      <BrandCardModal 
        isOpen={isBrandCardModalOpen} 
        onClose={() => setIsBrandCardModalOpen(false)} 
      />
    </div>
  );
}
