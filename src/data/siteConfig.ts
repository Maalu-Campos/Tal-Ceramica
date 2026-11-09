export type SiteConfig = {
  name: string;
  tagline: string;
  whatsapp: {
    number: string; // E.164 without +, used to build wa.me links
    label: string;
  };
  instagram: {
    handle: string; // without @
    label: string;
  };
  contact: {
    email: string;
    addressLines: string[];
    visitation: string;
  };
};

/**
 * Central configuration for Tal Cerâmica.
 * Edite este arquivo para alterar contatos, endereço e redes sociais.
 */
export const siteConfig: SiteConfig = {
  name: 'Tal Cerâmica',
  tagline: 'Conectando arte e pessoas',
  whatsapp: {
    number: '5511999999999', // DEMO — substituir pelo número real
    label: '(11) 99999-9999',
  },
  instagram: {
    handle: 'tal.ceramica',
    label: '@tal.ceramica',
  },
  contact: {
    email: 'contato@talceramica.com.br', // DEMO — substituir pelo e-mail real
    addressLines: [
      'Rua Demonstração, 123', // DEMO — substituir pelo endereço real
      'Bairro Criativo · São Paulo / SP',
    ],
    visitation:
      'Visitação sob agendamento prévio. Conteúdo demonstrativo — substitua pelo horário real do ateliê.',
  },
};

export const whatsappLink = (number: string, message?: string) =>
  `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const instagramLink = (handle: string) =>
  `https://instagram.com/${handle}`;
