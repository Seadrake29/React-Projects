import React, { useState } from "react";
import testimonials from "./TestimonialData";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // "left" or "right"

  const handleDotClick = (index) => {
    if (index > currentIndex) {
      setDirection("right");
    } else if (index < currentIndex) {
      setDirection("left");
    }
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-[#f2f2f2] py-16 md:py-20 px-4 md:px-0 overflow-hidden">
      <h2 className="text-3xl font-raleway font-semibold text-green-700 text-center mb-12">
        What Our Clients Have To Say
      </h2>

      <div className="max-w-[1700px] w-full mx-auto">
        <div className="relative w-full max-w-[1400px] mx-auto mb-20 h-full">
          {/* Animate sliding */}
          <div
            key={currentIndex}
            className={`flex flex-col md:flex-row w-full ml-5 transition-all duration-700 transform ${
              direction === "right"
                ? "translate-x-0 animate-slide-left"
                : "translate-x-0 animate-slide-right"
            }`}
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col w-full md:max-w-[1100px]">
              <div className="relative mb-8 mt-[100px]">
                <img
                  src="/images/home/testimonial/qoute.svg"
                  alt="quote"
                  className="absolute left-0 -top-20 w-10 h-10"
                />
                <p className="text-gray-700 leading-relaxed font-raleway text-[16px] max-w-[920px]">
                  {testimonials[currentIndex].text}
                </p>
                <img
                  src="/images/home/testimonial/qoute2.svg"
                  alt="quote end"
                  className="absolute right-[220px] top-[220px] w-10 h-10"
                />
              </div>

              <div className="flex items-center gap-4 mt-6">
                <img
                  src={testimonials[currentIndex].clientImage}
                  alt={testimonials[currentIndex].name}
                  className="w-[100px] h-[100px] rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex flex-1 justify-center mt-12 md:mt-0 mr-[120px]">
              <div className="flex flex-col gap-4">
                <img
                  src={testimonials[currentIndex].sideImages[0]}
                  alt="Child 1"
                  className="w-[240px] h-[220px] object-cover shadow-md"
                />
                <img
                  src={testimonials[currentIndex].sideImages[1]}
                  alt="Child 2"
                  className="w-[240px] h-[220px] object-cover shadow-md"
                />
              </div>
              <img
                src={testimonials[currentIndex].sideImages[2]}
                alt="Child 3"
                className="w-[240px] h-[220px] object-cover shadow-md absolute left-[190px] top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-4 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index ? "bg-primary" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
