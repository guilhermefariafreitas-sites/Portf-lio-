import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/studioData';

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento no WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex h-12 sm:h-12 w-12 sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-200/35 bg-white sm:px-4 text-[#040812] shadow-lg shadow-black/50 hover:bg-slate-200 hover:-translate-y-0.5 transition-all duration-150"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        Orçamento no WhatsApp
      </span>
    </a>
  );
}
