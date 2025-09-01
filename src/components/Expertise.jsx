// components/HalvingTimeline.jsx
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faWind, faProjectDiagram, faServer } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ icon, title, content, aosType }) => (
  <div
    className="bg-[#24262B] border border-gray-700 rounded-xl p-6 flex-1 min-w-full sm:min-w-[45%] lg:min-w-[30%] flex flex-col items-center text-center"
    data-aos={aosType}
  >
    <FontAwesomeIcon icon={icon} className="text-yellow-500 text-5xl mb-3" />
    <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{content}</p>
  </div>
);

const Expertise = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="expertise" className="bg-[#181A20] text-white py-16 px-4">
      <h2
        className="text-white text-3xl sm:text-4xl font-bold mb-4 text-center"
        data-aos="fade-down"
      >
      EXPERTISE
      </h2>

      {/* Grid of Cards */}
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap justify-center gap-6">
          <Card
            icon={faReact}
            title="React"
            content="Building dynamic, responsive, and fast front-end applications using React."
            aosType="fade-up"
          />
          <Card
            icon={faJs}
            title="JavaScript"
            content="Writing clean, efficient, and scalable code with modern JavaScript features."
            aosType="fade-up"
          />
          <Card
            icon={faWind}
            title="Tailwind CSS"
            content="Designing beautiful, responsive, and customizable UI components quickly."
            aosType="fade-up"
          />
          <Card
            icon={faProjectDiagram}
            title="Redux"
            content="Managing complex app states with Redux for predictable state management."
            aosType="fade-up"
          />
          <Card
            icon={faNodeJs}
            title="Node.js"
            content="Developing fast, scalable back-end services with Node.js."
            aosType="fade-up"
          />
          <Card
            icon={faServer}
            title="Express.js"
            content="Creating RESTful APIs and server-side applications with Express.js."
            aosType="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
