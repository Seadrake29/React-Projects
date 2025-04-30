import React from "react";

const InfoCard = ({ icon, title, subtitle, link }) => {
  return (
    <div className="bg-white rounded-2xl group lg:py-8 w-full lg:h-[206px] shadow-md lg:shadow-none hover:scale-110 hover:bg-green-600 ease-in-out duration-300 transition cursor-pointer">
      <div className="border-r-none w-full lg:border-r-2 my-auto lg:px-12 h-[134px] group-hover:border-0 flex flex-col items-center justify-center text-center">
        <a href={link} className="flex flex-col items-center justify-center">
          <div className="text-4xl my-5 text-gray-500 group-hover:text-white transition">
            {icon}
          </div>
          <h3 className="text-mygreen text-2xl group-hover:text-white transition">
            <small>{title}</small>
          </h3>
          <p className="text-gray-500 group-hover:text-white transition">
            <small>{subtitle}</small>
          </p>
        </a>
      </div>
    </div>
  );
};

export default InfoCard;
