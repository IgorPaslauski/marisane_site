import { Users, User, Heart as Heart2, Brain } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: User,
    title: "Terapia Individual",
    description: "Atendimento personalizado para questões pessoais, autoconhecimento e desenvolvimento emocional.",
    duration: "60 minutos",
    price: "R$ 150",
    color: "from-[#FFDCDC] to-[#FFF2EB]",
  },
  {
    icon: Users,
    title: "Terapia Familiar",
    description: "Trabalho com famílias para melhorar a comunicação e resolver conflitos através da abordagem sistêmica.",
    duration: "90 minutos",
    price: "R$ 200",
    color: "from-[#FFE8CD] to-[#FFD6BA]",
  },
  {
    icon: Heart2,
    title: "Terapia de Casal",
    description: "Fortalecimento de vínculos e resolução de conflitos conjugais em um ambiente seguro e acolhedor.",
    duration: "75 minutos",
    price: "R$ 180",
    color: "from-[#C1CFA1] to-[#A5B68D]",
  },
  {
    icon: Brain,
    title: "Constelação Familiar",
    description: "Técnica terapêutica que revela dinâmicas familiares ocultas e promove a cura de traumas transgeracionais.",
    duration: "120 minutos",
    price: "R$ 250",
    color: "from-[#FFD6BA] to-[#FFDCDC]",
  },
];

const ServiceList = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServiceList;
