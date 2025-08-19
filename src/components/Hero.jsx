// src/components/Hero.jsx
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ContactModel from "./ContactModel";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center pt-30 bg-gradient-to-r from-pink-50 via-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat text-gray-900">
            Hi, I am <span className="text-indigo-600">Sharook Khan</span>
          </h1>

          <TypeAnimation
            sequence={[
              "I am a Full Stack Developer", 3000,
              "I am a Backend Developer", 3000,
              "I am a Frontend Developer", 3000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-xl md:text-2xl font-semibold text-gray-700"
          />

          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-6 py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="mt-10 md:mt-0 md:ml-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="https://res.cloudinary.com/dujealnld/image/upload/v1755579627/photo_2024-11-10_20-38-07_ro0oni.jpg" // replace with your image in public folder
            alt="Sharook Khan"
            className="w-56 h-56 md:w-96 md:h-96 object-cover rounded-full shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
