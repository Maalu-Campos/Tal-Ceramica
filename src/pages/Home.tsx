import { ArrowRight, MessageCircle, Instagram, MapPin } from 'lucide-react';
import type { PageId } from '../types';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import site, {
  whatsappLink,
  instagramLink,
} from '../data/site';
import { classGroups } from '../data/classes';
import { workshops } from '../data/workshops';
import { products } from '../data/products';
import { galleryImages } from '../data/gallery';

type HomeProps = { onNavigate: (id: PageId) => void };

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/36731541/pexels-photo-36731541.jpeg?auto=compress&cs=tinysrgb&h=1600&w=2400"
          alt="Artista modelando barro na roda em estúdio de cerâmica"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-700/80 via-graphite-700/20 to-graphite-700/30" />
        <div className="container-px relative mx-auto w-full max-w-8xl pb-20 pt-32 lg:pb-28">
          <div className="max-w-2xl">
            <p className="eyebrow animate-fadeUp text-clay-300">
              Ateliê brasileiro de cerâmica
            </p>
            <h1 className="mt-6 animate-fadeUp font-serif text-5xl leading-[1.05] text-cream-100 sm:text-6xl lg:text-7xl text-balance [animation-delay:120ms]">
              Conectando arte e pessoas
            </h1>
            <p className="mt-6 max-w-lg animate-fadeUp text-lg leading-relaxed text-cream-100/85 [animation-delay:240ms]">
              Peças artesanais e aulas de cerâmica nascidas do fazer manual,
              do tempo lento e da convivência no ateliê.
            </p>
            <div className="mt-10 flex animate-fadeUp flex-col gap-4 [animation-delay:360ms] sm:flex-row">
              <Button variant="light" onClick={() => onNavigate('aulas')}>
                Conheça nossas aulas
                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </Button>
              <Button
                variant="light"
                onClick={() => onNavigate('loja')}
                className="border-cream-100/30 bg-cream-100/0 hover:bg-cream-100 hover:text-graphite-700"
              >
                Explore nossas peças
                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 hidden animate-fadeIn text-cream-100/50 [animation-delay:600ms] lg:block">
          <p className="text-[10px] uppercase tracking-widest2">Role para descobrir</p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="container-px mx-auto max-w-8xl py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Manifesto</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-graphite-700 sm:text-5xl text-balance">
              O que se faz com as mãos carrega o tempo de outra forma
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-graphite-500">
              No Tal Cerâmica, cada peça nasce de um gesto repetido, de uma
              argila que responde e de um fogo que nunca é igual. Acreditamos
              no ofício como uma forma de presença — um modo de estar inteiro
              com o que se faz.
            </p>
            <p className="mt-5 leading-relaxed text-graphite-500">
              Mais do que ensinar cerâmica, queremos criar um espaço onde
              pessoas se encontram em torno do barro, da lentidão e do cuidado.
            </p>
            <button
              onClick={() => onNavigate('sobre')}
              className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-medium text-clay-500"
            >
              Conheça nossa história
              <ArrowRight size={15} />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Aulas preview */}
      <section className="bg-cream-200/60 py-24 lg:py-32">
        <div className="container-px mx-auto max-w-8xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Aulas regulares"
              title={
                <>
                  Turmas que se encontram
                  <br className="hidden sm:block" /> em torno do barro
                </>
              }
            />
            <button
              onClick={() => onNavigate('aulas')}
              className="link-underline inline-flex shrink-0 items-center gap-2 text-sm font-medium text-clay-500"
            >
              Ver todas as turmas
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {classGroups.map((c, i) => (
              <Reveal key={c.id} delay={i * 100}>
                <article className="group cursor-pointer" onClick={() => onNavigate('aulas')}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-clay-100">
                    <img
                      src={c.image}
                      alt={c.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 text-[11px] uppercase tracking-widest2 text-clay-500">
                    {c.level}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-graphite-700">
                    {c.title}
                  </h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops preview */}
      <section className="container-px mx-auto max-w-8xl py-24 lg:py-32">
        <SectionHeading
          eyebrow="Workshops"
          title="Encontros pontuais para mergulhar no ofício"
          intro="Experiências de um dia ou fim de semana, com vagas limitadas e materiais inclusos."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {workshops.map((w, i) => (
            <Reveal key={w.id} delay={i * 100}>
              <article
                className="group flex h-full cursor-pointer flex-col rounded-sm border border-graphite-600/10 bg-cream-50 p-6 transition-all duration-500 hover:border-clay-500/40 hover:shadow-[0_20px_50px_-30px_rgba(46,43,39,0.4)]"
                onClick={() => onNavigate('workshops')}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={w.image}
                    alt={w.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[11px] uppercase tracking-widest2 text-clay-500">
                  {w.date} · {w.duration}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-graphite-700">
                  {w.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite-500">
                  {w.description}
                </p>
                <p className="mt-5 text-xs text-graphite-400">
                  {w.seatsTotal - w.seatsTaken} vagas demonstrativas
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Loja preview */}
      <section className="bg-graphite-600 py-24 lg:py-32">
        <div className="container-px mx-auto max-w-8xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Loja"
              title={
                <span className="text-cream-100">
                  Peças que saem do ateliê
                </span>
              }
            />
            <button
              onClick={() => onNavigate('loja')}
              className="link-underline inline-flex shrink-0 items-center gap-2 text-sm font-medium text-clay-300"
            >
              Ver catálogo completo
              <ArrowRight size={15} />
            </button>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <article
                  className="group cursor-pointer"
                  onClick={() => onNavigate('loja')}
                >
                  <div className="relative aspect-square overflow-hidden rounded-sm bg-graphite-500">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="font-serif text-xl text-cream-100">
                      {p.name}
                    </h3>
                    <span className="text-xs text-cream-100/50">
                      {p.available ? 'Disponível' : 'Esgotado'}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-cream-100/60">
                    {p.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria preview strip */}
      <section className="container-px mx-auto max-w-8xl py-24 lg:py-32">
        <SectionHeading
          eyebrow="Galeria"
          title="Cenas do ateliê"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {galleryImages.slice(0, 4).map((g, i) => (
            <Reveal key={g.id} delay={i * 80}>
              <button
                onClick={() => onNavigate('galeria')}
                className="group relative block aspect-square overflow-hidden rounded-sm bg-clay-100"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contato CTA */}
      <section className="bg-clay-500 py-24 lg:py-32">
        <div className="container-px mx-auto max-w-8xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-cream-100/70">Contato</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-cream-100 sm:text-5xl text-balance">
                Venha modelar o seu tempo conosco
              </h2>
              <p className="mt-5 max-w-md text-cream-100/80">
                Tire dúvidas sobre aulas, workshops ou peças. Estamos por perto
                — e sempre com as mãos no barro.
              </p>
            </Reveal>
            <Reveal delay={120} className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Button
                variant="light"
                href={whatsappLink(
                  site.whatsapp.number,
                  'Olá! Gostaria de saber mais sobre o Tal Cerâmica.'
                )}
                className="border-cream-100/40 text-cream-100 hover:bg-cream-100 hover:text-clay-600"
              >
                <MessageCircle size={16} />
                WhatsApp
              </Button>
              <Button
                variant="light"
                href={instagramLink(site.instagram.handle)}
                className="border-cream-100/40 text-cream-100 hover:bg-cream-100 hover:text-clay-600"
              >
                <Instagram size={16} />
                Instagram
              </Button>
              <Button
                variant="light"
                onClick={() => onNavigate('contato')}
                className="border-cream-100/40 text-cream-100 hover:bg-cream-100 hover:text-clay-600"
              >
                <MapPin size={16} />
                Visitar o ateliê
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
