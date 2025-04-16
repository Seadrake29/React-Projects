import React from "react";

const Transform = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center sm:justify-start">
          <img
            src="https://facethechildren.org/images/website/about-banner.webp"
            alt="About Banner"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left sm:text-left">
          <p className="text-xs text-textyellow uppercase mb-2">
            from street to smiles
          </p>
          <h2 className="text-3xl sm:text-4xl text-gray-700 leading-snug mb-6">
            Transform lives from <br />
            the harsh reality of the <br /> streets to the warmth and comfort of
            genuine smiles
          </h2>

          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-hover text-sm">
            Sponsor Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transform;
