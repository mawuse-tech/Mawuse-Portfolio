// components/Projects.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/auth.png'
import five from '../assets/five.png'
import six from '../assets/six.png'
import sev from '../assets/sev.png'

const Card = ({ imageSrc, title, description, date, status, link, aosType, delay }) => {
  return (
    <div
      className="flex-1 min-w-[300px] max-w-[350px] bg-[#24262B] rounded-xl overflow-hidden shadow-lg border border-gray-700"
      data-aos={aosType}
      data-aos-delay={delay}
    >
      <div className="relative w-full h-48">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="text-gray-500 text-xs flex items-center mb-2">
          <span className="text-[1.5rem]">{date}</span>
        </div>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-xs font-semibold hover:underline"
          >
            {status}
          </a>
        ) : (
          <span className="text-green-500 text-xs font-semibold">{status}</span>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cardsData = [
    {
      imageSrc: one,
      title: "Sisters App",
      description: "",
      date: "Built with React, Tailwind, NodeJs and Mongoose",
      status: "View project",
      link: "https://sisters-backend.onrender.com"
    },
    {
      imageSrc: two,
      title: "Agric E-commerce App",
      description: "",
      date: "Built with React, Tailwind, mongoose and Paystack",
      status: "View project",
      link: "https://www.eagleparkinnovations.com/"
    },

    {
      imageSrc: sev,
      title: "Shift scheduling App",
      description: "",
      date: "Log in with email:admin@gmail.com pass:12345",
      status: "View project",
      link: "https://sche.up.railway.app/"
    },

    {
      imageSrc: four,
      title: "Authentication project",
      description: "",
      date: "Built with React, Tailwind, Node.js and Mongoose",
      status: "View project",
      link: "https://esseauth.netlify.app/"
    },

    {
      imageSrc: three,
      title: "An Engineering Website",
      description: "",
      date: "Built with Html, CSS and Javascript",
      status: "View project",
      link: "https://oyibo.netlify.app/"
    },
    
    {
      imageSrc: five,
      title: "A Rental App",
      description: "",
      date: "Built with React, NodeJs and Mongoose",
      status: "View project",
      link: "https://renteaze.netlify.app/"
    },
    
  ];

  return (
    <div id="project" className="bg-[#181A20] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-down">
        <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">MY RECENT PROJECTS</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Here are a few recent projects I’ve worked on. Take a peek and see what I’ve been up to.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            date={card.date}
            status={card.status}
            link={card.link}
            aosType="fade-up"
            delay={index * 200}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
