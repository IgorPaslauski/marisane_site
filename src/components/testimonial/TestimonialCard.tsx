import { Quote } from "lucide-react";
import RatingStars from "./RatingStars";
import type { Testimonial } from "./testimonialsData";

const TestimonialCard = ({ name, text, rating }: Testimonial) => {
  return (
    <article className="bg-gradient-to-br from-[#FFF2EB] to-[#FFE8CD] p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300" aria-label={`Depoimento de ${name}`}>
      <header className="flex items-center mb-6">
        <Quote className="w-8 h-8 text-[#A5B68D] mr-4" aria-hidden="true" />
        <RatingStars rating={rating} />
      </header>
      <p className="text-gray-700 leading-relaxed mb-6 italic">"{text}"</p>
      <footer className="text-right">
        <p className="font-semibold text-gray-800">{name}</p>
      </footer>
    </article>
  );
};

export default TestimonialCard;
