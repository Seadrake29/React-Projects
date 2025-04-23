import React, { useState } from "react";
import givingOptions from "./DonateData";
import { MdArrowForward } from "react-icons/md";
import DonateModal from "../../partials/modal/DonateModal";
import { useNavigate } from "react-router-dom";

const GivingOptions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const navigate = useNavigate();

  const openModal = (title) => {
    if (title === "Children Sponsorship") {
      navigate("/sponsor");
    } else {
      setSelectedTitle(title);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleReadMore = (title) => {
    if (title === "Children Sponsorship") {
      navigate("/donate/children-sponsorship");
    } else if (title === "Feeding Program") {
      navigate("/donate/feeding-program");
    } else if (title === "General Donation") {
      navigate("/donate/general-donation");
    }
  };

  return (
    <section className="py-16 mt-[168px] mb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-5">
          {givingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white shadow overflow-hidden flex flex-col w-[268px] min-h-[480px]"
            >
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-90 object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base mb-3 text-[#3a3b36] font-semibold">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-xs flex-1 mt-2 line-clamp-4">
                  {option.description}
                </p>
                <div className="flex flex-col gap-2 mt-4">
                  <button
                    onClick={() => handleReadMore(option.title)}
                    className="text-textyellow flex items-center gap-2 text-[16px]"
                  >
                    <span className="w-4 h-4 flex items-center justify-center rounded-full border-2 border-textyellow text-textyellow">
                      <MdArrowForward className="text-xs font-bold" />
                    </span>
                    Read More
                  </button>
                </div>
                <div className="mt-auto pt-4">
                  <button
                    onClick={() => openModal(option.title)}
                    className="bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-opacity-90 transition"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DonateModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={selectedTitle}
      />
    </section>
  );
};

export default GivingOptions;
