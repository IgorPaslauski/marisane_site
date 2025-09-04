import AppointmentForm from "./AppointmentForm";

const Appointment = () => {
  const services = ["Terapia Individual", "Terapia Familiar", "Terapia de Casal", "Constelação Familiar"];

  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

  return (
    <section id="appointment" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Agende sua Consulta</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Dê o primeiro passo para sua transformação. Preencha o formulário e entrarei em contato para confirmar seu agendamento.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          <AppointmentForm services={services} timeSlots={timeSlots} />

          <div className="mt-8 p-6 bg-gradient-to-r from-[#FFF2EB] to-[#FFE8CD] rounded-2xl">
            <h3 className="font-semibold text-gray-800 mb-2">Como funciona?</h3>
            <p className="text-gray-600 text-sm">
              Após o envio do formulário, entrarei em contato em até 24 horas para confirmar a disponibilidade e finalizar o agendamento. O pagamento pode ser realizado no dia da consulta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
