import { useState } from "react";
import { residentData, nonResidentData } from "./SponsorData";
import { FaHouse, FaArrowRight } from "react-icons/fa6";
import SponsorModal from "../../partials/modal/SponsorModal";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SponsorSection() {
  const [activeTab, setActiveTab] = useState("resident");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChild, setSelectedChild] = useState(null);

  const currentData = activeTab === "resident" ? residentData : nonResidentData;

  const parsePercentage = (str) => {
    const num = parseFloat(str?.replace("%", ""));
    return isNaN(num) ? 0 : num;
  };

  const Card = ({ child }) => {
    if (!child || !child.name || !child.img || !child.sponsored) return null;

    const percentage = parsePercentage(child.sponsored);

    const openModal = () => {
      setSelectedChild(child);
      setIsModalOpen(true);
    };

    return (
      <div className="bg-white shadow overflow-hidden relative flex flex-col w-[265px] h-[360px] md:w-auto md:h-full">
        <div className="relative w-full overflow-hidden flex-1">
          <img
            src={child.img}
            alt={child.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 text-white p-3">
            <h3 className="text-base md:text-lg">{child.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <Link
                to={`/sponsor/${child.id}`}
                className="text-xs md:text-sm text-textyellow underline"
              >
                View Info
              </Link>
              <button
                onClick={openModal}
                className="flex items-center gap-1 bg-primary text-white px-3 py-2 rounded text-xs"
              >
                <span>Sponsor</span> <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div
          className="h-6 md:h-8 w-[265px] md:w-full relative overflow-hidden"
          style={{
            background: `linear-gradient(to right, #eb8500 ${percentage}%, #ffbd66 ${percentage}%)`,
          }}
        >
          <div className="absolute inset-0 flex items-center ml-2 text-white text-sm font-semibold">
            {child.sponsored} Sponsored
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 mt-[150px] pb-[233.5px] flex flex-col min-h-screen">
      <div className="xl:max-w-7xl md:max-w-[850px] max-w-[700px] mx-auto px-4 flex flex-col items-center gap-12 justify-center">
        <div className="flex justify-center gap-8 mb-6 md:mb-1 text-xl md:text-base font-semibold">
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
            <MdOutlineFamilyRestroom /> Non-Resident
          </button>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {activeTab === "resident"
              ? currentData.map((child, index, arr) => {
                  const isLast = index === arr.length - 1;
                  const isUnevenInLg = arr.length % 4 === 1;

                  if (isLast && isUnevenInLg) {
                    return (
                      <div
                        key={child.id}
                        className="lg:col-span-4 flex justify-center"
                      >
                        <Card child={child} />
                      </div>
                    );
                  }

                  return <Card key={child.id} child={child} />;
                })
              : currentData
                  .slice(0, 8)
                  .map((child) => <Card key={child.id} child={child} />)}
          </div>

          {activeTab === "nonResident" && currentData.length > 8 && (
            <div className="flex justify-center gap-6 mt-6">
              {currentData.slice(8, 11).map((child) => (
                <div key={child.id} className="w-full max-w-[260px]">
                  <Card child={child} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <SponsorModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        selectedChild={selectedChild}
      />
    </section>
  );
}
