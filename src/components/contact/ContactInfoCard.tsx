import type { ContactInfoItem } from "./contactData";

type Props = {
  item: ContactInfoItem;
};

const ContactInfoCard = ({ item }: Props) => {
  const Icon = item.icon;
  return (
    <div className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center`}>
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
        <Icon className="w-6 h-6 text-[#A5B68D]" />
      </div>
      <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
      <p className="text-gray-700 text-sm whitespace-pre-line">{item.content}</p>
    </div>
  );
};

export default ContactInfoCard;
