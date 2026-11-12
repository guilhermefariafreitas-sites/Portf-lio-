import { FormEvent, useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Phone, Instagram, Clock } from 'lucide-react';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NICHES,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from '../data/studioData';

interface ContactSectionProps {
  preselectedNiche: string;
}

interface FormErrors {
  name?: string;
  niche?: string;
  phone?: string;
  message?: string;
}

export function ContactSection({ preselectedNiche }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [niche, setNiche] = useState(preselectedNiche || '');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedNiche) {
      setNiche(preselectedNiche);
      setSubmittedUrl(null);
    }
  }, [preselectedNiche]);

  const formatPhone = (raw: string) => {
    const digits = raw.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};

    if (name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome completo.';
    }
    if (niche.trim().length < 2) {
      nextErrors.niche = 'Informe o segmento ou nome da empresa.';
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Informe um WhatsApp válido com DDD.';
    }
    if (message.trim().length < 8) {
      nextErrors.message = 'Descreva brevemente o objetivo do seu site.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    const compiledMessage = [
      'Olá, Premium Web! Gostaria de solicitar um orçamento.',
      `Nome: ${name.trim()}`,
      `Empresa / Nicho: ${niche.trim()}`,
      `WhatsApp: ${phone.trim()}`,
      `Objetivo: ${message.trim()}`,
    ].join('\n');

    setSubmittedUrl(buildWhatsAppUrl(compiledMessage));
  };

  return (
    <section id="contato" className="bg-[#040812] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
                <span>Contato &amp; Orçamento</span>
                <span aria-hidden="true">·</span>
                <span>Todo o Brasil</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Pronto para tirar sua ideia do papel em menos de 24 horas?
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                Preencha os dados ao lado para gerar seu resumo ou chame diretamente no WhatsApp
                para conversar com atendimento humanizado.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-300/12">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-card-interactive flex items-center justify-between gap-4 rounded-xl p-5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300/20 bg-[#040812] text-white shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">WhatsApp Comercial</p>
                    <p className="font-display text-base font-semibold text-white tabular-nums">
                      {WHATSAPP_DISPLAY}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-300 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-card-interactive flex items-center justify-between gap-4 rounded-xl p-5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300/20 bg-[#040812] text-white shrink-0">
                    <Instagram className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Instagram Oficial</p>
                    <p className="font-display text-base font-semibold text-white">
                      @{INSTAGRAM_HANDLE}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-300 shrink-0" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-3 px-2 pt-1 text-xs sm:text-sm text-slate-400">
                <Clock className="w-4 h-4 text-slate-300 shrink-0" aria-hidden="true" />
                <span>Entrega garantida em menos de 24h após alinhamento</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="metallic-card rounded-2xl p-6 sm:p-8 lg:p-10">
              {submittedUrl ? (
                <div className="space-y-6 py-4" role="status" aria-live="polite">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-6 h-6 text-white shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="space-y-1.5">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        Resumo pronto para envio
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        Seus dados foram organizados. Clique no botão abaixo para abrir o WhatsApp da
                        Premium Web com sua solicitação preenchida.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-300/15 bg-[#040812] p-5 text-sm text-slate-300 space-y-1.5">
                    <p>
                      <strong className="text-white font-medium">Nome:</strong> {name}
                    </p>
                    <p>
                      <strong className="text-white font-medium">Empresa / Segmento:</strong>{' '}
                      {niche}
                    </p>
                    <p className="tabular-nums">
                      <strong className="text-white font-medium">WhatsApp:</strong> {phone}
                    </p>
                    <p>
                      <strong className="text-white font-medium">Objetivo:</strong> {message}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm sm:text-base font-semibold text-[#040812] hover:bg-slate-200 transition-colors whitespace-nowrap"
                    >
                      <span>Solicitar orçamento no WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedUrl(null)}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-300/20 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white hover:border-slate-200/40 transition-colors"
                    >
                      Editar informações
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      Solicite seu orçamento personalizado
                    </h3>
                    <p className="text-sm text-slate-400">
                      Resposta rápida com proposta transparente para o seu segmento.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs sm:text-sm font-medium text-slate-200"
                      >
                        Nome completo
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: João Silva"
                        aria-invalid={Boolean(errors.name)}
                        className="w-full min-h-[46px] rounded-lg border border-slate-300/20 bg-[#040812] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-slate-200 focus:outline-none transition-colors"
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1.5 text-xs text-rose-300 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs sm:text-sm font-medium text-slate-200"
                      >
                        Seu WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(formatPhone(e.target.value))}
                        placeholder="(69) 99999-9999"
                        aria-invalid={Boolean(errors.phone)}
                        className="w-full min-h-[46px] rounded-lg border border-slate-300/20 bg-[#040812] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-slate-200 focus:outline-none transition-colors tabular-nums"
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1.5 text-xs text-rose-300 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-niche"
                      className="block text-xs sm:text-sm font-medium text-slate-200"
                    >
                      Empresa ou segmento (nicho)
                    </label>
                    <input
                      id="contact-niche"
                      type="text"
                      list="premium-web-niches"
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                      placeholder="Ex: Pizzaria, Studio de Pilates, Escritório de Advocacia..."
                      aria-invalid={Boolean(errors.niche)}
                      className="w-full min-h-[46px] rounded-lg border border-slate-300/20 bg-[#040812] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-slate-200 focus:outline-none transition-colors"
                    />
                    <datalist id="premium-web-niches">
                      {NICHES.map((item) => (
                        <option key={item.id} value={item.name} />
                      ))}
                    </datalist>
                    {errors.niche && (
                      <p className="flex items-center gap-1.5 text-xs text-rose-300 pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.niche}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs sm:text-sm font-medium text-slate-200"
                    >
                      O que você precisa no seu novo site?
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Conte brevemente sobre sua empresa, serviços e o que deseja destacar."
                      aria-invalid={Boolean(errors.message)}
                      className="w-full rounded-lg border border-slate-300/20 bg-[#040812] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-slate-200 focus:outline-none transition-colors resize-y"
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1.5 text-xs text-rose-300 pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-[#040812] hover:bg-slate-200 transition-colors duration-150"
                    >
                      <span>Solicitar orçamento no WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
