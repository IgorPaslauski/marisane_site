import FAQList from "./FAQList";
import { faqs } from "./faqData";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
    {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
  </div>
);

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Perguntas Frequentes" subtitle="Tire suas dúvidas sobre terapia sistêmica e constelação familiar" />
        <FAQList items={faqs} />
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Não encontrou a resposta que procurava?</p>
          <a href="#contact" className="inline-flex items-center px-8 py-4 bg-[#A5B68D] text-white font-semibold rounded-full hover:bg-[#8A9B73] transition-all duration-300 hover:scale-105">
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
