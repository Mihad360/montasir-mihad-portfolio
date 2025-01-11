"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import ProjectBanner from "@/components/projectpages/ProjectBanner";
import { getProjects } from "@/components/projectpages/api/getProjectData";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) => project.skills.includes(selectedTech));

  return (
    <div className="pb-16 pt-28 max-w-7xl mx-auto">
      <ProjectBanner />
      <h1 className="text-white text-3xl font-bold text-center mb-10">
        My Projects
      </h1>

      <div className="flex justify-center mb-10 space-x-4">
        {["All", "React", "Next.js"].map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-6 py-2 text-base md:text-lg font-semibold rounded-full transition-all duration-300 ${
              selectedTech === tech
                ? "bg-fuchsia-600 text-white shadow-lg transform scale-105"
                : "bg-gray-800 text-white hover:bg-fuchsia-600"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-gray-900 rounded-xl shadow-lg p-4"
            >
              <Image
                width={500}
                height={500}
                src={project.image}
                alt={project.title}
                className="h-52 rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold text-white mt-4">
                {project.title}
              </h3>
              <div className="text-end">
              <Link
                href={`/projects/${project?._id}`}
                className="text-fuchsia-400 font-semibold hover:text-fuchsia-600 inline-block mt-4 border border-fuchsia-600 py-1 px-4 rounded-2xl"
              >
                View Details &rarr;
              </Link>
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
