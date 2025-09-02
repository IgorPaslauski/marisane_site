import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua das Flores, 123 - Sala 45\nCentro, São Paulo - SP',
      color: 'from-[#FFDCDC] to-[#FFF2EB]'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999',
      color: 'from-[#FFE8CD] to-[#FFD6BA]'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'marisane@terapia.com.br',
      color: 'from-[#C1CFA1] to-[#A5B68D]'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sexta: 09h às 18h\nSábado: 09h às 13h',
      color: 'from-[#FFD6BA] to-[#FFDCDC]'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estou aqui para esclarecer suas dúvidas e ajudá-la a dar o primeiro 
            passo em direção ao seu bem-estar emocional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${info.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center`}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <info.icon className="w-6 h-6 text-[#A5B68D]" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-700 text-sm whitespace-pre-line">
                {info.content}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#FFF2EB] to-[#FFE8CD] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Vamos conversar?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Se você tem dúvidas sobre como a terapia sistêmica pode ajudá-la, 
                ou se deseja agendar uma primeira consulta, estou aqui para 
                orientá-la. Entre em contato pelos canais disponíveis.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:+5511999999999"
                  className="flex items-center space-x-3 text-gray-700 hover:text-[#A5B68D] transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>(11) 99999-9999</span>
                </a>
                <a
                  href="mailto:marisane@terapia.com.br"
                  className="flex items-center space-x-3 text-gray-700 hover:text-[#A5B68D] transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>marisane@terapia.com.br</span>
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-[#A5B68D] transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977!2d-46.6341!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMDIuOSJX!5e0!3m2!1spt-BR!2sbr!4v1635959756717!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;