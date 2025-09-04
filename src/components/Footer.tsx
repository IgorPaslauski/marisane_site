import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#C1CFA1]">Marisane Almeida</h3>
            <p className="text-gray-300 leading-relaxed">
              Terapeuta sistêmica especializada em constelação familiar, dedicada a promover cura e transformação através de uma abordagem humanizada e acolhedora.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Heart className="w-4 h-4 text-[#C1CFA1]" />
              <span className="text-sm">Cuidando de pessoas há mais de 8 anos</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#C1CFA1]">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-[#C1CFA1] transition-colors cursor-pointer">Terapia Individual</li>
              <li className="hover:text-[#C1CFA1] transition-colors cursor-pointer">Terapia Familiar</li>
              <li className="hover:text-[#C1CFA1] transition-colors cursor-pointer">Terapia de Casal</li>
              <li className="hover:text-[#C1CFA1] transition-colors cursor-pointer">Constelação Familiar</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#C1CFA1]">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C1CFA1]" />
                <span className="text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C1CFA1]" />
                <span className="text-sm">marisane@terapia.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C1CFA1] mt-0.5" />
                <span className="text-sm">
                  Rua das Flores, 123 - Sala 45
                  <br />
                  Centro, São Paulo - SP
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 Marisane Almeida - Terapia Sistêmica. Todos os direitos reservados.</p>
          <p className="text-gray-500 text-xs mt-2">Site desenvolvido com cuidado e atenção aos detalhes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
