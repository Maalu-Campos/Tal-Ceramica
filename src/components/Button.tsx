import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'light';

type Props = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = 'primary',
  href,
  fullWidth = false,
  className = '',
  ...rest
}: Props) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100';
  const variants: Record<Variant, string> = {
    primary:
      'bg-graphite-600 text-cream-100 hover:bg-graphite-700 rounded-full',
    outline:
      'border border-graphite-600/30 text-graphite-700 hover:border-graphite-600 hover:bg-graphite-600 hover:text-cream-100 rounded-full',
    light:
      'border border-cream-100/50 text-cream-100 hover:bg-cream-100 hover:text-graphite-700 rounded-full',
  };

  const classes = `${base} ${variants[variant]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
