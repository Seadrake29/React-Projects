import React from "react";

const Affiliates = () => {
  return (
    <section className="mb-[70px] py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full text-center">
          <span className="text-xs text-textyellow block mb-2 uppercase">
            Trusted Affiliates
          </span>
          <h4 className="text-primary text-3xl mb-6 font-semibold">
            Our Advocacy Associates
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-x-[50px] gap-y-6">
            {[
              {
                src: "./img/Home/logo-fwc.png",
                alt: "FWC",
              },
              {
                src: "./img/Home/logo-fbs.png",
                alt: "FBS",
              },
              {
                src: "./img/Home/logo-fca.png",
                alt: "FCA",
              },
              {
                src: "./img/Home/logo-ftw.png",
                alt: "FTW",
              },
              {
                src: "./img/Home/logo-pfm.png",
                alt: "PFM",
              },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                className="h-16 w-50 flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliates;
