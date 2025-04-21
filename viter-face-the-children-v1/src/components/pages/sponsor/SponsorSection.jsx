import { useState } from "react";
import { residentData, nonResidentData } from "./SponsorData";
import { FaHouse, FaPeopleGroup, FaArrowRight } from "react-icons/fa6";
import SponsorModal from "../../partials/modal/SponsorModal";

export default function SponsorSection() {
  const [activeTab, setActiveTab] = useState("resident");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChild, setSelectedChild] = useState(null);

  const currentData = activeTab === "resident" ? residentData : nonResidentData;

  const parsePercentage = (str) => parseFloat(str.replace("%", ""));

  const Card = ({ child }) => {
    const percentage = parsePercentage(child.sponsored);

    const openModal = () => {
      setSelectedChild(child);
      setIsModalOpen(true);
    };

    return (
      <div className="bg-white shadow overflow-hidden relative flex flex-col h-full">
        <div className="relative w-full overflow-hidden flex-1">
          <img
            src={child.img}
            alt={child.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
            <h3 className="text-lg ">{child.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-textyellow mb-0">View Info</p>
              <button
                onClick={openModal}
                className="flex items-center gap-1 bg-primary text-white px-3 py-1 rounded text-sm"
              >
                <span>Sponsor</span> <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div
          className="h-8 w-full relative overflow-hidden"
          style={{
            background: `linear-gradient(to right, #eb8500 ${percentage}%, #ffbd66 ${percentage}%)`,
          }}
        >
          <div className="absolute inset-0 flex items-center ml-2 text-white text-md font-semibold">
            {child.sponsored} Sponsored
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 mt-[150px]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-12 justify-center">
        <div className="flex justify-center gap-8 mb-6 text-xl font-semibold">
          <button
            onClick={() => setActiveTab("resident")}
            className={`flex items-center gap-2 ${
              activeTab === "resident"
                ? "text-gray-600 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
          >
            <FaHouse /> Resident
          </button>
          <button
            onClick={() => setActiveTab("nonResident")}
            className={`flex items-center gap-2 ${
              activeTab === "nonResident"
                ? "text-gray-600 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
          >
            <FaPeopleGroup /> Non-Resident
          </button>
        </div>

        {activeTab === "resident" ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
              {currentData.slice(0, -1).map((child) => (
                <Card key={child.id} child={child} />
              ))}
            </div>

            {currentData.length % 4 === 1 ? (
              <div className="flex justify-center w-full -mt-8">
                <div className="w-[300px]">
                  <Card child={currentData[currentData.length - 1]} />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-6">
                <Card child={currentData[currentData.length - 1]} />
              </div>
            )}
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
              {currentData.slice(0, 8).map((child) => (
                <Card key={child.id} child={child} />
              ))}
            </div>

            <div className="flex justify-center gap-6 w-full -mt-8">
              {currentData.slice(8, 11).map((child) => (
                <div className="w-full max-w-[260px]">
                  <Card key={child.id} child={child} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <SponsorModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        selectedChild={selectedChild} // Pass the selected child data to the modal
      />
    </section>
  );
}