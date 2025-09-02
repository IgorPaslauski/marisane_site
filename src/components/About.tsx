import React from 'react';
import { Award, Users, Heart, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Certificação Profissional',
      description: 'Formação em Terapia Sistêmica e Constelação Familiar'
    },
    {
      icon: Users,
      title: '8+ Anos de Experiência',
      description: 'Atendendo famílias e indivíduos com dedicação'
    },
    {
      icon: Heart,
      title: 'Abordagem Humanizada',
      description: 'Cuidado personalizado para cada pessoa'
    },
    {
      icon: Star,
      title: 'Resultados Comprovados',
      description: 'Transformações reais na vida dos clientes'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">
                Sobre Marisane Almeida
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sou terapeuta sistêmica com mais de 8 anos de experiência, especializada em 
                constelação familiar e terapia de sistemas. Minha missão é criar um espaço 
                seguro e acolhedor onde você possa explorar suas relações familiares, 
                compreender padrões herdados e encontrar caminhos para a cura.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acredito que cada pessoa carrega em si a sabedoria necessária para sua 
                transformação. Meu papel é facilitar esse processo, oferecendo ferramentas 
                e insights que promovam o autoconhecimento e o crescimento pessoal.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-[#FFDCDC] text-gray-700 rounded-full text-sm font-medium">
                Terapia Sistêmica
              </span>
              <span className="px-4 py-2 bg-[#FFE8CD] text-gray-700 rounded-full text-sm font-medium">
                Constelação Familiar
              </span>
              <span className="px-4 py-2 bg-[#C1CFA1] text-gray-700 rounded-full text-sm font-medium">
                Terapia Individual
              </span>
              <span className="px-4 py-2 bg-[#FFD6BA] text-gray-700 rounded-full text-sm font-medium">
                Terapia de Casal
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#FFF2EB] to-[#FFDCDC] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <achievement.icon className="w-8 h-8 text-[#A5B68D] mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;