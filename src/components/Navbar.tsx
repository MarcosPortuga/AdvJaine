import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { contactInfo } from '../data/practiceAreas';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#140508]/92 backdrop-blur-md border-b border-[#C5A869]/20 shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3 sm:py-3.5'
            : 'bg-transparent border-b border-[#C5A869]/10 py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Brand Zone: Single element lockup */}
          <a
            href="#inicio"
            aria-label="Jaine Lima Advogada - Página Inicial"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A869]"
          >
            <Logo variant="full" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase tracking-[0.2em] font-medium text-[#EDE8DF]/85"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="relative py-1 hover:text-[#E0CA92] transition-colors group cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A869] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Primary Action Button (FALAR COMIGO) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={contactInfo.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a advogada pelo WhatsApp"
              className="relative group overflow-hidden px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#16070a] bg-gradient-to-r from-[#D8BA75] via-[#C5A869] to-[#AB8D4D] rounded-xs shadow-[0_2px_15px_rgba(197,168,105,0.25)] hover:shadow-[0_4px_25px_rgba(197,168,105,0.45)] hover:brightness-105 active:scale-[0.98] transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              <span>FALAR COMIGO</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            className="md:hidden p-2 text-[#EDE8DF] hover:text-[#C5A869] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A869]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#120407]/95 backdrop-blur-xl md:hidden transition-all duration-400 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="pt-24 pb-8 px-6 flex flex-col justify-between h-full max-w-sm mx-auto">
          <div className="flex flex-col gap-5">
            <div className="pb-4 border-b border-[#C5A869]/20 flex justify-center">
              <Logo variant="full" />
            </div>

            <nav className="flex flex-col gap-4 text-center mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="py-2.5 text-sm uppercase tracking-[0.22em] text-[#EDE8DF]/90 hover:text-[#C5A869] transition-colors font-medium border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile CTA */}
          <div className="flex flex-col gap-3 pt-6 border-t border-[#C5A869]/20">
            <a
              href={contactInfo.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#16070a] bg-gradient-to-r from-[#D8BA75] to-[#C5A869] rounded-xs shadow-md flex items-center justify-center gap-2"
            >
              <span>Falar pelo WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <p className="text-center text-[10px] text-[#A89D89] tracking-wider uppercase mt-1">
              Atendimento Online & Presencial
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
