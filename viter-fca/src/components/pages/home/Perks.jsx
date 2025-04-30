import React from "react";

const Perks = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('/images/home/fca-bg-grayscale.jpg')",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 gap-[300px]">
        <div className="flex flex-col items-center">
          <img
            src="/images/home/FCA-Banner-ezgif.com-gif-to-webp-converter.webp"
            alt="Hero 1"
            className="w-372.11 h-378.58 object-cover mb-6"
          />
        </div>

        <div className="flex flex-col space-y-12 font-raleway">
          {[
            "Beautiful, Spacious Facilities",
            "Social Emotional Learning",
            "Holistic Development",
            "Highly Skilled and Caring Faculty",
          ].map((text, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <img
                src="/images/home/fca-Check.png"
                alt="Check"
                className="w-6 h-6"
              />
              <span className="text-[20.8px] font-semibold">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perks;
