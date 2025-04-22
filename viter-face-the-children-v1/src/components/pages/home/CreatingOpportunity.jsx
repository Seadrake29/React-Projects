import React from "react";

const CreatingOpportunity = () => {
  return (
    <section className="bg-white py-16 mt-[150px]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16 lg:gap-[150px]">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-xs text-textyellow uppercase mb-2">
            Creating Opportunity
          </p>
          <h1
            className="text-2xl sm:text-xl lg:text-[42.5px] font-semibold text-textblack mb-6 md:text-4xl"
            style={{ lineHeight: "1.3" }}
          >
            Making a difference for <br /> abandoned, abused, or dangerously
            <br />
            neglected children
          </h1>

          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-hover text-sm">
            Sponsor Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="./img/Home/h-banner.webp"
            alt="Children Graphic"
            className="max-w-full md:max-w-[500px] lg:max-w-[573px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CreatingOpportunity;
