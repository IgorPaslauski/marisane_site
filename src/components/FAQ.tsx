import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'O que é terapia sistêmica?',
      answer: 'A terapia sistêmica é uma abordagem que vê o indivíduo dentro do contexto de seus relacionamentos e sistemas familiares. Focamos em compreender e transformar padrões relacionais que podem estar causando sofrimento.'
    },
    {
      question: 'Como funciona a constelação familiar?',
      answer: 'A constelação familiar é uma técnica terapêutica que revela dinâmicas familiares ocultas através de representações. Permite identificar e resolver traumas, padrões e conflitos que passam de geração em geração.'
    },
    {
      question: 'Quantas sessões são necessárias?',
      answer: 'O número de sessões varia de pessoa para pessoa e depende dos objetivos terapêuticos. Algumas questões podem ser resolvidas em poucas sessões, enquanto outras requerem um processo mais longo. Discutimos isso na primeira consulta.'
    },
    {
      question: 'Atende crianças e adolescentes?',
      answer: 'Sim, atendo crianças e adolescentes, sempre com a participação e consentimento dos responsáveis. A terapia sistêmica é especialmente eficaz para questões familiares que envolvem jovens.'
    },
    {
      question: 'Qual a diferença entre terapia individual e familiar?',
      answer: 'Na terapia individual, focamos no desenvolvimento pessoal dentro do contexto sistêmico. Na terapia familiar, trabalhamos diretamente com a dinâmica familiar, incluindo vários membros da família nas sessões.'
    },
    {
      question: 'Como posso cancelar ou remarcar uma consulta?',
      answer: 'Cancelamentos devem ser feitos com pelo menos 24 horas de antecedência. Entre em contato por telefone ou WhatsApp para remarcar sua consulta sem custos adicionais.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre terapia sistêmica e constelação familiar
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#A5B68D] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#A5B68D] flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[#A5B68D] text-white font-semibold rounded-full hover:bg-[#8A9B73] transition-all duration-300 hover:scale-105"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;