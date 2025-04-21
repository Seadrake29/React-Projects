import React from "react";

const FloatingInput = ({ label, type = "text", name }) => (
  <div className="relative w-full">
    <input
      type={type}
      id={name}
      name={name}
      className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
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
      <section className="py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-12 justify-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex justify-center sm:justify-start">
            <div>
              <p className="text-textyellow uppercase text-xs mb-1">
                Let's Talk
              </p>
              <h2 className="text-primary text-2xl sm:text-3xl mb-8">
                We're Here for You
              </h2>
              <p className="text-sm max-w-md">
                We believe in building strong relationships and fostering a
                sense of community. Your feedback and inquiries are important to
                us, and we strive to respond as quickly and thoroughly as
                possible.
              </p>

              <p className="mt-5">
                Feel free to get in touch with us via phone
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-5 mb-10 font-bold text-sm">
                <span className="text-primary">
                  Philippines: +63 927 420 3409
                </span>
                <span className="text-primary">USA: +815 797 9177</span>
              </div>

              <p>Visit us here in the Philippines</p>
              <span className="font-bold text-primary text-sm">
                Frontline Mission Center, Sitio Subac, <br /> Brgy. Sto Nino,
                San Pablo City, 4000 Laguna
              </span>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full lg:w-1/2">
            <form className="flex flex-col gap-4 text-sm">
              <FloatingInput label="Name" name="name" />
              <FloatingInput label="Email" name="email" type="email" />
              <FloatingInput label="Phone" name="phone" type="tel" />
              <FloatingInput label="Subject" name="subject" />

              {/* Message textarea */}
              <div className="relative w-full">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary"
                >
                  Message
                </label>
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
