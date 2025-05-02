import React from "react";
import { FaFileExcel } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-b from-primary to-blue-100 relative overflow-hidden pt-40">
      <FaFileExcel className="h-80 w-80 fill-primary/40 absolute z-0 skew-x-12 skew-y-12" />

      <div className="flex flex-col items-center relative z-10 transform -translate-y-10">
        <div className="text-[96px] font-bold text-white drop-shadow-lg">
          404
        </div>
        <div className="text-2xl font-semibold text-white mb-2">
          Page not found
        </div>
        <div className="text-white mb-6 text-center">
          Unfortunately, the desired page cannot be accessed at the moment.
          <br />
          Please check your URL.
        </div>
        <button
          type="button"
          onClick={goToHomePage}
          className="group flex items-center gap-2 bg-white z-10 py-2 px-6 rounded-md text-primary font-bold hover:gap-4 duration-200"
        >
          <FaArrowLeft className="transition-all duration-200" />
          <span className="text-[15px]">Go back</span>
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
