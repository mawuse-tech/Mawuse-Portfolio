// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#24262B] text-gray-400 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 animate-fadeIn">
          
          {/* Logo and Copyright Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left transform transition duration-500 hover:scale-105">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 font-bold text-lg mr-2">MA</span>
              <span className="text-white font-bold text-lg">WUSE AKPEKE</span>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Mawuse Akpeke. All Rights Reserved.</p>
          </div>

          {/* Navigation Links Section */}
          <div className="flex flex-col items-center md:items-start space-y-4 transition duration-500 hover:translate-y-1">
            <h4 className="text-white font-semibold mb-2">Navigation</h4>
            {["Home", "Projects", "About", "Contact"].map((link, index) => (
              <a 
                key={index} 
                href="#" 
                className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col items-center md:items-start space-y-4 transition duration-500 hover:translate-y-1">
            <h4 className="text-white font-semibold mb-2">Connect</h4>
            {["LinkedIn", "GitHub", "Twitter"].map((link, index) => (
              <a 
                key={index} 
                href="#" 
                className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                {link}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
