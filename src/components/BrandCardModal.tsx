import React from 'react';
import { X, ExternalLink, Download } from 'lucide-react';
import { OfficialCardView } from './OfficialCardView';
import { contactInfo } from '../data/practiceAreas';

interface BrandCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandCardModal: React.FC<BrandCardModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="card-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#19070B] border border-[#C5A869]/50 rounded-xs p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar visualização"
          className="absolute top-4 right-4 p-2 text-[#A89D89] hover:text-[#EDE8DF] transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A869] font-medium">
            Identidade Oficial da Marca
          </span>
          <h3 
            id="card-modal-title"
            className="text-xl sm:text-2xl font-display uppercase tracking-wide text-gold-gradient mt-1"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Cartão Institucional • Jaine Lima Advogada
          </h3>
        </div>

        {/* The Card View */}
        <div className="w-full flex justify-center py-4">
          <OfficialCardView interactive={false} />
        </div>

        {/* Info footer */}
        <div className="mt-6 pt-4 border-t border-[#C5A869]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89D89]">
          <span className="font-light">
            Tipografia: Clássica Serifada & Moderna Sans-Serif • Paleta: Vinho Escuro & Ouro Nobre
          </span>

          <a
            href={contactInfo.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#140508] bg-[#C5A869] hover:bg-[#E0CA92] rounded-xs transition-colors flex items-center gap-1.5"
          >
            <span>Conversar no WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandCardModal;
