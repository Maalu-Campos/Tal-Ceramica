import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { galleryImages } from '../data/gallery';

const spanClass = (span?: string) =>
  span === 'wide'
    ? 'md:col-span-2 aspect-[16/10]'
    : span === 'tall'
    ? 'md:row-span-2 aspect-[3/4]'
    : 'aspect-square';

export default function Galeria() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () =>
      setLightbox((cur) =>
        cur === null ? cur : (cur + 1) % galleryImages.length
      ),
    []
  );
  const prev = useCallback(
    () =>
      setLightbox((cur) =>
        cur === null
          ? cur
          : (cur - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, next, prev]);

  return (
    <div className="pt-28">
      <section className="container-px mx-auto max-w-8xl py-16 lg:py-24">
        <SectionHeading
          eyebrow="Galeria"
          title={
            <>
              Cenas, peças e
              <br className="hidden sm:block" /> experiências no ateliê
            </>
          }
          intro="Um recorte do cotidiano do Tal Cerâmica — mãos, barro, fogo e convivência."
        />
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay-100 px-4 py-2 text-xs text-clay-700">
          <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
          Imagens demonstrativas — substitua pelas fotos reais do ateliê
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24 lg:pb-32">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] md:grid-cols-4">
          {galleryImages.map((g, i) => (
            <Reveal
              key={g.id}
              delay={(i % 4) * 80}
              className={spanClass(g.span)}
            >
              <button
                onClick={() => setLightbox(i)}
                className="group relative h-full w-full overflow-hidden rounded-sm bg-clay-100"
                aria-label={`Abrir imagem: ${g.alt}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-graphite-700/0 transition-colors duration-500 group-hover:bg-graphite-700/20" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-graphite-700/95 p-4 animate-fadeIn"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-cream-100 transition-colors hover:bg-cream-100/10"
            aria-label="Fechar"
          >
            <X size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full text-cream-100 transition-colors hover:bg-cream-100/10 sm:left-6"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={26} />
          </button>
          <figure
            className="max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-h-[78vh] w-auto rounded-sm object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream-100/70">
              {galleryImages[lightbox].alt}
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full text-cream-100 transition-colors hover:bg-cream-100/10 sm:right-6"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </div>
  );
}
