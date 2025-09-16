// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#24262B] text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
          
          {/* Logo / About */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 font-bold text-xl">MA</span>
              <span className="text-white font-bold text-xl">
                WUSE AKPEKE
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Frontend Developer passionate about crafting clean and modern
              web experiences. Let’s build something amazing together.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-yellow-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-yellow-500 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-500 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.linkedin.com/in/mawuse-akpeke-aa28a8245/" target="_blank" rel="noopener noreferrer"
                   className="hover:text-yellow-500 transition-colors duration-300">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/mawuse-tech" target="_blank" rel="noopener noreferrer"
                   className="hover:text-yellow-500 transition-colors duration-300">
                  GitHub
                </a>
              </li>
            
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Stay updated with my latest projects and insights.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-md focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-yellow-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mawuse Akpeke. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
