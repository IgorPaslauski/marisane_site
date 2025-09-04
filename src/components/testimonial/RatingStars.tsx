import { Star } from "lucide-react";

type Props = {
  rating: number;
};

const RatingStars = ({ rating }: Props) => {
  const clamped = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex space-x-1" aria-label={`${clamped} de 5 estrelas`}>
      {Array.from({ length: clamped }).map((_, i) => (
        <Star key={`f-${i}`} className="w-5 h-5 fill-[#A5B68D] text-[#A5B68D]" />
      ))}
      {Array.from({ length: 5 - clamped }).map((_, i) => (
        <Star key={`e-${i}`} className="w-5 h-5 text-[#A5B68D]" />
      ))}
    </div>
  );
};

export default RatingStars;
