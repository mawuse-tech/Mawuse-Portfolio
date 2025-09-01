// components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#181A20] p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-10">
        {/* Logo and Brand Name */}
        <div className="flex items-center ">
          {/* Using a simple text logo. You can replace this with your MA logo image */}
          <span className="text-yellow-500 font-bold text-lg mr-1">MA</span>
          <span className="text-white font-bold text-lg">WUSE AKPEKE</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4 items-center">
            <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">Home</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">About</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;