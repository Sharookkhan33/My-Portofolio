// src/components/Testimonials.jsx
import React from "react";
import { Quote } from "lucide-react"; // For quote icon
import Slider from "react-slick"; // Install with: npm install react-slick slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "I was struggling to debug an API issue, and he patiently guided me through it until everything worked smoothly.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sophia Lee",
      text: "He helped me set up my first React project when I was completely lost. Thanks to his support, I could finally start learning properly.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Brown",
      text: "Whenever I faced backend issues, he stepped in and explained solutions clearly. It really boosted my confidence.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Emma Wilson",
      text: "I needed help deploying my small website. He guided me step by step until it was live and running perfectly.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12 text-left">
          <h2 className="text-4xl font-extrabold font-montserrat mb-4">
            Words from my clients
          </h2>
          <p className="text-gray-700 max-w-2xl">
            Working with each client takes several months. I provide an
            individual approach and fresh solutions.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4">
              <div className="p-6 bg-green-100 rounded-xl shadow-md hover:shadow-lg transition h-full flex flex-col">
                <Quote className="text-indigo-500 w-8 h-8 mb-4" />
                <p className="text-gray-700 italic mb-4">“{t.text}”</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
