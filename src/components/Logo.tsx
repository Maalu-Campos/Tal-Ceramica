import type { PageId } from '../types';
import site from '../data/site';

type LogoProps = {
  onClick?: (id: PageId) => void;
  variant?: 'dark' | 'light';
  className?: string;
};

export default function Logo({
  onClick,
  variant = 'dark',
  className = '',
}: LogoProps) {
  const isLight = variant === 'light';
  return (
    <button
      type="button"
      onClick={() => onClick?.('home')}
      className={`group flex items-center gap-3 ${className}`}
      aria-label={`${site.name} — ir para o início`}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-500 ${
          isLight
            ? 'border-cream-100/40 text-cream-100'
            : 'border-clay-500/40 text-clay-500'
        } group-hover:border-clay-500 group-hover:text-clay-500`}
      >
        <span className="font-serif text-2xl leading-none">t</span>
      </span>
      <span className="flex flex-col items-start leading-none">
        <span
          className={`font-serif text-xl tracking-wide transition-colors duration-500 ${
            isLight ? 'text-cream-100' : 'text-graphite-700'
          }`}
        >
          {site.name}
        </span>
        <span
          className={`mt-1 text-[10px] uppercase tracking-widest2 transition-colors duration-500 ${
            isLight ? 'text-cream-100/70' : 'text-clay-500'
          }`}
        >
          Ateliê
        </span>
      </span>
    </button>
  );
}
