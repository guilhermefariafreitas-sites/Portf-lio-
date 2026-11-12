import { motion, useReducedMotion } from 'motion/react';
import { TESTIMONIALS } from '../data/studioData';

export function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="depoimentos"
      className="border-b border-slate-300/12 bg-[#070F20] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-10 lg:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
            <span>Depoimentos</span>
            <span aria-hidden="true">·</span>
            <span>Clientes reais em todo o Brasil</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Quem confiou na Premium Web recomenda.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.figure
              key={item.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="metallic-card rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>{item.niche}</span>
                  <span aria-hidden="true">·</span>
                  <span>Entrega &lt; 24h</span>
                </div>

                <blockquote className="text-sm sm:text-base leading-relaxed text-slate-200">
                  “{item.quote}”
                </blockquote>
              </div>

              <figcaption className="pt-5 border-t border-slate-300/10 space-y-2">
                <div>
                  <p className="font-display text-base font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-slate-400">
                    {item.role} · {item.company}
                  </p>
                </div>
                <p className="text-xs font-medium text-slate-300 tabular-nums">
                  Resultado: {item.outcome}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
