import { MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { workshops } from '../data/workshops';
import site, { whatsappLink } from '../data/site';

export default function Workshops() {
  return (
    <div className="pt-28">
      <section className="container-px mx-auto max-w-8xl py-16 lg:py-24">
        <SectionHeading
          eyebrow="Workshops"
          title={
            <>
              Experiências pontuais para
              <br className="hidden sm:block" /> experimentar o barro
            </>
          }
          intro="Encontros de um dia ou fim de semana, com vagas limitadas e materiais inclusos. Pensados para iniciantes e para quem já modela."
        />
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay-100 px-4 py-2 text-xs text-clay-700">
          <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
          Datas e vagas demonstrativas — substitua pelos dados reais
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24 lg:pb-32">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((w, i) => {
            const remaining = w.seatsTotal - w.seatsTaken;
            const full = remaining <= 0;
            return (
              <Reveal key={w.id} delay={i * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-sm border border-graphite-600/10 bg-cream-50 transition-all duration-500 hover:border-clay-500/40 hover:shadow-[0_24px_60px_-32px_rgba(46,43,39,0.45)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={w.image}
                      alt={w.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                    />
                    <span
                      className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest2 ${
                        full
                          ? 'bg-graphite-600 text-cream-100'
                          : 'bg-cream-100/90 text-graphite-700'
                      }`}
                    >
                      {full ? 'Lotado' : `${remaining} vagas`}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[11px] uppercase tracking-widest2 text-clay-500">
                      {w.date} · {w.duration}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-graphite-700">
                      {w.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite-500">
                      {w.description}
                    </p>
                    <div className="mt-6">
                      {full ? (
                        <p className="text-xs text-graphite-400">
                          Turma completa — entre em lista de espera
                        </p>
                      ) : (
                        <Button
                          href={whatsappLink(
                            site.whatsapp.number,
                            `Olá! Tenho interesse no workshop "${w.title}".`
                          )}
                          fullWidth
                          className="text-xs"
                        >
                          <MessageCircle size={14} />
                          Quero participar
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-graphite-600 py-20 lg:py-24">
        <div className="container-px mx-auto max-w-8xl">
          <div className="flex flex-col items-start justify-between gap-8 text-cream-100 sm:flex-row sm:items-center">
            <p className="font-serif text-2xl text-cream-100 sm:text-3xl text-balance">
              Quer propor um workshop para um grupo?
            </p>
            <Button
              variant="light"
              href={whatsappLink(
                site.whatsapp.number,
                'Olá! Gostaria de propor um workshop para um grupo.'
              )}
              className="shrink-0 border-cream-100/30 hover:bg-cream-100 hover:text-graphite-700"
            >
              <MessageCircle size={16} />
              Falar com o ateliê
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
