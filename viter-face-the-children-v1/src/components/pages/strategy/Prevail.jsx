import React from "react";

const Prevail = () => {
  return (
    <section className="bg-[#f4f5f7] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center gap-[50px]">
        {/* Image */}
        <div className="w-full md:w-auto flex justify-center md:justify-between md:mr-24">
          <div>
            <img
              src="./img/Strategy/s-love.webp"
              alt="Love Never Fails"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:max-w-[38%] text-left md:text-left mt-8">
          <p className="uppercase lg:text-sm text-xs text-textyellow mb-3">
            Prevails Forever
          </p>
          <h2 className="lg:text-3xl text-lg font-semibold text-primary mb-4">
            Love Never Fails
          </h2>
          <p
            className="text-[#3a3b36] text-sm mb-5"
            style={{ lineHeight: "2" }}
          >
            Many children we serve come to us with psychological, behavioral
            problems, and even chemical or mental addictions; some at very young
            ages. Many are not ready to trust or commit to others due to various
            forms of abuse or levels of neglect. Needless to say, many children
            have good reasons for hesitation to trust or commit to others; and
            in some cases fail to do so. Knowing that not all children respond
            as we hope does not deter us. We are committed to the welfare of
            children regardless of the outcomes of our interventions with all
            children.
          </p>
          <p className="text-[#3a3b36] text-sm " style={{ lineHeight: "2" }}>
            Many children we serve come to us with psychological, behavioral
            problems, and even chemical or mental addictions; some at very young
            ages. Many are not ready to trust or commit to others due to various
            forms of abuse or levels of neglect. Needless to say, many children
            have good reasons for hesitation to trust or commit to others; and
            in some cases fail to do so. Knowing that not all children respond
            as we hope does not deter us. We are committed to the welfare of
            children regardless of the outcomes of our interventions with all
            children.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prevail;
