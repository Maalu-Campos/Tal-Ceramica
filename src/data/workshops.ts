export type Workshop = {
  id: string;
  title: string;
  date: string; // texto livre — formato demonstrativo
  duration: string;
  description: string;
  seatsTotal: number;
  seatsTaken: number;
  image: string;
  imageAlt: string;
};

/**
 * Workshops pontuais do ateliê.
 * CONTEÚDO DEMONSTRATIVO — substitua datas, descrições e vagas pelos dados reais.
 */
export const workshops: Workshop[] = [
  {
    id: 'roda-iniciante',
    title: 'Iniciação à Roda',
    date: 'Data a definir',
    duration: 'Encontro único · 4h',
    description:
      'Primeiro contato com a roda de cerâmica: centrar, abrir e dar forma. Inclui materiais e queima de uma peça escolhida pela participante.',
    seatsTotal: 8,
    seatsTaken: 5,
    image:
      'https://images.pexels.com/photos/8063880/pexels-photo-8063880.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    imageAlt: 'Mãos moldando cerâmica em roda',
  },
  {
    id: 'pinch-pots',
    title: 'Modelagem Manual',
    date: 'Data a definir',
    duration: 'Encontro único · 3h',
    description:
      'Construção de peças a partir da técnica de pinça — sem roda, só mãos e argila. Ideal para quem quer sentir o material devagar.',
    seatsTotal: 10,
    seatsTaken: 3,
    image:
      'https://images.pexels.com/photos/7222335/pexels-photo-7222335.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    imageAlt: 'Mãos modelando tigelas de cerâmica',
  },
  {
    id: 'esmaltes',
    title: 'Superfícies & Esmaltes',
    date: 'Data a definir',
    duration: 'Encontro único · 5h',
    description:
      'Estudo prático de esmaltes, engobes e texturas. Cada participante desenvolve testes em pastilhas e leva um pequeno caderno de amostras.',
    seatsTotal: 6,
    seatsTaken: 6,
    image:
      'https://images.pexels.com/photos/28867401/pexels-photo-28867401.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    imageAlt: 'Tigelas de cerâmica não esmaltada alinhadas em ateliê',
  },
];
