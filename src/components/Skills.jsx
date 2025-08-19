import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// React Icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";

const skills = [
  { name: "React", desc: "Frontend library for building UI with components.", icon: <FaReact size={50} color="#61DBFB" /> },
  { name: "Node.js", desc: "Backend runtime environment for JavaScript.", icon: <FaNodeJs size={50} color="#68A063" /> },
  { name: "MongoDB", desc: "NoSQL database for scalable applications.", icon: <SiMongodb size={50} color="#4DB33D" /> },
  { name: "Express.js", desc: "Minimal backend framework for Node.js.", icon: <SiExpress size={50} color="#000000" /> },
  { name: "Bootstrap", desc: "CSS framework for responsive layouts.", icon: <FaBootstrap size={50} color="#7952B3" /> },
  { name: "Tailwind CSS", desc: "Utility-first CSS framework.", icon: <SiTailwindcss size={50} color="#38B2AC" /> },
  { name: "HTML", desc: "Markup language for structuring web pages.", icon: <FaHtml5 size={50} color="#E34C26" /> },
  { name: "CSS", desc: "Stylesheet language for styling web pages.", icon: <FaCss3Alt size={50} color="#264de4" /> },
  { name: "JavaScript", desc: "Core language of the web.", icon: <SiJavascript size={50} color="#F7DF1E" /> },
  { name: "Python", desc: "High-level programming language for backend, AI, and more.", icon: <FaPython size={50} color="#3776AB" /> },
];

const Skills = () => {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (name) => {
    setFlipped((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat mb-12">
          My <span className="text-indigo-600">Skills</span>
        </h2>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="pb-10"
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.name}>
              <div
                className="group [perspective:1000px] w-full h-48 cursor-pointer"
                onClick={() => toggleFlip(skill.name)} // flip on tap/click
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                    flipped[skill.name] ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                  }`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white border rounded-xl shadow-lg text-lg font-bold text-gray-800 [backface-visibility:hidden]">
                    {skill.icon}
                    <span className="mt-2">{skill.name}</span>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 flex items-center justify-center bg-indigo-600 text-white rounded-xl p-4 text-sm [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {skill.desc}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
