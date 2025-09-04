import React from "react";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
  price: string;
  color: string;
};

const ServiceCard = ({ icon: Icon, title, description, duration, price, color }: Service) => {
  return (
    <div className={`bg-gradient-to-br ${color} p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
            <Icon className="w-6 h-6 text-[#A5B68D]" />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Duração:</span> {duration}
            </div>
            <div className="text-xl font-bold text-[#A5B68D]">{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
