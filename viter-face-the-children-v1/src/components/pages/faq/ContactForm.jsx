import React from "react";

const FloatingInput = ({ label, type = "text", name }) => (
  <div className="relative w-full">
    <input
      type={type}
      id={name}
      name={name}
      className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-gray-100"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute left-3 -top-2 text-xs bg-gray-100 px-1 text-primary"
    >
      {label}
    </label>
  </div>
);

const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 justify-center">
        <div className="w-full lg:w-1/2 flex justify-center sm:justify-start">
          <div>
            <p className="text-textyellow uppercase text-xs font-semibold mb-1">
              Frequently Asked Question
            </p>
            <h2 className="text-primary lg:text-2xl sm:text-xl lg:font-bold mb-3 font-semibold">
              Can't find what you are looking for?
            </h2>
            <p className=" text-sm max-w-md">
              If your question is not listed above, you can use the form to send
              directly to us your questions.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <form className="flex flex-col gap-4 text-sm">
            <FloatingInput label="Name" name="name" />
            <FloatingInput label="Email" name="email" type="email" />
            <FloatingInput label="Phone" name="phone" type="tel" />
            <FloatingInput label="Subject" name="subject" />

            <div className="relative w-full">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 bg-gray-100 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute left-3 -top-2 text-xs bg-gray-100 px-1 text-primary"
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
  );
};

export default ContactForm;
