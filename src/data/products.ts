export type Product = {
  id: string;
  name: string;
  description: string;
  price: string; // texto demonstrativo
  available: boolean;
  image: string;
  imageAlt: string;
};

/**
 * Catálogo da loja.
 * CONTEÚDO DEMONSTRATIVO — substitua nomes, preços e disponibilidade pelos dados reais.
 */
export const products: Product[] = [
  {
    id: 'vaso-areia',
    name: 'Vaso Areia',
    description: 'Vaso de paredes irregulares, queima oxidante.',
    price: 'Sob consulta',
    available: true,
    image:
      'https://images.pexels.com/photos/27180805/pexels-photo-27180805.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    imageAlt: 'Vaso de cerâmica minimalista com flores secas',
  },
  {
    id: 'tigela-barro',
    name: 'Tigela Barro',
    description: 'Tigela de uso diário, esmalte fosco terroso.',
    price: 'Sob consulta',
    available: true,
    image:
      'https://images.pexels.com/photos/32212371/pexels-photo-32212371.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    imageAlt: 'Coleção de tigelas de cerâmica artesanal',
  },
  {
    id: 'caneca-folha',
    name: 'Caneca Folha',
    description: 'Caneca com textura de folha impressa.',
    price: 'Sob consulta',
    available: true,
    image:
      'https://images.pexels.com/photos/6611187/pexels-photo-6611187.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    imageAlt: 'Canecas de cerâmica artesanal em prateleira',
  },
  {
    id: 'prato-oliva',
    name: 'Prato Oliva',
    description: 'Prato raso em tom verde oliva vitrificado.',
    price: 'Sob consulta',
    available: false,
    image:
      'https://images.pexels.com/photos/28271468/pexels-photo-28271468.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    imageAlt: 'Tigelas e pratos de cerâmica artesanal',
  },
  {
    id: 'vaso-terracota',
    name: 'Vaso Terracota',
    description: 'Peça de parede orgânica, queima de sal.',
    price: 'Sob consulta',
    available: true,
    image:
      'https://images.pexels.com/photos/28157147/pexels-photo-28157147.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    imageAlt: 'Vasos de cerâmica empilhados em tons terrosos',
  },
  {
    id: 'bowl-creme',
    name: 'Bowl Creme',
    description: 'Bowl pequeno para servir, esmalte bruto.',
    price: 'Sob consulta',
    available: true,
    image:
      'https://images.pexels.com/photos/6739219/pexels-photo-6739219.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    imageAlt: 'Tigelas de cerâmica texturizadas sobre superfície de madeira',
  },
];
