import React from "react";

const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-xs text-orange-500 uppercase mb-2">
            Our Solutions
          </p>
          <h3 className="text-3xl text-primary leading-tight mb-6">
            Services We Provide
          </h3>
          <p className="mb-10 text-gray-700">
            Making a difference in the lives of children can be simplified into
            a few essential actions focused on their overall well-being. Here
            are the things we provide for our children
          </p>
          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-hover text-sm">
            Learn More
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://facethechildren.org/images/website/h-service.webp"
            alt="Services"
            className="w-full max-w-md mx-auto service-image"
          />
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 881px) and (max-width: 900px) {
          .service-image {
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
