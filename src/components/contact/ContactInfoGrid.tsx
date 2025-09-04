import ContactInfoCard from "./ContactInfoCard";
import type { ContactInfoItem } from "./contactData";

type Props = {
  items: ContactInfoItem[];
  className?: string;
};

const ContactInfoGrid = ({ items, className }: Props) => {
  return (
    <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${className ?? ""}`}>
      {items.map((info, idx) => (
        <ContactInfoCard key={idx} item={info} />
      ))}
    </div>
  );
};

export default ContactInfoGrid;
