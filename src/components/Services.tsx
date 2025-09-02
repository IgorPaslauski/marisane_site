import React from 'react';
import { Users, User, Heart as Heart2, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: 'Terapia Individual',
      description: 'Atendimento personalizado para questões pessoais, autoconhecimento e desenvolvimento emocional.',
      duration: '60 minutos',
      price: 'R$ 150',
      color: 'from-[#FFDCDC] to-[#FFF2EB]'
    },
    {
      icon: Users,
      title: 'Terapia Familiar',
      description: 'Trabalho com famílias para melhorar a comunicação e resolver conflitos através da abordagem sistêmica.',
      duration: '90 minutos',
      price: 'R$ 200',
      color: 'from-[#FFE8CD] to-[#FFD6BA]'
    },
    {
      icon: Heart2,
      title: 'Terapia de Casal',
      description: 'Fortalecimento de vínculos e resolução de conflitos conjugais em um ambiente seguro e acolhedor.',
      duration: '75 minutos',
      price: 'R$ 180',
      color: 'from-[#C1CFA1] to-[#A5B68D]'
    },
    {
      icon: Brain,
      title: 'Constelação Familiar',
      description: 'Técnica terapêutica que revela dinâmicas familiares ocultas e promove a cura de traumas transgeracionais.',
      duration: '120 minutos',
      price: 'R$ 250',
      color: 'from-[#FFD6BA] to-[#FFDCDC]'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Serviços Oferecidos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofereço diferentes modalidades terapêuticas para atender suas necessidades 
            específicas, sempre com uma abordagem sistêmica e humanizada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <service.icon className="w-6 h-6 text-[#A5B68D]" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Duração:</span> {service.duration}
                    </div>
                    <div className="text-xl font-bold text-[#A5B68D]">
                      {service.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Todos os atendimentos são realizados de forma presencial em consultório acolhedor e seguro.
          </p>
          <a
            href="#appointment"
            className="inline-flex items-center px-8 py-4 bg-[#A5B68D] text-white font-semibold rounded-full hover:bg-[#8A9B73] transition-all duration-300 hover:scale-105"
          >
            Escolher Serviço e Agendar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;