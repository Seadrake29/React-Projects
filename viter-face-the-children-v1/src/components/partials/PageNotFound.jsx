import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-b from-primary to-blue-100 relative overflow-hidden pt-40">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 384 512"
        className="h-80 w-80 fill-primary/40 absolute z-0 skew-x-12 skew-y-12"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm60.1 106.5L224 336l60.1 93.5c5.1 8-.6 18.5-10.1 18.5h-34.9c-4.4 0-8.5-2.4-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8-2.1 3.9-6.1 6.3-10.5 6.3H110c-9.5 0-15.2-10.5-10.1-18.5l60.3-93.5-60.3-93.5c-5.2-8 .6-18.5 10.1-18.5h34.8c4.4 0 8.5 2.4 10.6 6.3 26.1 48.8 20 33.6 36.6 68.5 0 0 6.1-11.7 36.6-68.5 2.1-3.9 6.2-6.3 10.6-6.3H274c9.5-.1 15.2 10.4 10.1 18.4zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
      </svg>
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
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-white text-primary font-medium rounded shadow hover:bg-blue-50 transition"
        >
          &#8592; Go back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
