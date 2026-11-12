import { useEffect, useState } from 'react';
import { ArrowUpRight, Eye, X, Check } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ResilientImage } from './ResilientImage';
import { PORTFOLIO_PROJECTS, PortfolioProject, buildWhatsAppUrl } from '../data/studioData';

export function PortfolioSection() {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!activeProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  const [featuredProject, ...secondaryProjects] = PORTFOLIO_PROJECTS;

  return (
    <section
      id="portfolio"
      className="border-b border-slate-300/12 bg-[#040812] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
              <span>Portfólio &amp; Projetos</span>
              <span aria-hidden="true">·</span>
              <span>Resultados comprovados</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Projetos desenvolvidos com foco em autoridade e conversão.
            </h2>
          </div>

          <a
            href={buildWhatsAppUrl(
              'Olá, Premium Web! Vi os projetos do portfólio e quero solicitar um orçamento para o meu negócio.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-white hover:text-slate-300 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Solicitar projeto semelhante</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Wide Project Card */}
          {featuredProject && (
            <motion.article
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-12 metallic-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              <div className="lg:col-span-7 relative min-h-[250px] sm:min-h-[340px] bg-[#0C162C]">
                <ResilientImage
                  src={featuredProject.image}
                  alt={featuredProject.imageAlt}
                  fallbackTitle={featuredProject.title}
                  className="h-full w-full object-cover lg:h-full"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040812]/50 via-transparent to-transparent"
                />
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span>{featuredProject.niche}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredProject.deliveryTime}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{featuredProject.year}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {featuredProject.summary}
                  </p>

                  <div className="pt-3 border-t border-slate-300/12">
                    <p className="text-xs text-slate-400">Impacto observado</p>
                    <p className="font-display text-base sm:text-lg font-semibold text-white mt-0.5 tabular-nums">
                      {featuredProject.resultMetric}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveProject(featuredProject)}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300/25 bg-[#0C162C] px-4 py-2.5 text-sm font-medium text-white hover:border-slate-200/50 hover:bg-[#12203D] transition-colors whitespace-nowrap"
                  >
                    <Eye className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Ver detalhes</span>
                  </button>

                  <a
                    href={buildWhatsAppUrl(
                      `Olá, Premium Web! Gostei do projeto "${featuredProject.title}" (${featuredProject.niche}) e quero solicitar um orçamento.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#040812] hover:bg-slate-200 transition-colors whitespace-nowrap"
                  >
                    <span>Orçar no WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          )}

          {/* Secondary 2-Column Case Studies */}
          {secondaryProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-6 metallic-card rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0C162C] border-b border-slate-300/12">
                  <ResilientImage
                    src={project.image}
                    alt={project.imageAlt}
                    fallbackTitle={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span>{project.niche}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.deliveryTime}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-4 border-t border-slate-300/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400">Resultado</p>
                  <p className="text-sm font-semibold text-white tabular-nums">
                    {project.resultMetric}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-slate-300/25 bg-[#0C162C] px-4 py-2 text-xs sm:text-sm font-medium text-white hover:border-slate-200/50 transition-colors whitespace-nowrap"
                  >
                    <Eye className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Detalhes</span>
                  </button>

                  <a
                    href={buildWhatsAppUrl(
                      `Olá, Premium Web! Gostei do projeto "${project.title}" e quero um orçamento para minha empresa.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Solicitar orçamento baseado em ${project.title} no WhatsApp`}
                    className="inline-flex min-h-[44px] items-center gap-1 rounded-lg bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#040812] hover:bg-slate-200 transition-colors whitespace-nowrap"
                  >
                    <span>Orçar</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal / Lightbox */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-300/20 bg-[#070F20] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Fechar detalhes do projeto"
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300/25 bg-[#040812]/90 text-white hover:bg-[#12203D] transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="aspect-[16/10] w-full bg-[#0C162C] border-b border-slate-300/12">
                <ResilientImage
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  fallbackTitle={activeProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span>{activeProject.niche}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeProject.deliveryTime}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{activeProject.year}</span>
                  </div>
                  <h3
                    id="project-modal-title"
                    className="font-display text-2xl sm:text-3xl font-bold text-white"
                  >
                    {activeProject.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-400">Desafio do cliente</h4>
                    <p className="text-sm leading-relaxed text-slate-200">
                      {activeProject.challenge}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-400">Solução Premium Web</h4>
                    <p className="text-sm leading-relaxed text-slate-200">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-300/15 bg-[#040812] p-5 space-y-3">
                  <p className="text-xs font-medium text-slate-400">Destaques da entrega</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeProject.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-200"
                      >
                        <Check
                          className="w-4 h-4 text-white shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-300/12">
                  <div>
                    <p className="text-xs text-slate-400">Resultado alcançado</p>
                    <p className="font-display text-base font-semibold text-white tabular-nums">
                      {activeProject.resultMetric}
                    </p>
                  </div>

                  <a
                    href={buildWhatsAppUrl(
                      `Olá, Premium Web! Quero um site no nível do projeto "${activeProject.title}" para minha empresa.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#040812] hover:bg-slate-200 transition-colors whitespace-nowrap"
                  >
                    <span>Solicitar orçamento no WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
