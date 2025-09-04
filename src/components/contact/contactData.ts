import { MapPin, Phone, Mail, Clock, LucideIcon } from "lucide-react";

export type ContactInfoItem = {
  icon: LucideIcon;
  title: string;
  content: string;
  color: string; // gradient tailwind classes (from.. to..)
};

export const contactInfo: ContactInfoItem[] = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rua das Flores, 123 - Sala 45\nCentro, São Paulo - SP",
    color: "from-[#FFDCDC] to-[#FFF2EB]",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 99999-9999",
    color: "from-[#FFE8CD] to-[#FFD6BA]",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "marisane@terapia.com.br",
    color: "from-[#C1CFA1] to-[#A5B68D]",
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    content: "Segunda a Sexta: 09h às 18h\nSábado: 09h às 13h",
    color: "from-[#FFD6BA] to-[#FFDCDC]",
  },
];
