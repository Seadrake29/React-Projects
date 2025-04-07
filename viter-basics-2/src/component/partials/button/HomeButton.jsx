import React from "react";

const HomeButton = ({ buttonText, buttonFunction }) => {
  return (
    <button
      onClick={() => {
        buttonFunction();
      }}
      className="border-2 py-2 px-4 mt-5 hover:bg-cyan-500 rounded-md transition-all ease-in-out"
    >
      {buttonText}
    </button>
  );
};

export default HomeButton;
