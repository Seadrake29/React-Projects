import React from "react";

const Header = () => {
  return (
    <header className="bg-primary shadow fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between text-white text-[10px]">
        <div />
        <div className="flex space-x-4">
          <a href="#">Visit Philippine Frontline Ministries</a>
          <a href="#" className="hover:underline">
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
