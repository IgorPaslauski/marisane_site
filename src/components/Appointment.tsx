import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    'Terapia Individual',
    'Terapia Familiar',
    'Terapia de Casal',
    'Constelação Familiar'
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria integrado com um sistema de agendamento real
    alert('Solicitação de agendamento enviada! Entrarei em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="appointment" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Agende sua Consulta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dê o primeiro passo para sua transformação. Preencha o formulário 
            e entrarei em contato para confirmar seu agendamento.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium mb-2">
                  <User className="w-5 h-5 mr-2 text-[#A5B68D]" />
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#A5B68D] focus:border-transparent transition-all duration-200"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium mb-2">
                  <Mail className="w-5 h-5 mr-2 text-[#A5B68D]" />
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#A5B68D] focus:border-transparent transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium mb-2">
                  <Phone className="w-5 h-5 mr-2 text-[#A5B68D]" />
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#A5B68D] focus:border-transparent transition-all duration-200"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium mb-2">
                  <MessageSquare className="w-5 h-5 mr-2 text-[#A5B68D]" />
                  Tipo de Serviço
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#A5B68D] focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-[#A5B68D]" />
                  Data Preferida
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#A5B68D] focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium mb-2">
                  <Clock className="w-5 h-5 mr-2 text-[#A5B68D]" />
                  Horário Preferido
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#A5B68D] focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecione um horário</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <MessageSquare className="w-5 h-5 mr-2 text-[#A5B68D]" />
                Mensagem (Opcional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#A5B68D] focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Conte um pouco sobre o que gostaria de trabalhar..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#A5B68D] text-white font-semibold py-4 rounded-full hover:bg-[#8A9B73] transition-all duration-300 hover:scale-105 text-lg"
            >
              Solicitar Agendamento
            </button>
          </form>

          <div className="mt-8 p-6 bg-gradient-to-r from-[#FFF2EB] to-[#FFE8CD] rounded-2xl">
            <h3 className="font-semibold text-gray-800 mb-2">Como funciona?</h3>
            <p className="text-gray-600 text-sm">
              Após o envio do formulário, entrarei em contato em até 24 horas para 
              confirmar a disponibilidade e finalizar o agendamento. O pagamento 
              pode ser realizado no dia da consulta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;