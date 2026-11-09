import { MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { products } from '../data/products';
import site, { whatsappLink } from '../data/site';

export default function Loja() {
  return (
    <div className="pt-28">
      <section className="container-px mx-auto max-w-8xl py-16 lg:py-24">
        <SectionHeading
          eyebrow="Loja"
          title={
            <>
              Peças autorais,
              <br className="hidden sm:block" /> feitas no ateliê
            </>
          }
          intro="Cada peça é única — modelada e queimada no Tal Cerâmica. Os valores e a disponibilidade são confirmados pelo WhatsApp."
        />
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay-100 px-4 py-2 text-xs text-clay-700">
          <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
          Catálogo demonstrativo — substitua fotos, preços e disponibilidade
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24 lg:pb-32">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 100}>
              <article className="group">
                <div className="relative aspect-square overflow-hidden rounded-sm bg-clay-100">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  {!p.available && (
                    <div className="absolute inset-0 flex items-center justify-center bg-graphite-700/40">
                      <span className="rounded-full bg-cream-100/95 px-4 py-1.5 text-[10px] uppercase tracking-widest2 text-graphite-700">
                        Esgotado
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl text-graphite-700">
                    {p.name}
                  </h3>
                  <span className="shrink-0 text-sm text-clay-500">
                    {p.price}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-graphite-500">
                  {p.description}
                </p>
                <div className="mt-5">
                  {p.available ? (
                    <Button
                      href={whatsappLink(
                        site.whatsapp.number,
                        `Olá! Tenho interesse na peça "${p.name}".`
                      )}
                      variant="outline"
                      className="px-5 py-2.5 text-xs"
                    >
                      <MessageCircle size={14} />
                      Consultar
                    </Button>
                  ) : (
                    <p className="text-xs text-graphite-400">
                      Indisponível no momento
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-200/60 py-20 lg:py-24">
        <div className="container-px mx-auto max-w-8xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Encomendas"
              title="Procurava algo específico?"
              intro="Fazemos encomendas autorais. Conte o que imagina e construímos com você."
              align="center"
            />
            <div className="mt-8 flex justify-center">
              <Button
                href={whatsappLink(
                  site.whatsapp.number,
                  'Olá! Gostaria de fazer uma encomenda com o Tal Cerâmica.'
                )}
              >
                <MessageCircle size={16} />
                Iniciar uma encomenda
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
