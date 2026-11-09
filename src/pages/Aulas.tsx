import { MessageCircle, ArrowRight } from 'lucide-react';
import type { PageId } from '../types';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { classGroups } from '../data/classes';
import site, { whatsappLink } from '../data/site';

type AulasProps = { onNavigate: (id: PageId) => void };

export default function Aulas({ onNavigate: _onNavigate }: AulasProps) {
  return (
    <div className="pt-28">
      <section className="container-px mx-auto max-w-8xl py-16 lg:py-24">
        <SectionHeading
          eyebrow="Aulas regulares"
          title={
            <>
              Turmas semanais para
              <br className="hidden sm:block" /> todos os ritmos
            </>
          }
          intro="Com mais de quarenta alunas ativas, o ateliê oferece turmas ao longo da semana. Cada grupo é acompanhado de perto, no seu tempo."
        />
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay-100 px-4 py-2 text-xs text-clay-700">
          <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
          Conteúdo demonstrativo — substitua horários e vagas pelos dados reais
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24 lg:pb-32">
        <div className="space-y-20 lg:space-y-28">
          {classGroups.map((c, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={c.id}>
                <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div
                    className={`relative aspect-[5/4] overflow-hidden rounded-sm bg-clay-100 ${
                      reversed ? 'lg:order-2' : ''
                    }`}
                  >
                    <img
                      src={c.image}
                      alt={c.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <p className="eyebrow">0{i + 1} · {c.level}</p>
                    <h2 className="mt-4 font-serif text-3xl text-graphite-700 sm:text-4xl text-balance">
                      {c.title}
                    </h2>
                    <p className="mt-5 leading-relaxed text-graphite-500">
                      {c.description}
                    </p>
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                      <Button
                        href={whatsappLink(
                          site.whatsapp.number,
                          `Olá! Gostaria de consultar disponibilidade na ${c.title}.`
                        )}
                      >
                        <MessageCircle size={16} />
                        Consultar disponibilidade
                      </Button>
                      <span className="text-xs text-graphite-400">
                        {c.seatsNote}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-200/60 py-24 lg:py-32">
        <div className="container-px mx-auto max-w-8xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Quer começar?"
              title="Não encontrou uma turma que encaixe?"
              intro="Fale com a gente — novas turmas se formam conforme a demanda do ateliê."
              align="center"
            />
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href={whatsappLink(
                  site.whatsapp.number,
                  'Olá! Gostaria de saber sobre novas turmas no Tal Cerâmica.'
                )}
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
                <ArrowRight
                  size={15}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
