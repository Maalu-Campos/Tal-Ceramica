import { MessageCircle, Instagram, MapPin, Clock, Mail } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import site, { whatsappLink, instagramLink } from '../data/site';

export default function Contato() {
  return (
    <div className="pt-28">
      <section className="container-px mx-auto max-w-8xl py-16 lg:py-24">
        <SectionHeading
          eyebrow="Contato"
          title={
            <>
              vamos conversar
              <br className="hidden sm:block" /> sobre barro
            </>
          }
          intro="Para aulas, workshops, peças ou encomendas — escolha o canal que preferir. Respondemos com calma, no ritmo do ateliê."
        />
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay-100 px-4 py-2 text-xs text-clay-700">
          <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
          Endereço e horário demonstrativos — substitua pelos dados reais
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24 lg:pb-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Canais */}
          <Reveal>
            <div className="space-y-4">
              <a
                href={whatsappLink(
                  site.whatsapp.number,
                  'Olá! Gostaria de falar com o Tal Cerâmica.'
                )}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-sm border border-graphite-600/15 bg-cream-50 px-6 py-6 transition-all duration-500 hover:border-clay-500/50 hover:shadow-[0_20px_50px_-30px_rgba(46,43,39,0.4)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay-500/10 text-clay-500 transition-colors group-hover:bg-clay-500 group-hover:text-cream-100">
                    <MessageCircle size={20} />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest2 text-clay-500">
                      WhatsApp
                    </p>
                    <p className="font-serif text-xl text-graphite-700">
                      {site.whatsapp.label}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-graphite-400 transition-transform duration-500 group-hover:translate-x-1">
                  Abrir
                </span>
              </a>

              <a
                href={instagramLink(site.instagram.handle)}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-sm border border-graphite-600/15 bg-cream-50 px-6 py-6 transition-all duration-500 hover:border-clay-500/50 hover:shadow-[0_20px_50px_-30px_rgba(46,43,39,0.4)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-400/10 text-terracotta-500 transition-colors group-hover:bg-terracotta-400 group-hover:text-cream-100">
                    <Instagram size={20} />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest2 text-terracotta-500">
                      Instagram
                    </p>
                    <p className="font-serif text-xl text-graphite-700">
                      {site.instagram.label}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-graphite-400 transition-transform duration-500 group-hover:translate-x-1">
                  Seguir
                </span>
              </a>

              <a
                href={`mailto:${site.contact.email}`}
                className="group flex items-center justify-between rounded-sm border border-graphite-600/15 bg-cream-50 px-6 py-6 transition-all duration-500 hover:border-clay-500/50 hover:shadow-[0_20px_50px_-30px_rgba(46,43,39,0.4)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-400/10 text-olive-500 transition-colors group-hover:bg-olive-400 group-hover:text-cream-100">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest2 text-olive-500">
                      E-mail
                    </p>
                    <p className="font-serif text-xl text-graphite-700">
                      {site.contact.email}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-graphite-400 transition-transform duration-500 group-hover:translate-x-1">
                  Escrever
                </span>
              </a>
            </div>
          </Reveal>

          {/* Visitação */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-sm bg-graphite-600 p-8 text-cream-100 lg:p-10">
              <div className="flex items-center gap-3 text-clay-300">
                <MapPin size={20} />
                <p className="text-[11px] uppercase tracking-widest2">
                  O ateliê
                </p>
              </div>
              <h2 className="mt-5 font-serif text-3xl text-cream-100 text-balance">
                {site.contact.addressLines[0]}
              </h2>
              <p className="mt-2 text-cream-100/70">
                {site.contact.addressLines.slice(1).join(' · ')}
              </p>

              <div className="mt-8 flex items-center gap-3 text-clay-300">
                <Clock size={20} />
                <p className="text-[11px] uppercase tracking-widest2">
                  Visitação
                </p>
              </div>
              <p className="mt-4 leading-relaxed text-cream-100/80">
                {site.contact.visitation}
              </p>

              <div className="mt-auto pt-10">
                <Button
                  variant="light"
                  href={whatsappLink(
                    site.whatsapp.number,
                    'Olá! Gostaria de agendar uma visita ao ateliê.'
                  )}
                  className="border-cream-100/30 hover:bg-cream-100 hover:text-graphite-700"
                >
                  <MessageCircle size={16} />
                  Agendar visita
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
