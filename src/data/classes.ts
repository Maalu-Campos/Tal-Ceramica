export type ClassGroup = {
  id: string;
  title: string;
  level: string;
  description: string;
  seatsNote: string; // demonstrativo
  image: string;
  imageAlt: string;
};

/**
 * Turmas regulares do ateliê.
 * CONTEÚDO DEMONSTRATIVO — substitua horários, níveis e vagas pelos dados reais.
 */
export const classGroups: ClassGroup[] = [
  {
    id: 'manha',
    title: 'Turma da Manhã',
    level: 'Iniciante ao intermediário',
    description:
      'Encontros semanais com foco em modelagem manual, roda e primeiras experiências com esmaltes. Ambiente acolhedor para quem está começando ou retomando a prática.',
    seatsNote: 'Vagas demonstrativas — consultar disponibilidade',
    image:
      'https://images.pexels.com/photos/6611376/pexels-photo-6611376.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    imageAlt: 'Mãos modelando uma tigela de barro em roda de cerâmica',
  },
  {
    id: 'tarde',
    title: 'Turma da Tarde',
    level: 'Intermediário',
    description:
      'Aprofundamento em técnicas de construção, acabamento e composição de superfícies. Turma com ritmo colaborativo e troca constante entre as alunas.',
    seatsNote: 'Vagas demonstrativas — consultar disponibilidade',
    image:
      'https://images.pexels.com/photos/7222335/pexels-photo-7222335.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    imageAlt: 'Mãos modelando tigelas de cerâmica em estúdio',
  },
  {
    id: 'noite',
    title: 'Turma da Noite',
    level: 'Todos os níveis',
    description:
      'Espaço para quem busca o ofício após o dia. Projetos pessoais conduzidos com acompanhamento individual dentro do grupo.',
    seatsNote: 'Vagas demonstrativas — consultar disponibilidade',
    image:
      'https://images.pexels.com/photos/36731511/pexels-photo-36731511.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    imageAlt: 'Artesã modelando barro em roda de cerâmica',
  },
];
