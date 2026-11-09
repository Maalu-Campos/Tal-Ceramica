import type { PageId } from '../types';

export type NavItem = {
  id: PageId;
  label: string;
};

export const navItems: NavItem[] = [
  { id: 'home', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'aulas', label: 'Aulas' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'loja', label: 'Loja' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'contato', label: 'Contato' },
];
