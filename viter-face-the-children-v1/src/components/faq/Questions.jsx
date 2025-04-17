import React, { useState, useEffect } from 'react';
import faqs from './FaqData';

const Questions = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setActiveId(1); // Open question 1 on large screens
    }
  }, []);

  const handleToggle = (id) => {
    setActiveId(id);
  };

  return (
    <section className="py-16 bg-white text-center">
      <span className="text-textyellow">Your Questions, Our Clarity</span>
      <h3 className="text-4xl text-gray-700 mt-5">Our Commitment to Child Development</h3>
      
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 relative text-left mt-10">
          {faqs.map((item) => (
            <div key={item.id} className="relative">
              <button
                onClick={() => handleToggle(item.id)}
                className={`w-full flex items-center justify-between border rounded-lg px-4 py-3 text-left transition ${
                  activeId === item.id
                    ? 'bg-blue-100 border-blue-300 text-blue-700 font-semibold'
                    : 'bg-white border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base font-bold text-gray-600">{`0${item.id}`}</span>
                  <span className="text-sm">{item.question}</span>
                </span>
                <span className="text-xl">{'›'}</span>
              </button>

              {/* Floating Answer Box */}
              {activeId === item.id && (
                <div className="absolute left-full ml-8 top-0 w-[400px] border border-blue-300 bg-gray-100 rounded-lg p-4 text-gray-700 shadow-md z-10">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Keeps layout balanced on desktop */}
        <div />
      </div>
    </section>
  );
};

export default Questions;
