import React from "react";

const Prevail = () => {
  return (
    <section className="bg-[#f4f5f7] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center">
        {/* Image */}
        <div className="w-full md:w-auto flex justify-center md:justify-end md:mr-24">
          <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-[50%_0_50%_50%]">
            <img
              src="https://facethechildren.org/images/website/s-love.webp"
              alt="Love Never Fails"
              className="object-cover w-full h-full grayscale"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:max-w-xl text-center md:text-left mt-8 md:mt-0">
          <p className="uppercase text-sm text-textyellow mb-3">
            Prevails Forever
          </p>
          <h2 className="text-3xl text-primary mb-4">Love Never Fails</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
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
          <p className="text-gray-600 leading-relaxed">
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
