import { useState } from "react";
import { User, Mail, Phone, MessageSquare, Calendar, Clock } from "lucide-react";
import { buildWaLink, toE164BR } from "../../lib/whatsapp";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

type Props = {
  services: string[];
  timeSlots: string[];
};

export default function AppointmentForm({ services, timeSlots }: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [copyOk, setCopyOk] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(s => ({ ...s, [name]: value }));
  };

  const isValid = () => formData.name.trim().length >= 2 && /\S+@\S+\.\S+/.test(formData.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setCopyOk(false);

    try {
      if (!isValid()) {
        setError("Preencha nome e e-mail válidos para continuar.");
        return;
      }

      const toNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
      if (!toNumber) {
        setError("VITE_WHATSAPP_NUMBER não configurado.");
        return;
      }

      const clientPhone = toE164BR(formData.phone) ? `+${toE164BR(formData.phone)!}` : formData.phone;

      const url = buildWaLink(
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: clientPhone,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          message: formData.message,
          source: "site/agendamento",
        },
        toNumber
      );

      // Abre o WhatsApp (mobile = app; desktop = web/desktop)
      window.location.href = url;

      // Opcional: window.plausible?.("appointment_whatsapp_click");
    } catch (err: any) {
      setError(err.message ?? "Não foi possível abrir o WhatsApp.");
      try {
        await navigator.clipboard.writeText(
          [
            "Copie e cole no WhatsApp:",
            `Nome: ${formData.name}`,
            `E-mail: ${formData.email}`,
            `Telefone: ${formData.phone}`,
            `Serviço: ${formData.service}`,
            `Data: ${formData.date}`,
            `Horário: ${formData.time}`,
            formData.message ? `Mensagem: ${formData.message}` : "",
          ].join("\n")
        );
        setCopyOk(true);
      } catch {
        /* ignore */
      }
    }
  };

  return (
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
            autoComplete="name"
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
            autoComplete="email"
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
            inputMode="tel"
            autoComplete="tel"
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
            {services.map(service => (
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
            min={new Date().toISOString().split("T")[0]}
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
            {timeSlots.map(time => (
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

      {error && <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>}
      {copyOk && <div className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-700">Não conseguimos abrir o WhatsApp. A mensagem foi copiada para a área de transferência.</div>}

      <button
        type="submit"
        disabled={!isValid()}
        className="w-full bg-[#A5B68D] text-white font-semibold py-4 rounded-full hover:bg-[#8A9B73] transition-all duration-300 hover:scale-105 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        Solicitar Agendamento (WhatsApp)
      </button>
    </form>
  );
}
