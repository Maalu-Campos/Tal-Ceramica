import { useEffect, useState } from 'react';
import type { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Aulas from './pages/Aulas';
import Workshops from './pages/Workshops';
import Loja from './pages/Loja';
import Galeria from './pages/Galeria';
import Contato from './pages/Contato';

export default function App() {
  const [page, setPage] = useState<PageId>('home');

  const navigate = (id: PageId) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    document.title =
      page === 'home'
        ? 'Tal Cerâmica · Conectando arte e pessoas'
        : `Tal Cerâmica · ${labelFor(page)}`;
  }, [page]);

  return (
    <div className="flex min-h-screen flex-col bg-cream-100">
      <Navbar current={page} onNavigate={navigate} />
      <main className="flex-1">
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'sobre' && <Sobre onNavigate={navigate} />}
        {page === 'aulas' && <Aulas onNavigate={navigate} />}
        {page === 'workshops' && <Workshops />}
        {page === 'loja' && <Loja />}
        {page === 'galeria' && <Galeria />}
        {page === 'contato' && <Contato />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

function labelFor(page: PageId): string {
  const map: Record<PageId, string> = {
    home: 'Início',
    sobre: 'Sobre',
    aulas: 'Aulas',
    workshops: 'Workshops',
    loja: 'Loja',
    galeria: 'Galeria',
    contato: 'Contato',
  };
  return map[page];
}
