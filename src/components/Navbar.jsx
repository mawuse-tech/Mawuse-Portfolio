import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[#181A20] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          
          <span className="text-[#F0B90B] font-bold text-lg">MAWUSE-AKPEKE.</span>
        </div>
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Buy Crypto</a>
          <a href="#" className="text-gray-300 hover:text-white">Markets</a>
          <a href="#" className="text-gray-300 hover:text-white">Internal Page</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;