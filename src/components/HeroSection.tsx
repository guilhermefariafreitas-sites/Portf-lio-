import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ResilientImage } from './ResilientImage';
import { STUDIO_IMAGES, buildWhatsAppUrl } from '../data/studioData';

const HERO_PROOFS = [
  { value: '< 24h', label: 'Prazo médio de entrega' },
  { value: '31+', label: 'Nichos atendidos no Brasil' },
  { value: '100%', label: 'Adaptado para celular' },
  { value: 'Direto', label: 'Atendimento humanizado' },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-slate-300/12 bg-gradient-to-b from-[#070F20] via-[#040812] to-[#040812]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-20">
        {/* 2-Column Hero Split with matched heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy & Dominant CTA */}
          <motion.div
            {...fadeUp}
            className="lg:col-span-6 flex flex-col justify-between gap-8 py-2"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
                <span>Estúdio Digital</span>
                <span aria-hidden="true" className="text-slate-500">
                  ·
                </span>
                <span>Criação de Sites</span>
                <span aria-hidden="true" className="text-slate-500">
                  ·
                </span>
                <span>Atendimento em todo o Brasil</span>
              </div>

              <h1 className="font-display text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white">
                Presença digital sob medida entregue em{' '}
                <span className="metallic-text">menos de 24 horas.</span>
              </h1>

              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
                Criamos sites profissionais que valorizam sua marca, conectam você aos seus
                clientes e impulsionam seus resultados.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-[#040812] hover:bg-slate-200 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Solicitar orçamento no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-lg px-4 py-3 text-sm font-medium text-slate-200 hover:text-white hover:bg-[#0C162C] transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Ver projetos realizados</span>
                <ArrowDownRight className="w-4 h-4 shrink-0 text-slate-400" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dominant 16:9 Visual Carrier */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-300/18 bg-[#0C162C] min-h-[260px] sm:min-h-[340px] lg:min-h-full">
              <ResilientImage
                src={STUDIO_IMAGES.hero}
                alt="Estúdio Premium Web exibindo interface moderna de site em monitor metálico e smartphone"
                fallbackTitle="Premium Web · Sites Profissionais em Azul Marinho & Metálico"
                className="h-full w-full object-cover lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040812]/80 via-[#040812]/15 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-300">
                    Design responsivo &amp; alta conversão
                  </p>
                  <p className="font-display text-base sm:text-lg font-semibold text-white mt-0.5">
                    Estruturas prontas para transformar visitas em contatos
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Proof Strip Below Hero Split */}
        <div className="mt-10 lg:mt-14 pt-8 border-t border-slate-300/12">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {HERO_PROOFS.map((item) => (
              <div key={item.label} className="space-y-1">
                <dt className="text-xs sm:text-sm text-slate-400">{item.label}</dt>
                <dd className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
