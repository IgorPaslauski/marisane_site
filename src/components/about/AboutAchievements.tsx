import React from "react";
import { Award, Users, Heart, Star } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Certificação Profissional",
    description: "Formação em Terapia Sistêmica e Constelação Familiar",
  },
  {
    icon: Users,
    title: "8+ Anos de Experiência",
    description: "Atendendo famílias e indivíduos com dedicação",
  },
  {
    icon: Heart,
    title: "Abordagem Humanizada",
    description: "Cuidado personalizado para cada pessoa",
  },
  {
    icon: Star,
    title: "Resultados Comprovados",
    description: "Transformações reais na vida dos clientes",
  },
];

const AboutAchievements = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {achievements.map((achievement, index) => (
        <div key={index} className="bg-gradient-to-br from-[#FFF2EB] to-[#FFDCDC] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <achievement.icon className="w-8 h-8 text-[#A5B68D] mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">{achievement.title}</h3>
          <p className="text-sm text-gray-600">{achievement.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutAchievements;
