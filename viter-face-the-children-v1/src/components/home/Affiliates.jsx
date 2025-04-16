import React from "react";

const Affiliates = () => {
  return (
    <section className="mb-[70px] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full text-center">
          <span className="text-xs text-textyellow block mb-2">
            Trusted Affiliates
          </span>
          <h4 className="text-primary text-4xl mb-6">
            Our Advocacy Associates
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            <img
              src="https://facethechildren.org/images/website/logo-fwc.png"
              alt="FWC"
              className="h-16 object-contain"
            />
            <img
              src="https://facethechildren.org/images/website/logo-fbs.png"
              alt="FBS"
              className="h-16 object-contain"
            />
            <img
              src="https://facethechildren.org/images/website/logo-fca.png"
              alt="FCA"
              className="h-16 object-contain"
            />
            <img
              src="https://facethechildren.org/images/website/logo-ftw.png"
              alt="FTW"
              className="h-16 object-contain"
            />
            <img
              src="https://facethechildren.org/images/website/logo-pfm.png"
              alt="PFM"
              className="h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliates;
