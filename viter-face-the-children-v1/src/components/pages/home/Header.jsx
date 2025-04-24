import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary shadow fixed top-0 left-0 right-0 z-50 pt-2 pb-1 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white text-[11.5px]">
        <div />
        <div className="flex space-x-4">
          <a href="#">Visit Philippine Frontline Ministries</a>
          <Link to="/access" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
