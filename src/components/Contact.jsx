// components/Contact.jsx
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formspreeUrl = "https://formspree.io/f/mdklzywv"; 

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          toast.error(data.errors.map(e => e.message).join(", "));
        } else {
          toast.error("Oops! Something went wrong.");
        }
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className="bg-[#181A20] text-white min-h-screen flex items-center justify-center py-16 px-4">
      <Toaster position="top-right" />
      <div
        className="container mx-auto max-w-4xl p-8 bg-[#24262B] rounded-2xl shadow-xl border border-gray-700"
        data-aos="fade-up"
      >
        <div className="text-center mb-12" data-aos="zoom-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm a full-stack developer passionate about creating innovative and efficient digital solutions. If you have a project in mind, a question, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Left Column */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4" data-aos="fade-right" data-aos-delay="300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h4 className="text-gray-300 font-semibold">Email</h4>
                <a href="mailto:mawuse.akpeke@example.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  mawuse.akpeke@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4" data-aos="fade-right" data-aos-delay="400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2.16-2.16a2 2 0 012.88 0l2.16 2.16a2 2 0 010 2.88L18.84 16m-4.59 4.59a2 2 0 01-2.82 0l-2.16-2.16a2 2 0 010-2.88L13.16 13.16m4.59-4.59a2 2 0 012.82 0L21 8m-4.59-4.59a2 2 0 012.82 0L21 8" />
              </svg>
              <div>
                <h4 className="text-gray-300 font-semibold">Socials</h4>
                <div className="flex space-x-4 mt-1">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col space-y-6" data-aos="fade-left" data-aos-delay="500">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-[#181A20] text-gray-300 border border-gray-700 focus:outline-none focus:border-yellow-500"
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-[#181A20] text-gray-300 border border-gray-700 focus:outline-none focus:border-yellow-500"
              disabled={isSubmitting}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              className="w-full p-4 rounded-lg bg-[#181A20] text-gray-300 border border-gray-700 focus:outline-none focus:border-yellow-500"
              disabled={isSubmitting}
            ></textarea>
            <button
              type="submit"
              className={`bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 rounded-lg transition duration-300 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
