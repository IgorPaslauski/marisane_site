// src/lib/whatsapp.ts
export type AppointmentPayload = {
  name: string;
  email?: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
  message?: string;
  source?: string;
};

const onlyDigits = (s: string) => s.replace(/\D+/g, "");

export function toE164BR(phoneRaw?: string): string | null {
  if (!phoneRaw) return null;
  let d = onlyDigits(phoneRaw);
  while (d.startsWith("0")) d = d.slice(1);
  if (d.startsWith("55")) return d;
  if (d.length === 10 || d.length === 11) return `55${d}`;
  if (d.length >= 8 && d.length <= 13) return `55${d}`;
  return null;
}

export function buildWhatsAppMessage(p: AppointmentPayload) {
  const lines = [
    `*Novo agendamento*`,
    `Nome: ${p.name || "-"}`,
    `E-mail: ${p.email || "-"}`,
    `Telefone: ${p.phone || "-"}`,
    `Serviço: ${p.service || "-"}`,
    `Data: ${p.date ? (new Date(p.date).toString() !== "Invalid Date" ? new Date(p.date).toLocaleDateString() : p.date) : "-"}`,
    `Horário: ${p.time || "-"}`,
    p.message ? `Mensagem: ${p.message}` : undefined,
    p.source ? `Origem: ${p.source}` : undefined,
  ].filter(Boolean) as string[];
  return lines.join("\n");
}

export function buildWaLink(payload: AppointmentPayload, toNumberE164?: string) {
  const number = toNumberE164 || import.meta.env.VITE_WHATSAPP_NUMBER;
  if (!number) throw new Error("VITE_WHATSAPP_NUMBER não configurado.");
  const msg = encodeURIComponent(buildWhatsAppMessage(payload));
  return `https://wa.me/${number}?text=${msg}`;
}
