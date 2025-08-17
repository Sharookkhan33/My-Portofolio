// src/components/Contact.jsx
import React from "react";
import { Mail, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-indigo-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold font-montserrat mb-4">
          Hire Me for Your Project
        </h2>
        <p className="text-gray-700 mb-8">
          Contact me in any convenient way to discuss the details.
        </p>

        <div className="border-t border-gray-400 w-full max-w-3xl mx-auto mb-12"></div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {/* Email */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="mailto:adamsmith@email.com"
              className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md mb-4 hover:scale-110 transition"
            >
              <Mail className="w-8 h-8 text-black" />
            </a>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-1">
              Write Me –
            </p>
            <a
              href="mailto:adamsmith@email.com"
              className="font-semibold text-black hover:underline"
            >
              shanisharu77@gmail.com
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md mb-4 hover:scale-110 transition"
            >
              <Instagram className="w-8 h-8 text-black" />
            </a>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-1">
              Follow Me –
            </p>
            <a
              href="https://www.instagram.com/sharook_khan01/#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black hover:underline"
            >
              instagram.com/Sharook khan
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md mb-4 hover:scale-110 transition"
            >
              <Linkedin className="w-8 h-8 text-black" />
            </a>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-1">
              Find Me –
            </p>
            <a
              href="https://www.linkedin.com/in/mohammed-sharook-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black hover:underline"
            >
              linkedin.com/in/mohammed-sharook-khan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
