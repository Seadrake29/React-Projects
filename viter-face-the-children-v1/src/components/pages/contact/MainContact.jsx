import React from "react";

const FloatingInput = ({ label, type = "text", name }) => (
  <div className="relative w-full">
    <input
      type={type}
      id={name}
      name={name}
      className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-ring-primary"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary"
    >
      {label}
    </label>
  </div>
);

const MainContact = () => {
  return (
    <div>
      <section className="py-16 mt-[100px] lg:mt-[150px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-start md:justify-center lg:flex-row lg:items-start lg:justify-center">
          <div className="w-full md:w-1/2 lg:w-1/2 flex md:justify-center lg:justify-center">
            <div className="md:ml-10 lg:ml-[95px] mb-20">
              <p className="text-textyellow uppercase text-xs mb-1">
                Let's Talk
              </p>
              <h2 className="text-primary font-semibold md:text-2xl lg:text-2xl text-lg mb-5">
                We're Here for You
              </h2>
              <p className="text-sm text-[#3a3b36] leading-[1.8] max-w-[80%]">
                We believe in building strong relationships and fostering a
                sense of community. Your feedback and inquiries are important to
                us, and we strive to respond as quickly and thoroughly as
                possible.
              </p>

              <p className="mt-5 text-[#3a3b36] text-sm">
                feel free to get in touch with us via phone
              </p>
              <div className="lg:flex gap-10 mt-5 mb-10 font-semibold text-sm md:flex">
                <span className="text-primary">
                  Philippines: +63 927 420 3409
                </span>
                <span className="flex flex-col md:flex-none lg:ml-0 text-primary">
                  USA +815 797 9177
                </span>
              </div>

              <p className="text-[#3a3b36] text-sm mb-2">
                Visit us here in the Philippines
              </p>
              <span className="font-semibold text-primary text-sm">
                Frontline Mission Center, Sitio Subac, <br /> Brgy. Sto Nino,
                San Pablo City, 4000 Laguna
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/2">
            <form className="flex flex-col gap-4 w-full max-w-[530px] text-sm">
              <FloatingInput label="Name" name="name" />
              <FloatingInput label="Email" name="email" type="email" />
              <FloatingInput label="Phone" name="phone" type="tel" />
              <FloatingInput label="Subject" name="subject" />
              <div className="relative w-full">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full h-[300px] border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-ring-primary resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary"
                >
                  Message
                </label>
              </div>

              <div className="border border-gray-300 px-6 py-2 rounded bg-white flex flex-col space-y-0.5 w-96 mt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="robot" className="w-4 h-4" />
                    <label htmlFor="robot" className="text-sm text-gray-700">
                      I'm not a robot
                    </label>
                  </div>
                  <div className="flex flex-col items-center ml-4">
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="reCAPTCHA"
                      className="w-8 h-8"
                    />
                    <div className="text-[10px] text-gray-400 mt-0.5">
                      reCAPTCHA
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-lightyellow text-white text-xs font-medium py-1.5 px-3 rounded-md hover:opacity-90 transition self-start"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContact;
