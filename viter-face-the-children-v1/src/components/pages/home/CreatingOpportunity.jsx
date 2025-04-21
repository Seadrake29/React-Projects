import React from "react";

const CreatingOpportunity = () => {
  return (
    <section className="bg-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:max-w-xl text-left lg:text-left">
          <p className="text-xs text-orange-500 uppercase mb-2">
            Creating Opportunity
          </p>
          <h1
            className="lg:text-5xl text-2xl sm:text-xl font-semibold text-gray-700 mb-6"
            style={{ lineHeight: "1.2" }}
          >
            Making a difference for abandoned, abused, or dangerously
            <br className="hidden sm:inline" />
            neglected children
          </h1>

          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-hover text-sm">
            Sponsor Now
          </button>
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <img
            src="https://facethechildren.org/images/website/h-banner.webp"
            alt="Children Graphic"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CreatingOpportunity;
