import React from "react";
import ServiceList from "./ServiceList";

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Serviços Oferecidos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofereço diferentes modalidades terapêuticas para atender suas necessidades específicas, sempre com uma abordagem sistêmica e humanizada.
          </p>
        </div>

        <ServiceList />

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Todos os atendimentos são realizados de forma presencial em consultório acolhedor e seguro.</p>
          <a href="#appointment" className="inline-flex items-center px-8 py-4 bg-[#A5B68D] text-white font-semibold rounded-full hover:bg-[#8A9B73] transition-all duration-300 hover:scale-105">
            Escolher Serviço e Agendar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
