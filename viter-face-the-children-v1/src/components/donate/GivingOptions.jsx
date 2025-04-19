import React from "react";
import givingOptions from "./DonateData";
import { MdArrowForward } from "react-icons/md";

const GivingOptions = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {givingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white shadow rounded overflow-hidden flex flex-col w-80 min-h-[520px]"
            >
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-100 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">{option.title}</h3>
                <p className="text-gray-600 flex-1 mt-2">
                  {option.description}
                </p>

                <div className="flex flex-col gap-2 mt-4">
                  <button className="text-textyellow flex items-center gap-2">
                    <span className="w-4 h-4 flex items-center justify-center rounded-full border-2 border-textyellow text-textyellow">
                      <MdArrowForward className="text-xs font-bold" />
                    </span>
                    Read More
                  </button>
                </div>

                <div className="mt-auto pt-6">
                  <button className="bg-primary text-white text-sm px-4 py-1.5 rounded hover:bg-opacity-90 transition">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GivingOptions;
