// src/components/Services.jsx
import React from "react";

const services = [
  {
    title: "Frontend Development",
    desc: "Crafting beautiful, responsive, and user-friendly web interfaces with React, Tailwind, and Bootstrap.",
    img: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXFxd3RvMjl4Y210bWd2a2c5aWNic2N3MXZ5MjZrNHFseXFjbGNycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QVUL20w0FwLKnQuX4D/giphy.gif", // website UI
  },
  {
    title: "Backend Development",
    desc: "Building secure, scalable, and high-performance backend systems using Node.js and Express.",
    img: "https://minnim.tv/proyectos/thecreativenet/backend.gif", // backend coding
  },
  {
    title: "Database Management",
    desc: "Designing and managing efficient databases with MongoDB and SQL for seamless data handling.",
    img: "https://www.bing.com/th/id/OGC.07350f318c29fdb331f33d415675a46f?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fbmtraders.com%2fimages%2fDatabase%2fDatabase-5.gif&ehk=LxuX%2bjJ6P7GOltRxByaUD4fXK9Lr%2blPdviQ4O4zWlXE%3d", // database server
  },
  {
    title: "API Development",
    desc: "Developing RESTful APIs to connect frontends with backends and ensure smooth communication.",
    img: "https://miro.medium.com/max/1400/1*2I5LcLiKtKJatDJVRpaYyA.gif", // api concept
  },
  {
    title: "Website Maintenance",
    desc: "Providing regular updates, bug fixes, and performance optimizations to keep your site running smoothly.",
    img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExamR1MnBxamprYTN5aWE5N2VxOW9qazZiYXJkbTNvNngwZXJxZ2VjbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif", // fixing bugs
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive, visually appealing, and user-centered layouts for web applications.",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/be510767817393.5b472244e895f.gif", // UI/UX
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading + small description */}
        <div className="mb-12 text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat mb-4">
            My <span className="text-indigo-600">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            I provide a complete set of web development services – from crafting
            pixel-perfect UIs to building robust backends and maintaining
            websites. Here’s what I can help you with:
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
            >
              {/* Background image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
