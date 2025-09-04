import ContactInfoGrid from "./ContactInfoGrid";
import ContactCTA from "./ContactCTA";
import MapEmbed from "./MapEmbed";
import { contactInfo } from "./contactData";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Estou aqui para esclarecer suas dúvidas e ajudá-la a dar o primeiro passo em direção ao seu bem-estar emocional.</p>
        </div>

        <ContactInfoGrid items={contactInfo} className="mb-12" />

        <div className="bg-gradient-to-br from-[#FFF2EB] to-[#FFE8CD] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ContactCTA
              title="Vamos conversar?"
              description="Se você tem dúvidas sobre como a terapia sistêmica pode ajudá-la, ou se deseja agendar uma primeira consulta, estou aqui para orientá-la. Entre em contato pelos canais disponíveis."
              phone="+5511999999999"
              phoneLabel="(11) 99999-9999"
              email="marisane@terapia.com.br"
              whatsapp="+5511999999999"
            />
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <MapEmbed
                className="rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977!2d-46.6341!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMDIuOSJX!5e0!3m2!1spt-BR!2sbr!4v1635959756717!5m2!1spt-BR!2sbr"
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
