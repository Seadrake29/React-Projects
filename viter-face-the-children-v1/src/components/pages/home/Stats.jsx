import React from "react";

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:gap-16 lg:gap-24">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="./img/Home/h-about.webp"
            alt="Children Graphic"
            className="w-full max-w-md"
          />
        </div>

        <div className="w-full md:w-1/2 text-left">
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
            <div>
              <h3 className="text-textyellow text-4xl font-semibold">
                20<span className="text-[23px]">+</span>
              </h3>
              <small className="text-sm text-gray-600">Years Experience</small>
            </div>
            <div>
              <h3 className="text-textyellow text-4xl font-semibold">
                10<span className="text-[23px]">+</span>
              </h3>
              <small className="text-sm text-gray-600">Volunteers</small>
            </div>
            <div>
              <h3 className="text-textyellow text-4xl font-semibold">
                30<span className="text-[23px]">+</span>
              </h3>
              <small className="text-sm text-gray-600">Resident Child</small>
            </div>
            <div>
              <h3 className="text-textyellow text-4xl font-semibold">
                10<span className="text-[23px]">+</span>
              </h3>
              <small className="text-sm text-gray-600">
                Non-resident Child
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
