import React from "react";

const AdmissionMenu = ({ selected, onSelect }) => {
  const items = ["Playschool", "Pre-Elementary", "Elementary", "Junior High"];

  return (
    <div className="space-y-4 text-left text-lg text-gray-600">
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

export default AdmissionMenu;
