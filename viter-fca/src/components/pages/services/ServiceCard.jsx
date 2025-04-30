import React from "react";

const ServiceCard = ({ img, icon, title, description }) => {
  return (
    <div className="flex items-center bg-mygray p-6 shadow-md w-full h-[380px]">
      <img
        src={img}
        alt={title}
        className="w-[346px] h-[346px] object-cover mr-8"
      />
      <div className="flex flex-col justify-center -mt-10 ml-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-lime w-6 h-6">{icon}</span>
          <h3 className="text-lime text-4xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-700 text-xl leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
