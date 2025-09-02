import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#A5B68D]">
                <Heart size={20} />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Terapia Sistêmica & Constelação Familiar
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Encontre seu
                <span className="text-[#A5B68D] block">
                  equilíbrio interior
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sou Marisane Almeida, terapeuta sistêmica especializada em constelação familiar. 
                Ajudo pessoas a encontrarem harmonia em suas relações e a descobrirem caminhos 
                para uma vida mais plena e significativa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#A5B68D] text-white font-semibold rounded-full hover:bg-[#8A9B73] transition-all duration-300 hover:scale-105"
              >
                Agendar Consulta
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#A5B68D] text-[#A5B68D] font-semibold rounded-full hover:bg-[#A5B68D] hover:text-white transition-all duration-300"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#FFDCDC] to-[#FFE8CD] rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Marisane Almeida - Terapeuta Sistêmica"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#A5B68D]">500+</div>
                  <div className="text-sm text-gray-600">Pessoas ajudadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;