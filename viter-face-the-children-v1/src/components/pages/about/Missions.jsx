import React from "react";

const Missions = () => {
  return (
    <section className="py-16 bg-white mb-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-[200px]">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="https://facethechildren.org/images/website/about-mission.webp"
            alt="About Banner"
            className="w-[90%] max-w-[500px] md:max-w-[530px] lg:max-w-[560px] object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 text-left">
          <p className="text-xs text-textyellow uppercase mb-2">Mission</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary leading-snug mb-6">
            Transforming Dreams into Reality
          </h2>
          <p
            className="text-sm md:text-base text-[#3a3b36] max-w-[95%] leading-[2]"
            style={{ lineHeight: "1.8" }}
          >
            FTC mission is to make a difference in the lives of street children
            by rescuing, protecting, and caring for those that are abandoned,
            abused, or dangerously neglected (AADN). We are making a difference
            in the lives of children in need through child care programs and
            centers that provide full time protection and care, academic and
            spiritual development, and dedicated staff committed to the long
            term welfare and development of AADN children. We are committed to
            doing all that is necessary to guide them into adulthood as young
            men and women who may lead successful adult lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Missions;
