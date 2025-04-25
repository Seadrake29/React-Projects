import React, { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import ChildCard from "./ChildCard";

export default function SponsorSection() {
  const [view, setView] = useState("resident");

  return (
    <section className="py-12 mt-[150px] pb-[233.5px] flex flex-col min-h-screen">
      <div className="xl:max-w-7xl mx-auto px-4 flex flex-col items-center gap-12 justify-center">
        <div className="flex justify-center gap-8 mb-6 md:mb-1 text-xl md:text-base font-semibold">
          <button
            onClick={() => setView("resident")}
            className={`flex items-center gap-2 ${
              view === "resident"
                ? "text-gray-600 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
          >
            <FaHouse /> Resident
          </button>
          <button
            onClick={() => setView("nonResident")}
            className={`flex items-center gap-2 ${
              view === "nonResident"
                ? "text-gray-600 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
          >
            <MdOutlineFamilyRestroom /> Non-Resident
          </button>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {view === "resident" && (
            <>
              <ChildCard
                img="/img/Sponsor/John-luke-b.jpg"
                name="John Luke B"
                percent={0.0}
              />
              <ChildCard
                img="/img/Sponsor/ala-d.jpg"
                name="Ala D"
                percent={5.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-angelica.jpg"
                name="Angelita A"
                percent={5.0}
              />
              <ChildCard
                img="/img/Sponsor/minos-d.jpg"
                name="Minos D"
                percent={5.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-angelica.jpg"
                name="Angelita A"
                percent={5.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-mary-joy.jpg"
                name="Mary Joy C."
                percent={17.5}
              />
              <ChildCard
                img="/img/Sponsor/opt-leam.jpg"
                name="Carl Leam N."
                percent={25.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-charisse.jpg"
                name="Charissa N."
                percent={25.0}
              />
              <ChildCard
                img="/img/Sponsor/chelsey-b.jpg"
                name="Chelsey B"
                percent={27.5}
              />
              <ChildCard
                img="/img/Sponsor/opt-shiela.jpg"
                name="Shiela Mariel S"
                percent={35.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-CIELITAHINE.jpg"
                name="Cielitahine D"
                percent={37.5}
              />
              <ChildCard
                img="/img/Sponsor/opt-junior.jpg"
                name="Junior N"
                percent={40.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-milquizedec.jpg"
                name="Melquizedec D"
                percent={40.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-keren.jpg"
                name="Karen D."
                percent={45.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-mary-ann.jpg"
                name="Mary Ann V"
                percent={50.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-mikaela.jpg"
                name="Michaela C"
                percent={50.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-sarah.jpg"
                name="Sara A"
                percent={50.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-ricka.jpg"
                name="Ricka"
                percent={52.5}
              />
              <ChildCard
                img="/img/Sponsor/opt-alden.jpg"
                name="Alden D."
                percent={57.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-andrea.jpg"
                name="Andrea C"
                percent={62.5}
              />
              <div className="md:col-span-3 xl:col-span-full flex justify-center xl:flex xl:justify-center">
                <ChildCard
                  img="/img/Sponsor/opt-cornilito.jpg"
                  name="Cornelito D."
                  percent={100.0}
                />
              </div>
            </>
          )}

          {view === "nonResident" && (
            <>
              <ChildCard
                img="/img/Sponsor/trixie.jpg"
                name="Trixie Mae N"
                percent={37.5}
              />
              <ChildCard
                img="/img/Sponsor/danica.jpg"
                name="Danica V"
                percent={40.0}
              />
              <ChildCard
                img="/img/Sponsor/rosemae.jpg"
                name="Rose Mae N"
                percent={40.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-rachelle.jpg"
                name="Rachelle M"
                percent={42.0}
              />
              <ChildCard
                img="/img/Sponsor/opt-don.jpg"
                name="Richard T"
                percent={45.0}
              />
              <ChildCard
                img="/img/Sponsor/marygrace.jpg"
                name="Mary Grace V"
                percent={50.0}
              />
              <ChildCard
                img="/img/Sponsor/eugene.jpg"
                name="Eugene Lance D"
                percent={52.5}
              />
              <ChildCard
                img="/img/Sponsor/opt-gladays.jpg"
                name="Gladys T"
                percent={57.5}
              />
              <ChildCard
                img="/img/Sponsor/julieann.jpg"
                name="Julie Ann T"
                percent={60.0}
              />
              <div className="md:col-span-3 xl:col-span-full flex justify-center gap-5">
                <ChildCard
                  img="/img/Sponsor/opt-mark.jpg"
                  name="Mark John B"
                  percent={85.0}
                />
                <ChildCard
                  img="/img/Sponsor/opt-marian.jpg"
                  name="Marian Nhicole B"
                  percent={100.0}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
