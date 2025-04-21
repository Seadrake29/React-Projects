import React from "react";

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:gap-60">
        <div className="w-full lg:w-1/2 flex justify-center sm:justify-start">
          <img
            src="https://facethechildren.org/images/website/h-about.webp"
            alt="Children Graphic"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 text-left lg:text-left">
          <p className="text-xs text-orange-500 uppercase mb-2">Who we are</p>
          <h2 className="text-3xl sm:text-4xl text-primary leading-snug mb-6">
            Let's Share to Change a Life Today
          </h2>
          <p className="text-gray-700 leading-relaxed">
            When we come together as a community, our collective efforts can
            lead to monumental changes. By fostering a culture of sharing, we
            not only help those in immediate need but also build a foundation of
            support and compassion that benefits everyone.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="text-left lg:text-left">
              <h3 className="text-textyellow text-4xl font-semi-bold">20+</h3>
              <small className="text-sm text-gray-600">Years Experience</small>
            </div>
            <div className="text-left lg:text-left">
              <h3 className="text-textyellow text-4xl font-semi-bold">10+</h3>
              <small className="text-sm text-gray-600">Volunteers</small>
            </div>
            <div className="text-left lg:text-left">
              <h3 className="text-textyellow text-4xl font-semi-bold">30+</h3>
              <small className="text-sm text-gray-600">Resident Child</small>
            </div>
            <div className="text-left lg:text-left">
              <h3 className="text-textyellow text-4xl font-semi-bold">10+</h3>
              <small className="text-sm text-gray-600">
                Non-resident Child
              </small>
            </div>
          </div>
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

export default Stats;
