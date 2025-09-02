import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Carolina',
      text: 'A terapia com Marisane transformou completamente minha relação com minha família. Consegui compreender padrões que se repetiam há gerações.',
      rating: 5
    },
    {
      name: 'Roberto Silva',
      text: 'As sessões de constelação familiar foram reveladoras. Marisane conduz o processo com muito cuidado e profissionalismo.',
      rating: 5
    },
    {
      name: 'Maria José',
      text: 'Encontrei na terapia sistêmica o que procurava há anos. Um espaço seguro para me reconectar comigo mesma e com minha história.',
      rating: 5
    },
    {
      name: 'Carlos e Fernanda',
      text: 'A terapia de casal nos ajudou a reconstruir nossa relação. Marisane nos guiou com muita sensibilidade através de momentos difíceis.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as experiências de pessoas que encontraram transformação 
            através da terapia sistêmica e constelação familiar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#FFF2EB] to-[#FFE8CD] p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-[#A5B68D] mr-4" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#A5B68D] text-[#A5B68D]" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="text-right">
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;