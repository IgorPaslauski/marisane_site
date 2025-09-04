import { Phone, Mail, MessageCircle } from "lucide-react";

type Props = {
  title: string;
  description: string;
  phone: string; // ex: +5511999999999
  phoneLabel?: string; // ex: (11) 99999-9999
  email: string;
  whatsapp?: string; // ex: +5511999999999
};

const ContactCTA = ({ title, description, phone, phoneLabel, email, whatsapp }: Props) => {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>

      <div className="space-y-4">
        <a href={`tel:${phone}`} className="flex items-center space-x-3 text-gray-700 hover:text-[#A5B68D] transition-colors duration-200">
          <Phone className="w-5 h-5" />
          <span>{phoneLabel ?? phone}</span>
        </a>

        <a href={`mailto:${email}`} className="flex items-center space-x-3 text-gray-700 hover:text-[#A5B68D] transition-colors duration-200">
          <Mail className="w-5 h-5" />
          <span>{email}</span>
        </a>

        {whatsapp && (
          <a
            href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-700 hover:text-[#A5B68D] transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactCTA;
