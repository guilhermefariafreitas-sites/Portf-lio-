import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, X, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import {
  NICHES,
  NICHE_CATEGORIES,
  NicheCategoryId,
  NicheItem,
  buildWhatsAppUrl,
} from '../data/studioData';

interface ServicesSectionProps {
  onSelectNicheForForm: (nicheName: string) => void;
}

export function ServicesSection({ onSelectNicheForForm }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<NicheCategoryId>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNiche, setSelectedNiche] = useState<NicheItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredNiches = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return NICHES.filter((item) => {
      const matchesCategory =
        activeCategory === 'todos' || item.category === activeCategory;
      const matchesSearch =
        !normalizedQuery ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.categoryLabel.toLowerCase().includes(normalizedQuery) ||
        item.focus.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="servicos"
      className="border-b border-slate-300/12 bg-[#070F20] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
              <span>Serviços &amp; Especialidades</span>
              <span aria-hidden="true">·</span>
              <span>31 segmentos atendidos</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Sites pensados para a realidade do seu segmento.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Não entregamos modelos genéricos. Estruturamos o conteúdo, o visual e os botões de
              chamada conforme o comportamento dos clientes do seu ramo.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full lg:w-80 shrink-0">
            <label htmlFor="niche-search" className="sr-only">
              Buscar nicho ou segmento
            </label>
            <div className="relative flex items-center">
              <Search
                className="pointer-events-none absolute left-3.5 w-4 h-4 text-slate-400"
                aria-hidden="true"
              />
              <input
                id="niche-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar seu segmento (ex: Pizzaria)..."
                className="w-full min-h-[44px] rounded-lg border border-slate-300/20 bg-[#040812] pl-10 pr-10 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-slate-200 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpar busca"
                  className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filtrar nichos por categoria"
          className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl border border-slate-300/12 bg-[#040812] mb-8"
        >
          {NICHE_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white text-[#040812]'
                    : 'text-slate-300 hover:text-white hover:bg-[#0C162C]'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Selected Niche Quick Action Bar */}
        {selectedNiche && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 rounded-xl border border-slate-200/30 bg-[#0D1A36] p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <Check className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
                <span>Segmento selecionado</span>
                <span aria-hidden="true">·</span>
                <span>{selectedNiche.categoryLabel}</span>
              </div>
              <p className="font-display text-lg sm:text-xl font-semibold text-white">
                Site profissional para {selectedNiche.name}
              </p>
              <p className="text-sm text-slate-300">{selectedNiche.focus}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => {
                  onSelectNicheForForm(selectedNiche.name);
                  const contactEl = document.getElementById('contato');
                  contactEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="min-h-[44px] rounded-lg border border-slate-300/25 bg-[#040812] px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-white hover:border-slate-200/50 transition-colors whitespace-nowrap"
              >
                Preencher no formulário
              </button>
              <a
                href={buildWhatsAppUrl(
                  `Olá, Premium Web! Quero solicitar um orçamento de site para o segmento de ${selectedNiche.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#040812] hover:bg-slate-200 transition-colors whitespace-nowrap"
              >
                <span>Orçar para {selectedNiche.name}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}

        {/* Niches Grid */}
        {filteredNiches.length === 0 ? (
          <div className="rounded-xl border border-slate-300/15 bg-[#040812] p-10 text-center space-y-4">
            <p className="font-display text-lg font-semibold text-white">
              Não encontrou exatamente o seu segmento na busca?
            </p>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              Atendemos empresas em geral em todo o Brasil. Fale com nossa equipe no WhatsApp e
              criamos um projeto exclusivo para a sua área.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todos');
                }}
                className="min-h-[44px] rounded-lg border border-slate-300/20 px-4 py-2 text-sm font-medium text-slate-200 hover:text-white"
              >
                Mostrar todos os nichos
              </button>
              <a
                href={buildWhatsAppUrl(
                  `Olá, Premium Web! Tenho interesse em um site para o segmento: ${searchQuery}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-[#040812] hover:bg-slate-200"
              >
                <span>Consultar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNiches.map((niche) => {
              const isSelected = selectedNiche?.id === niche.id;
              return (
                <button
                  key={niche.id}
                  type="button"
                  onClick={() => setSelectedNiche(niche)}
                  aria-pressed={isSelected}
                  className={`group text-left rounded-xl p-5 transition-all duration-150 flex flex-col justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#12203D] border border-slate-200/45'
                      : 'metallic-card-interactive'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium text-slate-400">
                        {niche.categoryLabel}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-150 ${
                          isSelected
                            ? 'text-white translate-x-0.5 -translate-y-0.5'
                            : 'text-slate-500 group-hover:text-slate-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-white">
                      {niche.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {niche.focus}
                  </p>
                </button>
              );
            })}
          </div>
        )}

        {/* Section Bottom CTA */}
        <div className="mt-10 pt-8 border-t border-slate-300/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-300">
            Sua empresa atua em outro ramo? Desenvolvemos sites personalizados para negócios em
            todo o Brasil.
          </p>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#040812] hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Solicitar orçamento no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
