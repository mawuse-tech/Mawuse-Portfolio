// components/TradeOffer.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutme = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // once: true ensures it animates only once
    }, []);

    return (
        <div className="bg-[#181A20] py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div
                className="bg-[#24262B] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto
                  flex flex-col md:flex-row items-center justify-between shadow-xl
                  border border-gray-700"
                data-aos="fade-up"
            >
                {/* Right Section: Text and Button */}
                <div className="flex-grow text-center md:text-left">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 text-center">
                        ABOUT ME
                    </h2>
                    <p className="text-gray-300 text-lg text-center">
                        Hi there! I’m Mawuse Akpeke, a passionate Full Stack developer with a love for crafting intuitive and engaging web applications. With a background in information studies, I thrive on turning ideas into reality through code.

                        I’m continuously learning and exploring new technologies. My goal is to create seamless user experiences while contributing to meaningful projects. I’m also passionate about empowering young women who look up to me, inspiring them to explore opportunities in tech and beyond. When I’m not coding, you can find me designing clothing, always looking for inspiration in the world around me. I believe in the power of collaboration and I am excited to connect with like-minded individuals. Let’s bring your ideas to life together!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
