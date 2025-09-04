export type Testimonial = {
  name: string;
  text: string;
  rating: number; // 0..5
};

export const testimonials: Testimonial[] = [
  {
    name: "Ana Carolina",
    text: "A terapia com Marisane transformou completamente minha relação com minha família. Consegui compreender padrões que se repetiam há gerações.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    text: "As sessões de constelação familiar foram reveladoras. Marisane conduz o processo com muito cuidado e profissionalismo.",
    rating: 5,
  },
  {
    name: "Maria José",
    text: "Encontrei na terapia sistêmica o que procurava há anos. Um espaço seguro para me reconectar comigo mesma e com minha história.",
    rating: 5,
  },
  {
    name: "Carlos e Fernanda",
    text: "A terapia de casal nos ajudou a reconstruir nossa relação. Marisane nos guiou com muita sensibilidade através de momentos difíceis.",
    rating: 5,
  },
];
