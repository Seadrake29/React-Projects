// components/ContactForm.jsx
import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white shadow-xl p-10  w-full max-w-7xl">
      <form className="space-y-9 text-base">
        <input
          type="text"
          placeholder="Your Name"
          className="w-[600px] border border-gray-400 rounded-md px-5 py-3"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-[600px] border border-gray-400 rounded-md px-5 py-3"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-[600px] border border-gray-400 rounded-md px-5 py-3"
        />
        <textarea
          rows="6"
          placeholder="Your Message"
          className="w-[600px] border border-gray-400 rounded-md px-5 py-3"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-lime text-white py-3 rounded hover:bg-green-800 text-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
