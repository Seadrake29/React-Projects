import React from "react";

const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
