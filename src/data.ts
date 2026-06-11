import { ClinicConfig, Procedure, Package, GalleryImage } from "./types.ts";

export const clinicConfig: ClinicConfig = {
  name: "Essenza Clínica Estética",
  whatsappNumber: "5521969060505",
  instagramUsername: "essenzaclinicaestetica", // example real handle
  facebookUrl: "https://facebook.com/essenzaclinicaestetica",
  address: "Rua Exemplo, 123 — Centro",
  city: "Nova Iguaçu — RJ",
  workingHours: {
    weekdays: "Segunda a sexta: 9h às 19h",
    saturdays: "Sábado: 9h às 14h",
    sundays: "Domingo: fechado",
  }
};

export const procedures: Procedure[] = [
  {
    id: "limpeza-de-pele",
    name: "Limpeza de Pele",
    description: "Higienização profunda para remover impurezas e renovar a aparência da pele.",
    price: "R$ 120,00",
    tag: "Mais procurado",
    image: "/src/assets/images/facial_treatment_1781150269042.png", // our beautiful custom generated image
  },
  {
    id: "peeling-de-diamante",
    name: "Peeling de Diamante",
    description: "Procedimento estético para auxiliar na renovação e textura da pele.",
    price: "R$ 150,00",
    tag: "Facial",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "drenagem-linfatica",
    name: "Drenagem Linfática",
    description: "Técnica manual voltada para relaxamento, bem-estar e sensação de leveza.",
    price: "R$ 100,00",
    tag: "Bem-estar",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "massagem-relaxante",
    name: "Massagem Relaxante",
    description: "Atendimento pensado para aliviar tensões e proporcionar relaxamento.",
    price: "R$ 90,00",
    tag: "Relax",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "design-de-sobrancelhas",
    name: "Design de Sobrancelhas",
    description: "Modelagem das sobrancelhas para valorizar o olhar com naturalidade.",
    price: "R$ 40,00",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "depilacao",
    name: "Depilação",
    description: "Atendimento para remoção de pelos com cuidado e higiene.",
    price: "Consulte",
    tag: "Consulte",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "tratamento-facial",
    name: "Tratamento Facial",
    description: "Cuidados faciais personalizados conforme a necessidade da pele.",
    price: "Consulte",
    tag: "Avaliação",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "estetica-corporal",
    name: "Estética Corporal",
    description: "Procedimentos voltados para cuidado corporal e bem-estar.",
    price: "Consulte",
    tag: "Corporal",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
  },
];

export const packages: Package[] = [
  {
    id: "pacote-facial-essencial",
    name: "Pacote Facial Essencial",
    description: "Limpeza de pele + skincare personalizado.",
    price: "R$ 180,00",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "pacote-relax",
    name: "Pacote Relax",
    description: "Massagem relaxante + drenagem linfática.",
    price: "R$ 170,00",
    image: "https://images.unsplash.com/photo-1519415053115-90a1443c582b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "pacote-beleza-completa",
    name: "Pacote Beleza Completa",
    description: "Limpeza de pele + design de sobrancelhas + hidratação facial.",
    price: "R$ 220,00",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "galeria-1",
    src: "/src/assets/images/clinic_interior_1781150253912.png", // custom clinic room
    title: "Nosso Ambiente",
    category: "Espaço",
  },
  {
    id: "galeria-2",
    src: "/src/assets/images/facial_treatment_1781150269042.png", // custom facial treatment
    title: "Atendimento Facial",
    category: "Facial",
  },
  {
    id: "galeria-3",
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    title: "Skincare Avançado",
    category: "Produtos",
  },
  {
    id: "galeria-4",
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800",
    title: "Sala de Cuidado",
    category: "Cabine",
  },
  {
    id: "galeria-5",
    src: "https://images.unsplash.com/photo-1519415053115-90a1443c582b?auto=format&fit=crop&q=80&w=800",
    title: "Massagens Relaxantes",
    category: "Relaxamento",
  },
  {
    id: "galeria-6",
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    title: "Especialidades Clínicas",
    category: "Tratamentos",
  },
];
