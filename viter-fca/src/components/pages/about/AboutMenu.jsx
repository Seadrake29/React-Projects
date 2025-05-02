import React from "react";

const AboutMenu = ({ selected, onSelect }) => {
  const items = [
    "The Founders",
    "The History of FCA",
    "Mission & Vision",
    "Core Values",
  ];

  return (
    <div className="space-y-4 text-center xl:text-left text-lg text-gray-600">
      {items.map((item) => (
        <div
          key={item}
          onClick={() => onSelect(item)}
          className={`cursor-pointer hover:text-green-600 ${
            selected === item ? "text-green-700 underline" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default AboutMenu;
