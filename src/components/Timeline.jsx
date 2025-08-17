// src/components/Timeline.jsx
import React from "react";

const timelineData = [
  {
    id: "01",
    section: "Education",
    year: "2019",
    title: "Higher Secondary Education (HSE)",
    desc: "Completed Higher Secondary Education specializing in Biology Science. Built a strong foundation in scientific thinking and analytical skills, which later helped in problem-solving and logical reasoning for programming.",
  },
  {
    id: "02",
    section: "Education",
    year: "2021",
    title: "Bachelor of Science (Physics & Computer Applications)",
    desc: "Explored both Physics and Computer Applications during my undergraduate degree. This broadened my understanding of core scientific concepts, computational logic, and real-world applications of programming.",
  },
  {
    id: "03",
    section: "Education",
    year: "2025",
    title: "Full Stack Web Development",
    desc: "Pursued a Full Stack Web Development course focusing on React, Node.js, Express, and MongoDB. Learned to design and maintain complete web applications, from backend APIs to responsive UI with Tailwind and Bootstrap.",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className=" bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat mb-12 text-center">
          My <span className="text-indigo-600">Journey</span>
        </h2>

        {/* Horizontal timeline */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {timelineData.map((item) => (
            <div key={item.id} className="flex-1 text-center">
              {/* Serial number */}
              <p className="text-sm text-gray-400 font-semibold mb-1">
                {item.id} / {item.section}
              </p>

              {/* Year */}
              <span className="text-4xl font-extrabold text-indigo-500 block mb-2">
                {item.year}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
