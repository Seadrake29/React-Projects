import React from "react";

const Images = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-4 py-12 font-raleway">
      <div className="text-[80px] font-thin text-center my-20">
        <h2>Gallery</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center border-b border-black pb-20">
        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-[470px] h-[315px] overflow-hidden">
            <img
              src="/images/gallery/FCA-elementary-Performace.jpg"
              alt="Events"
              className="w-full h-full object-cover object-center grayscale transition-transform duration-500 ease-in-out hover:scale-125 hover:grayscale-0"
            />
          </div>
          <span className="mt-5 text-2xl font-semibold">Events</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-[470px] h-[315px] overflow-hidden">
            <img
              src="/images/gallery/FCA-Playschool.jpg"
              alt="Playschool"
              className="w-full h-full object-cover object-center grayscale transition-transform duration-500 ease-in-out hover:scale-125 hover:grayscale-0"
            />
          </div>
          <span className="mt-5 text-2xl font-semibold">Playschool</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-[470px] h-[315px] overflow-hidden">
            <img
              src="/images/gallery/facilities-fca.jpg"
              alt="Facilities"
              className="w-full h-full object-cover object-center grayscale transition-transform duration-500 ease-in-out hover:scale-125 hover:grayscale-0"
            />
          </div>
          <span className="mt-5 text-2xl font-semibold">Facilities</span>
        </div>
      </div>
    </section>
  );
};

export default Images;
