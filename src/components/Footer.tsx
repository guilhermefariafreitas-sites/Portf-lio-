import { ArrowUpRight } from 'lucide-react';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from '../data/studioData';

export function Footer() {
  return (
    <footer className="border-t border-slate-300/12 bg-[#040812] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-slate-300/10">
          <div className="space-y-2 max-w-md">
            <a href="#inicio" className="font-display text-xl font-bold tracking-tight text-white">
              Premium Web
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Criamos sites profissionais que valorizam sua marca, conectam você aos seus clientes e
              impulsionam seus resultados.
            </p>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap items-center gap-6 text-sm text-slate-300"
          >
            <a href="#sobre" className="hover:text-white transition-colors whitespace-nowrap">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-white transition-colors whitespace-nowrap">
              Serviços
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors whitespace-nowrap">
              Portfólio
            </a>
            <a href="#depoimentos" className="hover:text-white transition-colors whitespace-nowrap">
              Depoimentos
            </a>
            <a href="#contato" className="hover:text-white transition-colors whitespace-nowrap">
              Contato
            </a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Premium Web · Atendimento em todo o Brasil.</p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <span>@{INSTAGRAM_HANDLE}</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors tabular-nums"
            >
              <span>WhatsApp {WHATSAPP_DISPLAY}</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
