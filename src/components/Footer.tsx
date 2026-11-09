import { Instagram, MessageCircle, MapPin, Mail } from 'lucide-react';
import type { PageId } from '../types';
import site, { whatsappLink, instagramLink } from '../data/site';
import { navItems } from './navItems';
import Logo from './Logo';

type FooterProps = {
  onNavigate: (id: PageId) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-graphite-600 text-cream-100/80">
      <div className="container-px mx-auto max-w-8xl py-16 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo onClick={onNavigate} variant="light" />
            <p className="mt-6 max-w-sm font-serif text-2xl leading-snug text-cream-100">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/60">
              Ateliê brasileiro de peças artesanais e aulas de cerâmica. Um
              espaço onde o fazer manual encontra a convivência.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest2 text-cream-100/50">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="link-underline text-sm text-cream-100/80 hover:text-cream-100"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest2 text-cream-100/50">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-clay-300" />
                <span className="leading-relaxed text-cream-100/70">
                  {site.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-3 text-cream-100/80 transition-colors hover:text-cream-100"
                >
                  <Mail size={16} className="shrink-0 text-clay-300" />
                  {site.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={whatsappLink(site.whatsapp.number)}
                target="_blank"
                rel="noreferrer"
                aria-label="Conversar no WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/20 transition-colors hover:border-clay-300 hover:bg-clay-300 hover:text-graphite-700"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={instagramLink(site.instagram.handle)}
                target="_blank"
                rel="noreferrer"
                aria-label="Ver Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/20 transition-colors hover:border-clay-300 hover:bg-clay-300 hover:text-graphite-700"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream-100/10 pt-8 text-xs text-cream-100/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p className="text-cream-100/30">
            Conteúdo demonstrativo · pronto para substituição
          </p>
        </div>
      </div>
    </footer>
  );
}
