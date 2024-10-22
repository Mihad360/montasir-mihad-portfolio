"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProjectBanner from "./ProjectBanner";
import { getProjects } from "./api/getProjectData";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [projects, setProjects] = useState([])
  useEffect(()=>{
    const fetchProjects = async () =>{
      try {
        const fetchProjects = await getProjects()
        setProjects(fetchProjects)
      } catch (error) {
        console.log(error);
      }
    }
    fetchProjects()
  },[])

  // Correct filtering method
  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) => project.skills.includes(selectedTech));

  return (
    <div className="px-4 pb-16">
      <ProjectBanner></ProjectBanner>

      <h1 className="text-white text-3xl font-bold text-center mb-10">
        My Projects
      </h1>

      {/* Filters */}
      <div className="flex justify-center mb-10 space-x-4">
        {["All", "React", "Next.js"].map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
              selectedTech === tech
                ? "bg-fuchsia-600 text-white shadow-lg transform scale-105"
                : "bg-gray-800 text-white hover:bg-fuchsia-600"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-gray-900 rounded-xl shadow-lg"
            >
              <Image
                width={500}
                height={500}
                src={project.image}
                alt="image"
                className="h-52"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <ul className="text-gray-400 mb-6 pl-3 pt-3">
                  <li className="list-disc">{project.description[0]}</li>
                  <li className="list-disc">{project.description[1]}</li>
                  <li className="list-disc">{project.description[2]}</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800 text-fuchsia-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-fuchsia-400 font-semibold hover:text-fuchsia-600 inline-block mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-white text-xl mt-10 h-screen">
            There are no projects available for this skill.
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
