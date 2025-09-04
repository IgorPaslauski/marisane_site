import React from "react";

const tags = [
  { label: "Terapia Sistêmica", color: "#FFDCDC" },
  { label: "Constelação Familiar", color: "#FFE8CD" },
  { label: "Terapia Individual", color: "#C1CFA1" },
  { label: "Terapia de Casal", color: "#FFD6BA" },
];

const AboutTags = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {tags.map((tag, idx) => (
        <span key={idx} className="px-4 py-2 rounded-full text-sm font-medium text-gray-700" style={{ backgroundColor: tag.color }}>
          {tag.label}
        </span>
      ))}
    </div>
  );
};

export default AboutTags;
