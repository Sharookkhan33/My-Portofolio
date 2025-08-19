// src/components/Projects.jsx
import React from "react";
import { Github } from "lucide-react";

const projects = [
 
  {
    title: "Bazario - MultiVendor Marketplace",
    desc: "Bazario is a full-featured e-commerce marketplace where multiple vendors can list products, manage orders, and track sales. It includes three roles: Admin (manages vendors & users), Vendor (manages their own products & orders), and User (shops with cart & payment). Features product search, secure authentication, real-time order tracking, and scalable backend using the MERN stack.",
    img: "https://res.cloudinary.com/dujealnld/image/upload/v1755579139/Screenshot_2025-08-17_193326_fqqnnw.png",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Bootstrap", "Tailwind"],
    link: "https://github.com/Sharookkhan33/Bazario.git",
    date: "01 / May , 2025",
  }, 
  {
    title: "E-Commerce Platform",
    desc: "An E commerce platform,user can view and addd to cart and checkout the product. Features authentication, markdown support, and REST API backend.",
    img: "https://res.cloudinary.com/dujealnld/image/upload/v1755579142/Screenshot_2025-08-17_194238_wyaoif.png",
    tech: [  "React", "Node.js","JWT", "Bootstrap","Express", "MongoDB"],
    link: "https://github.com/Sharookkhan33/E-commerce1.gitm",
    date: "01 / Mar , 2025",
  },
  {
    title: "Trendy Cart- E-Commerce",
    desc: "a nice ui for an e commerce platform based on frontend only, features Cart and Navbar and categorised products",
    img: "https://res.cloudinary.com/dujealnld/image/upload/v1755579149/Screenshot_2025-08-17_200401_wtfcyx.png",
    tech: ["React", "Node.js", "Bootstrap"],
    link: "https://github.com/Sharookkhan33/E-commerce-App.git",
    date: "01 / Jan , 2025",
  },
   {
    title: "Portfolio Website",
    desc: "A personal portfolio built with React, Tailwind CSS, and Framer Motion. It showcases my skills, projects, and services in a modern and responsive design.",
    img: "https://res.cloudinary.com/dujealnld/image/upload/v1755579459/Screenshot_2025-08-19_102711_omndkm.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://github.com/yourgithub/portfolio",
    date: "10 / Aug ,2025",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-indigo-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat mb-4 text-black">
            Featured Projects
          </h2>
          <p className="text-gray-800 max-w-2xl">
            I treat each completed project with special trepidation.  
            See some of the featured projects below.
          </p>
          <div className="border-t border-gray-400 w-full max-w-6xl mx-auto mb-12"></div>
        </div>

        {/* Project list */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg overflow-hidden p-6 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-lg shadow-md w-full object-cover h-64 md:h-80"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-left">
                {/* Date */}
                <span className="text-sm text-gray-500 font-medium">{project.date}</span>

                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>

                {/* Tech used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  <Github size={18} /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
