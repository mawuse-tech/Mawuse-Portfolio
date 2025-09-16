// components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#181A20] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <span className="text-yellow-500 font-bold text-xl mr-1">MA</span>
          <span className="text-white font-bold text-xl tracking-wide">
            WUSE AKPEKE
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Expertise", href: "#expertise" },
            { name: "Projects", href: "#project" },
            { name: "Contact", href: "#contact" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
            >
              {link.name}
              {/* underline hover effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-md hover:bg-[#24262B] transition"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#181A20] px-6 pb-6 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 mt-4 items-start">
          <a
            href="#home"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#expertise"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Expertise
          </a>
          <a
            href="#project"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
