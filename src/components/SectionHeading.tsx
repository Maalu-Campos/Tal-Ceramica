import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
      } ${className}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 font-serif text-4xl leading-tight text-graphite-700 sm:text-5xl text-balance">
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed text-graphite-500 ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
