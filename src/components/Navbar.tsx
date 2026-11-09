import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { PageId } from '../types';
import { navItems } from './navItems';
import Logo from './Logo';
import { useScrollLock } from '../hooks/useScrollLock';

type NavbarProps = {
  current: PageId;
  onNavigate: (id: PageId) => void;
};

export default function Navbar({ current, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(46,43,39,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto flex max-w-8xl items-center justify-between py-4 lg:py-5">
        <Logo onClick={handleNav} variant={scrolled ? 'dark' : 'dark'} />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = current === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className={`link-underline text-sm tracking-wide transition-colors duration-300 ${
                    active
                      ? 'text-clay-500'
                      : 'text-graphite-600 hover:text-clay-500'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-graphite-700 transition-colors hover:bg-clay-500/10 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden bg-cream-100 transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-px mx-auto flex max-w-8xl flex-col gap-1 py-4">
          {navItems.map((item) => {
            const active = current === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className={`flex w-full items-center justify-between border-b border-graphite-600/10 py-4 text-left font-serif text-2xl transition-colors duration-300 ${
                    active ? 'text-clay-500' : 'text-graphite-700'
                  }`}
                >
                  {item.label}
                  <span className="text-xs font-sans uppercase tracking-widest2 text-clay-500/60">
                    0{navItems.indexOf(item) + 1}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
