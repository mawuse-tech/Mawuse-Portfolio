import React, { useEffect } from 'react';
import mypic from '../assets/mypic.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once:true means it animates only once
  }, []);

  return (
    <div className="bg-[#181A20] text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center justify-between">

        {/* Text Section */}
        <div
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          data-aos="fade-right"
        >
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Hello World, <br />I am Mawuse Akpeke
          </h1>
          <div className="mb-8">
            <p className="text-6xl font-bold text-yellow-500">A Full Stack Developer</p>
          </div>
          <p className="text-gray-300 text-lg">
            I specialize in creating seamless user experiences from front to back, turning complex ideas into clean, functional code. Let's build something great together.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="md:w-1/2 flex justify-center rounded-2xl"
          data-aos="fade-left"
        >
          <div className="w-full max-w-lg">
            <img src={mypic} alt="my image" className="w-full h-auto rounded-2xl" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
