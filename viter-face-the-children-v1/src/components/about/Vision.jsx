import React from "react";

const Vision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="w-full lg:w-1/2 flex justify-center sm:justify-start">
          <img
            src="https://facethechildren.org/images/website/about-vision.webp"
            alt="About Banner"
            className="w-full max-w-md mx-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-xs text-textyellow uppercase mb-2">Vision</p>
          <h2 className="text-3xl sm:text-4xl text-primary leading-snug mb-6">
            Empowering Change, <br /> Inspiring Purpose
          </h2>
          <p className="text-sm">
            A nationwide network of child care centers committed <br /> to the
            advocacy, protection, care and development of <br /> abandoned,
            abused, or dangerously neglected children.
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 881px) and (max-width: 900px) {
          .stats-image {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Vision;
