"use client";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";

const AllSkills = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    {
      id: 1,
      title: "HTML",
      percentage: 90,
      animation: "fade-down-right",
      description: "Markup language for structuring web content.",
      image:
        "https://i.ibb.co.com/rGMkbqb/download-html5-round-logo-icon-png-701751694771801xidtztxanv-removebg-preview.png",
    },
    {
      id: 2,
      title: "CSS",
      percentage: 80,
      animation: "fade-up",
      description: "Stylesheets for designing and enhancing websites.",
      image:
        "https://i.ibb.co.com/wRt2Lfp/logo-2582747-1280-removebg-preview.png",
    },
    {
      id: 3,
      title: "JavaScript",
      percentage: 65,
      animation: "fade-down-left",
      description: "Programming language for web interactivity.",
      image: "https://i.ibb.co.com/zPRqm1d/5453022-removebg-preview.png",
    },
    {
      id: 4,
      title: "React js",
      percentage: 80,
      animation: "fade-right",
      description: "Library for building modern UI components.",
      image:
        "https://i.ibb.co.com/jw7fSTc/9fbbaeb59401e5630c288dce9ef57e03-removebg-preview.png",
    },
    {
      id: 5,
      title: "Node.js",
      percentage: 65,
      animation: "fade-up",
      description: "Runtime environment for server-side JavaScript.",
      image: "https://i.ibb.co.com/7GVQMk6/download-removebg-preview-3.png",
    },
    {
      id: 6,
      title: "Firebase",
      percentage: 75,
      animation: "fade-left",
      description: "One of the popular authentication service provider.",
      image: "https://i.ibb.co.com/C8ftmMt/download-removebg-preview-2.png",
    },
    {
      id: 7,
      title: "MongoDB",
      percentage: 60,
      animation: "fade-up-right",
      description: "NoSQL database for flexible data storage.",
      image: "https://i.ibb.co.com/3FHS5WQ/download-removebg-preview-1.png",
    },
    {
      id: 8,
      title: "Tailwind CSS",
      percentage: 85,
      animation: "fade-up",
      description: "Utility-first framework for rapid UI development.",
      image: "https://i.ibb.co.com/hmDQB7C/download-removebg-preview-4.png",
    },
    {
      id: 9,
      title: "Next Js",
      percentage: 60,
      animation: "fade-up-left",
      description: "Next js is big brother of React js.",
      image: "https://i.ibb.co.com/SK0S8Ws/download-removebg-preview.png",
    },
  ];

  const [animatedPercentages, setAnimatedPercentages] = useState(
    skills.map(() => 0) // Initial percentages set to 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedPercentages((prev) =>
        prev.map((value, index) =>
          value < skills[index].percentage ? value + 1 : value
        )
      );
    }, 50); // Adjust speed of animation by changing interval duration

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="max-w-7xl mx-auto pb-20">
      <h1 className="uppercase text-3xl text-center text-white pt-12 font-semibold pb-16">
        My Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 lg:px-0">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            data-aos={skill.animation}
            className="p-5 rounded-lg shadow-lg bg-slate-900 border border-gray-700 text-center text-white hover:scale-105 transition-transform duration-300 flex  items-center gap-5"
          >
            <div>
              <Image
                src={skill.image}
                width={300}
                height={200}
                alt={skill.title}
                className="w-28 h-28 md::w-40 md::h-20 object-contain"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg md:text-2xl font-bold mb-2">{skill.title}</h2>
              <p className="text-xs md:text-sm text-gray-400 mb-4">{skill.description}</p>
            </div>
            <div className="w-24">
              <div className="relative w-16 h-16 lg:w-24 lg:h-24 mx-auto">
                <div
                  className="circle"
                  style={{
                    background: `conic-gradient(#006661 ${animatedPercentages[index]}%, #374151 0%)`,
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm md:text-xl font-bold text-white">
                    {animatedPercentages[index]}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
