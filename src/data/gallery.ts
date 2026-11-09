export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  span?: 'wide' | 'tall' | 'normal';
};

/**
 * Galeria do ateliê.
 * CONTEÚDO DEMONSTRATIVO — substitua as imagens pelas fotos reais do ateliê.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.pexels.com/photos/18373966/pexels-photo-18373966.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    alt: 'Artesão modelando jarras de cerâmica em oficina tradicional',
    span: 'wide',
  },
  {
    id: 'g2',
    src: 'https://images.pexels.com/photos/15122649/pexels-photo-15122649.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    alt: 'Artesã organizando peças em prateleiras do estúdio',
    span: 'tall',
  },
  {
    id: 'g3',
    src: 'https://images.pexels.com/photos/31092376/pexels-photo-31092376.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    alt: 'Ferramentas de cerâmica e peças de barro em oficina',
    span: 'normal',
  },
  {
    id: 'g4',
    src: 'https://images.pexels.com/photos/37827277/pexels-photo-37827277.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    alt: 'Ceramista organizando prateleiras com peças em ateliê',
    span: 'normal',
  },
  {
    id: 'g5',
    src: 'https://images.pexels.com/photos/36731541/pexels-photo-36731541.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    alt: 'Artista modelando peça na roda em estúdio',
    span: 'wide',
  },
  {
    id: 'g6',
    src: 'https://images.pexels.com/photos/34004100/pexels-photo-34004100.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    alt: 'Peças de barro alinhadas em oficina de cerâmica',
    span: 'normal',
  },
  {
    id: 'g7',
    src: 'https://images.pexels.com/photos/6611307/pexels-photo-6611307.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    alt: 'Ceramista modelando peça na roda do ateliê',
    span: 'tall',
  },
  {
    id: 'g8',
    src: 'https://images.pexels.com/photos/33878971/pexels-photo-33878971.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    alt: 'Peças rústicas de cerâmica em prateleira de madeira',
    span: 'wide',
  },
];
