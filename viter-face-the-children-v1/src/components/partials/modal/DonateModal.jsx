import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const FloatingInput = ({ label, type = "text", name }) => (
  <div className="relative w-full">
    <input
      type={type}
      id={name}
      name={name}
      className="w-full border rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute left-3 -top-2 text-xs bg-white px-1 text-blue-600"
    >
      {label}
    </label>
  </div>
);

const DonateModal = ({ isOpen, closeModal }) => {
  const [showModal, setShowModal] = useState(false);

  // Manage modal visibility with animation
  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      setShowModal(false); // No need to delay hiding for closing animation
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`bg-white rounded-lg shadow-lg w-96 p-6 transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "animate-fade-in-up translate-y-0"
            : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center mb-4 -mx-[24px] -mt-[24px] p-5 bg-primary">
          <h2 className="text-xl font-semibold text-white">General Donation</h2>
          <button
            onClick={closeModal}
            className="text-white text-2xl font-bold"
          >
            <MdClose />
          </button>
        </div>

        <form>
          <div className="mb-4">
            <FloatingInput label="*Designation" name="designation" />
          </div>

          <div className="mb-4">
            <FloatingInput label="*Amount" name="amount" type="number" />
          </div>

          <div className="mb-4">
            <FloatingInput label="*Frequency" name="frequency" />
          </div>

          <div className="mb-4">
            <FloatingInput label="Remarks" name="remarks" />
          </div>

          <div className="mb-4">
            <FloatingInput label="*Email" name="email" type="email" />
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              type="submit"
              className="bg-blue-200 text-white px-[40%] py-2 rounded hover:bg-blue-700 transition"
            >
              Proceed
            </button>
          </div>
        </form>

        <div className="mt-6 text-right">
          <p className="text-sm text-gray-500">Donate with your credit card.</p>
          <div className="flex justify-end gap-2">
            <img
              src="/public/paymentmethods.png"
              alt="Credit Cards"
              className="w-25"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;
