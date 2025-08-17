// src/components/About.jsx
import React from "react";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="relative flex justify-center">
          <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-100 rounded-2xl -z-10"></div>
          <img
            src="/profile.jpg" // replace with your profile image path
            alt="Profile"
            className="rounded-2xl shadow-lg w-80 md:w-96 object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat mb-4">
            A Few Words <span className="text-indigo-600">About Me</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            Full Stack Developer <span className="text-indigo-500">Driven by Passion</span>
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            I'm a <span className="font-semibold">Full Stack Web Developer</span> located in 
            <span className="font-semibold"> Trivandrum, Kerala</span> and currently open to work. 
            I enjoy building scalable, responsive, and user-friendly applications.
          </p>

          {/* Skills List */}
<ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-700 mb-6">
  <li className="flex items-center gap-2">
    <Check className="text-green-600 w-5 h-5" /> Building websites
  </li>
  <li className="flex items-center gap-2">
    <Check className="text-green-600 w-5 h-5" /> Bug fixing
  </li>
  <li className="flex items-center gap-2">
    <Check className="text-green-600 w-5 h-5" /> Maintenance
  </li>
  <li className="flex items-center gap-2">
    <Check className="text-green-600 w-5 h-5" /> Updation
  </li>
  <li className="flex items-center gap-2">
    <Check className="text-green-600 w-5 h-5" /> Styling
  </li>
</ul>


          <p className="text-gray-700 leading-relaxed mb-8">
            I specialize in developing and maintaining websites that users need, 
            focusing on performance, design, and functionality.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition"
            >
              Portfolio
            </a>
            <a
              href="/cv.pdf" // replace with your CV file path
              download
              className="px-6 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
