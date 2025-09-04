import { KeyboardEvent, useId } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

const FAQItem = ({ question, answer, open, onToggle }: Props) => {
  const contentId = useId();

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        onKeyDown={onKey}
        aria-expanded={open}
        aria-controls={contentId}
        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-gray-800 pr-4">{question}</h3>
        {open ? <ChevronUp className="w-6 h-6 text-[#A5B68D] flex-shrink-0" aria-hidden="true" /> : <ChevronDown className="w-6 h-6 text-[#A5B68D] flex-shrink-0" aria-hidden="true" />}
      </button>

      {open && (
        <div id={contentId} className="px-8 pb-6" role="region" aria-label={`Resposta: ${question}`}>
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
