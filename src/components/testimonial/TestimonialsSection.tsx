import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialsData";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Depoimentos" subtitle="Conheça as experiências de pessoas que encontraram transformação através da terapia sistêmica e constelação familiar." />
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
