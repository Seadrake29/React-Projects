import { useState } from "react";
import { useParams } from "react-router-dom";
import { residentData, nonResidentData } from "./SponsorData";
import SponsorModal from "../../partials/modal/SponsorModal";

import Header from "../home/Header";
import Navigation from "../home/Navigation";
import Gifts from "../about/Gifts";
import Footer from "../home/Footer";

export default function ChildDetails() {
  const { id } = useParams();
  const allChildren = [...residentData, ...nonResidentData];
  const child = allChildren.find((c) => c.id === Number(id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!child) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <Navigation />
        <div className="flex-grow flex items-center justify-center text-center mt-24">
          Child not found
        </div>
        <Gifts />
        <Footer />
      </div>
    );
  }

  const percentage = parseFloat(child.sponsored.replace("%", ""));

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <section className="flex-grow py-8 mt-20 md:py-12 md:mt-24 pb-[180px] md:pb-[200px] xl:pb-[233.5px]">
        <div className="max-w-full md:max-w-[850px] xl:max-w-7xl mx-auto px-4 flex flex-col items-center gap-8 md:gap-12 justify-center">
          <div className="w-full flex justify-center">
            <div className="bg-white rounded flex flex-col md:flex-row w-full max-w-md md:max-w-2xl xl:max-w-4xl">
              <div className="relative self-center md:self-stretch w-[250px] h-[380px]">
                <img
                  src={child.img}
                  alt={child.name}
                  className="w-full h-full object-cover rounded-t-md md:rounded-tr-none md:rounded-l-md"
                />
                <div
                  className="absolute bottom-0 left-0 h-8 w-full text-white text-sm font-semibold flex items-center justify-start pl-4"
                  style={{
                    background: `linear-gradient(to right, #eb8500 ${percentage}%, #ffbd66 ${percentage}%)`,
                  }}
                >
                  {child.sponsored} – Sponsored
                </div>
              </div>

              <div className="p-4 md:p-6 flex-1 text-left">
                <h2 className="text-lg md:text-xl font-semibold mb-2 text-textblack">
                  {child.name}
                </h2>
                <hr className="py-2 opacity-30" />
                <p className="text-sm md:text-base">
                  <span className="font-medium">Age:</span> {child.age ?? "N/A"}
                </p>
                <p className="text-sm md:text-base">
                  <span className="font-medium">Birthday:</span>{" "}
                  {child.birthday ?? "N/A"}
                </p>

                <h4 className="mt-4 font-semibold text-gray-700 text-sm md:text-base">
                  My Story
                </h4>
                <p className="text-sm text-gray-700 mt-1">
                  {child.story ?? "N/A"}
                </p>

                <button
                  onClick={openModal}
                  className="bg-primary text-white text-xs md:text-sm px-6 py-2 rounded-md hover:bg-opacity-90 transition mt-4"
                >
                  Sponsor Now
                </button>
              </div>
            </div>
          </div>

          <SponsorModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            selectedChild={child}
          />
        </div>
      </section>

      <Gifts />
      <Footer />
    </div>
  );
}
