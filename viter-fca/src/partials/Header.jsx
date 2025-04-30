import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT" },
    { label: "ADMISSION" },
    { label: "SERVICES", path: "/services" },
    { label: "GALLERY" },
    { label: "CONTACT" },
    { label: "LITERARIO" },
  ];

  return (
    <header className="w-full bg-white shadow">
      <div className="mx-auto w-full max-w-[1600px] px-4">
        {/* Top Row */}
        <div className="flex items-center justify-between gap-4 py-2 md:flex-row">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/home/fca-logo.webp"
              alt="FCA Logo"
              className="h-16 object-contain"
            />
          </div>

          {/* Contact & Buttons */}
          <div className="hidden md:flex flex-col items-center gap-2 text-xs text-black md:flex-row md:gap-6">
            <div className="flex flex-col items-center gap-1 md:flex-row md:gap-4 font-raleway text-lg">
              <div className="flex items-center gap-1">
                <FaPhoneAlt className="text-black" size={12} />
                <span>(049) 521-0732</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMobileAlt className="text-black" size={12} />
                <span>(+63) 908-202-0749 | (+63) 926-363-9722</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="rounded-md bg-myblue px-4 py-2 text-xs text-white hover:bg-[#2f4678]">
                Facebook
              </button>
              <button className="rounded-md border border-black px-4 py-2 text-xs text-black hover:bg-gray-100">
                FAQ's
              </button>
            </div>
          </div>

          {/* Burger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center p-2 transition-transform duration-300"
            >
              <div
                className={`transition-transform duration-300 ${
                  menuOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                {menuOpen ? (
                  <HiOutlineArrowNarrowLeft className="text-3xl text-black" />
                ) : (
                  <HiOutlineMenu className="text-3xl text-black" />
                )}
              </div>
            </button>
          </div>
        </div>

        <hr className="border-t border-gray-300" />

        {/* Desktop Nav */}
        <nav className="relative items-center justify-between py-3 text-sm font-medium font-raleway text-gray-700 hidden md:flex">
          <div className="flex flex-1 items-center justify-center">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-1 items-center justify-center relative"
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`text-center ${
                      location.pathname === item.path
                        ? "text-primary font-bold"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-center">{item.label}</span>
                )}
                {index < navItems.length - 1 && (
                  <div className="absolute right-0 top-1/2 h-6 w-px -translate-y-1/2 bg-gray-300" />
                )}
              </div>
            ))}
          </div>

          <div className="ml-8 flex-shrink-0">
            <button className="rounded-md bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-[#c9981e]">
              GIVE
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-[80px] left-0 right-0 h-[calc(100vh-88px)] bg-white transition-transform duration-300 ease-in-out z-40 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center gap-6 mt-8 font-raleway text-gray-700">
            {navItems.map((item, index) =>
              item.path ? (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg"
                >
                  {item.label}
                </Link>
              ) : (
                <span key={index} className="text-lg">
                  {item.label}
                </span>
              )
            )}

            <button className="rounded-md bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-[#c9981e]">
              GIVE
            </button>

            <div className="flex flex-col items-center text-center text-sm text-black mt-4 gap-2">
              <div className="flex items-center gap-1">
                <FaPhoneAlt className="text-black" size={12} />
                <span>(049) 521-0732</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMobileAlt className="text-black" size={12} />
                <span>(+63) 908-202-0749 | (+63) 926-363-9722</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 mt-4 w-full px-8">
              <button className="w-full rounded-md bg-myblue px-4 py-2 text-xs text-white hover:bg-[#2f4678]">
                Facebook
              </button>
              <button className="w-full rounded-md border border-black px-4 py-2 text-xs text-black hover:bg-gray-100">
                FAQ's
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
