import type { PageId } from '../types';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import site, { whatsappLink } from '../data/site';
import { MessageCircle } from 'lucide-react';

type SobreProps = { onNavigate: (id: PageId) => void };

const values = [
  {
    title: 'O fazer manual',
    text: 'Cada peça é modelada à mão, sem atalhos. Acreditamos no gesto que se repete até encontrar sua forma.',
  },
  {
    title: 'O tempo lento',
    text: 'A cerâmica ensina a esperar — a argila seca, o esmalte repousa, o fogo transforma no seu ritmo.',
  },
  {
    title: 'A convivência',
    text: 'O ateliê é um espaço de encontro. Mais de quarenta alunas circulam por aqui ao longo da semana.',
  },
];

export default function Sobre({ onNavigate }: SobreProps) {
  return (
    <div className="pt-28">
      {/* Intro */}
      <section className="container-px mx-auto max-w-8xl py-16 lg:py-24">
        <SectionHeading
          eyebrow="Sobre o ateliê"
          title={
            <>
              Um espaço onde o barro
              <br className="hidden sm:block" /> vira presença
            </>
          }
          intro="O Tal Cerâmica nasceu do desejo de reunir, em um mesmo lugar, a criação de peças autorais e o ensino do ofício. Hoje, o ateliê recebe alunas regulares e produz trabalhos que circulam entre mãos e mesas."
        />
      </section>

      {/* Image + text */}
      <section className="container-px mx-auto max-w-8xl pb-24 lg:pb-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-clay-100">
              <img
                src="https://images.pexels.com/photos/15122649/pexels-photo-15122649.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1000"
                alt="Artesã organizando peças de cerâmica em prateleiras do estúdio"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center">
            <p className="eyebrow">Nossa proposta</p>
            <h2 className="mt-5 font-serif text-3xl leading-snug text-graphite-700 sm:text-4xl text-balance">
              Valorizar o que é feito devagar, com atenção e com gosto
            </h2>
            <p className="mt-6 leading-relaxed text-graphite-500">
              Trabalhamos com argilas, esmaltes e queimas que privilegiam a
              singularidade de cada peça. Nada é idêntico — e é nessa
              imperfeição que mora a beleita do artesanal.
            </p>
            <p className="mt-4 leading-relaxed text-graphite-500">
              Nas aulas, acompanhamos cada participante no seu ritmo. Nas
              peças, buscamos uma estética contemporânea que converse com o
              uso cotidiano.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-200/60 py-24 lg:py-32">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading
            eyebrow="Princípios"
            title="O que nos move"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="border-t border-graphite-600/15 pt-6">
                  <span className="font-serif text-5xl text-clay-300">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl text-graphite-700">
                    {v.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-graphite-500">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section className="container-px mx-auto max-w-8xl py-24 lg:py-32">
        <Reveal>
          <div className="aspect-[16/7] overflow-hidden rounded-sm bg-clay-100">
            <img
              src="https://images.pexels.com/photos/37827277/pexels-photo-37827277.jpeg?auto=compress&cs=tinysrgb&h=1000&w=2200"
              alt="Ceramista organizando prateleiras com peças em ateliê iluminado"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-8xl pb-24 lg:pb-32">
        <div className="flex flex-col items-start justify-between gap-8 rounded-sm bg-graphite-600 px-8 py-12 text-cream-100 sm:flex-row sm:items-center sm:px-12">
          <div>
            <h2 className="font-serif text-3xl text-cream-100 sm:text-4xl text-balance">
              Quer fazer parte da próxima turma?
            </h2>
            <p className="mt-3 max-w-md text-cream-100/70">
              As vagas são limitadas. Fale com a gente para conhecer o espaço e
              verificar disponibilidade.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button
              variant="light"
              onClick={() => onNavigate('aulas')}
              className="border-cream-100/30 hover:bg-cream-100 hover:text-graphite-700"
            >
              Ver aulas
            </Button>
            <Button
              variant="light"
              href={whatsappLink(
                site.whatsapp.number,
                'Olá! Gostaria de conhecer o ateliê e saber sobre vagas.'
              )}
              className="border-cream-100/30 hover:bg-cream-100 hover:text-graphite-700"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
