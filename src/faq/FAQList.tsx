import { useState } from "react";
import FAQItem from "./FAQItem";
import type { FAQ } from "./faqData";

type Props = {
  items: FAQ[];
  /** Se true, permite múltiplos itens abertos. Default: false (apenas um aberto). */
  allowMultiple?: boolean;
};

const FAQList = ({ items, allowMultiple = false }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    if (allowMultiple) {
      const next = new Set(openSet);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      setOpenSet(next);
    } else {
      setOpenIndex(openIndex === idx ? null : idx);
    }
  };

  const isOpen = (idx: number) => (allowMultiple ? openSet.has(idx) : openIndex === idx);

  return (
    <div className="space-y-4">
      {items.map((faq, idx) => (
        <FAQItem key={idx} index={idx} question={faq.question} answer={faq.answer} open={isOpen(idx)} onToggle={() => toggle(idx)} />
      ))}
    </div>
  );
};

export default FAQList;
