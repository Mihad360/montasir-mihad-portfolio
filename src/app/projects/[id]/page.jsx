"use client";
import { getProjects } from "@/components/projectpages/api/getProjectData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaLocationArrow } from "react-icons/fa";

const ProjectDetails = ({ params }) => {
  const [projects, setProjects] = useState([]);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const { id } = params;
  const project = projects.find((item) => item._id === id);

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

  return (
    <div className="py-28 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="relative flex-1">
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg w-full h-96">
              <div className="w-10 h-10 border-4 border-fuchsia-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={project?.image}
            alt={project?.title}
            width={1000}
            height={1000}
            className={`rounded-lg mb-8 w-full h-full ${
              isImageLoading ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
            onLoadingComplete={() => setIsImageLoading(false)}
          />
        </div>

        {/* Details Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-4">
            {project?.title}
          </h1>
          <p className="text-gray-400 mb-2">
            {project?.description[0]}
          </p>
          <p className="text-gray-400 mb-2">
            {project?.description[1]}
          </p>
          <p className="text-gray-400 mb-6">
            {project?.description[2]}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project?.skills?.map((skill) => (
              <span
                key={skill}
                className="bg-gray-800 text-fuchsia-400 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {project?.clientGithubLink && (
              <a
                href={project?.clientGithubLink}
                className="flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-600 border border-fuchsia-600 px-4 py-2 rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Client GitHub Code <FaLocationArrow />
              </a>
            )}
            {project?.serverGithubLink && (
              <a
                href={project?.serverGithubLink}
                className="flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-600 border border-fuchsia-600 px-4 py-2 rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Server GitHub Code <FaLocationArrow />
              </a>
            )}
            <a
              href={project?.link}
              className="flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-600 border border-fuchsia-600 px-4 py-2 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Project <FaLocationArrow />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
