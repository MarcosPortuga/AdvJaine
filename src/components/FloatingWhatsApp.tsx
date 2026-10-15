import React, { useState } from 'react';
import { contactInfo } from '../data/practiceAreas';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`hidden sm:flex items-center px-3.5 py-1.5 rounded-xs bg-[#1C080E] border border-[#C5A869]/40 text-[#EDE8DF] text-xs uppercase tracking-wider font-medium shadow-xl transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mr-2 animate-pulse" />
        <span>Fale comigo</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={contactInfo.whatsappDefaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp com a advogada Jaine Lima"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#18060A] border-2 border-[#C5A869] text-[#EDE8DF] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_12px_40px_rgba(197,168,105,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A869]"
      >
        {/* Subtle breathing glow behind button */}
        <span className="absolute inset-0 rounded-full bg-[#C5A869]/20 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 text-[#C5A869] group-hover:text-[#FFF] transition-colors"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#25D366" stroke="#25D366" />
          <path d="M9.5 9a1.5 1.5 0 0 0 1.5 1.5c1 0 2 1 2 2a1.5 1.5 0 0 0 1.5 1.5" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
