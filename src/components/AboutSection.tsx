import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';
import { DIFFERENTIALS, STUDIO_IMAGES, buildWhatsAppUrl } from '../data/studioData';

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="sobre"
      className="relative border-b border-slate-300/12 bg-[#040812] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Row: Story + Workspace Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
                <span>Sobre a Premium Web</span>
                <span aria-hidden="true">·</span>
                <span>Propósito e dedicação</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Por trás de cada site existe um sonho que merece se tornar realidade.
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                Sempre fui apaixonado por tecnologia e pela criação de sites. Há seis meses,
                transformei essa paixão em um propósito: ajudar pessoas e empresas a tirarem suas
                ideias do papel, conquistarem seu espaço na internet e alcançarem novos objetivos.
              </p>

              <p className="text-base leading-relaxed text-slate-300">
                Na Premium Web, cada projeto é desenvolvido com dedicação, atenção e compromisso,
                unindo visual marcante, navegação clara e velocidade para que seu negócio passe
                confiança desde o primeiro clique.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl(
                  'Olá, Premium Web! Conheci a história do estúdio e quero solicitar um orçamento para minha empresa.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-lg border border-slate-300/25 bg-[#0C162C] px-5 py-3 text-sm font-semibold text-white hover:border-slate-200/50 hover:bg-[#12203D] transition-colors duration-150 whitespace-nowrap"
              >
                <span>Solicitar orçamento no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-300/15 bg-[#0C162C] min-h-[280px]">
              <ResilientImage
                src={STUDIO_IMAGES.about}
                alt="Ambiente de criação da Premium Web com notebook metálico e esboços de layout"
                fallbackTitle="Estúdio Premium Web · Criação Artesanal de Sites"
                className="h-full w-full object-cover lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040812]/70 via-transparent to-transparent"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: 3 Competitive Differentials with Clean Editorial Numbering */}
        <div className="mt-14 pt-12 border-t border-slate-300/12">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm font-medium text-slate-400">
                Nossos diferenciais competitivos
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mt-1">
                Por que empresas escolhem a Premium Web
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DIFFERENTIALS.map((item, idx) => (
              <motion.article
                key={item.index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="metallic-card rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs font-medium text-slate-400 tabular-nums">
                    {item.index}.
                  </span>
                  <h4 className="font-display text-lg sm:text-xl font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
                <p className="pt-4 border-t border-slate-300/10 text-xs font-medium text-slate-400">
                  {item.highlight}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
