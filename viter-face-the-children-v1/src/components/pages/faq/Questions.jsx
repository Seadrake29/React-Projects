import React, { useState, useEffect } from "react";
import faqs from "./FaqData";

const Questions = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setActiveId(1);
    }
  }, []);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-16 mt-20 lg:mt-[150px] bg-white text-center">
      <span className="text-textyellow lg:text-xs text-xs uppercase">
        Your Questions, Our Clarity
      </span>
      <h3 className="lg:text-[45px] text-2xl mb-5 font-semibold text-[#3a3b36] lg:mt-4">
        Our Commitment to Child Development
      </h3>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 relative text-left mt-10">
          {faqs.map((item) => (
            <div key={item.id} className="relative">
              <button
                onClick={() => handleToggle(item.id)}
                className={`w-full flex items-center justify-between border rounded-lg px-4 py-3 text-left transition duration-200 font-normal
                  ${
                    activeId === item.id
                      ? "text-primary hover:bg-primary hover:text-white border-blue-300"
                      : "bg-white  border-gray-300 "
                  }
                   hover:bg-primary  hover:text-white hover:border-blue-300`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`text-lg font-semibold ${
                      activeId === item.id ? "text-gray-300" : "text-gray-300"
                    }`}
                  >
                    {`0${item.id}`}
                  </span>
                  <span className="text-sm">{item.question}</span>
                </span>
                <span className="text-xl transform transition-transform duration-200">
                  {activeId === item.id ? "›" : "›"}
                </span>
              </button>

              {/* Answer Box */}
              {activeId === item.id && (
                <div className="lg:absolute lg:left-full text-sm lg:ml-[150px] lg:top-0 w-full lg:w-[400px] mt-4 lg:mt-0 border border-blue-300 bg-gray-100 rounded-lg p-4 text-gray-700 shadow-md z-10">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default Questions;
