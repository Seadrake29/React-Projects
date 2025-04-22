import React from "react";

const Transform = () => {
  return (
    <section className="py-16 lg:mt-[150px] mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col mt-15 lg:flex-row items-center gap-[150px]">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="./img/About/about-banner.webp"
            alt="About Banner"
            className="lg:w-[500px] lg:max-w-[600px] w-[300px]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left sm:text-left">
          <p className="text-xs text-textyellow uppercase mb-2">
            from street to smiles
          </p>
          <h2
            className="lg:text-5xl text-2xl lg:w-[800px] font-semibold sm:text-4xl text-[#3a3b36] mb-10"
            style={{ lineHeight: "1.4" }}
          >
            Transform lives from <br />
            the harsh reality of the <br /> streets to the warmth and comfort of
            genuine smiles
          </h2>

          <button className="bg-primary text-white px-3 py-2 rounded hover:bg-hover text-xs">
            Sponsor Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transform;
