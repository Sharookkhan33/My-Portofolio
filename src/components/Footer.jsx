
// src/components/Footer.jsx
import React, { useState } from "react";
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import ContactModel from "./ContactModel";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          {/* Replace this with your actual logo */}
         <img src="public\assets\Screenshot 2025-08-17 215201.png" alt="logo"  width="105" height="35" />
          
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 mt-6 md:mt-0 text-gray-600 text-sm">
          <a href="#about" className="hover:text-black">About Me</a>
          <a href="#projects" className="hover:text-black">Featured Projects</a>
          <a href="#testimonials" className="hover:text-black">Testimonials</a>
          <a  onClick={() => setIsModalOpen(true)} className="hover:text-black">Contact Me</a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-3 mt-6 md:mt-0">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-200 mt-6 py-4 text-center text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between px-6">
        <p>© Created by <span className="font-semibold">Adam Smith</span></p>
        <p className="mt-2 md:mt-0 font-semibold">All Rights Reserved</p>
      </div>
      <ContactModel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
};

export default Footer;
