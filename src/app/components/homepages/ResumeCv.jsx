import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye, FaFileDownload } from "react-icons/fa";

const ResumeCv = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <h1 className="uppercase text-3xl text-center text-white pt-12 font-semibold">
        Resume - CV
      </h1>
      <div className="flex justify-center gap-20 text-gray-100 pt-10 pb-12">
        <div className="text-center p-10 ">
          <h1 className="text-2xl font-semibold uppercase pb-3 text-gray-400">
            Resume
          </h1>
          <h1 className="text-xl">
            A one-page document that highlights your most relevant skills and
            experiences for a specific job.
          </h1>
          <ul className="px-16 pt-3 text-gray-400">
            <li className="list-disc">
              Includes all academic achievements, publications, awards, and
              professional experience.
            </li>
            <li className="list-disc">
              Particularly common for roles in research, education, or global
              positions.
            </li>
          </ul>
          <div className="flex flex-col md:flex-row items-center gap-5 justify-center pt-5">
            <Link
              href="https://drive.google.com/file/d/1oVnQKFYHSPKa2V7KlGWXClJ8gnSGeyTU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-medium  bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-md transition hover:duration-200 hover:scale-105"
            >
              <FaEye />
              <span>
                See Resume
              </span>
            </Link>
            <Link
              target="_blank"
              href="/Montasir-Mihad-Resume (1).pdf"
              download="Montasir-Mihad-Resume (1).pdf"
              className="flex items-center gap-3 text-lg font-medium  bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-md transition hover:duration-200 hover:scale-105"
            >
              <FaFileDownload />
              <span className="">
                Download
              </span>
            </Link>
          </div>
          {/* <div className="px-10 py-5">
            <Image
              className="mx-auto"
              width={400}
              height={400}
              src="https://i.ibb.co.com/VSrrymh/Screenshot-2024-10-17-214222-removebg-preview.png"
              alt=""
            />
          </div> */}
        </div>

        <div className="text-center p-10 ">
          <h1 className="text-2xl font-semibold uppercase pb-3 text-gray-400">
            CV
          </h1>
          <h1 className="text-xl ">
            A more detailed document that outlines your entire career history, often used in academic or research fields.
          </h1>
          <ul className="px-16 pt-3 text-gray-400">
            <li className="list-disc">
              Tailored to each job, emphasizing the skills and experience most
              relevant to the position.
            </li>
            <li className="list-disc">
              Resumes are usually one to two pages, making it easy for employers
              to quickly assess your fit.
            </li>
          </ul>
          <div className="flex flex-col md:flex-row items-center gap-5 justify-center pt-5">
            <Link
              href="https://drive.google.com/file/d/1I5EHxWMlrFNFD96NsuLSKTQVVpG5nqmT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-medium  bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-md transition hover:duration-200 hover:scale-105"
            >
              <FaEye />
              <span>
                See CV
              </span>
            </Link>
            <Link
              target="_blank"
              href="/CURRICULUM VITAE OF MIHAD.pdf"
              download="CURRICULUM VITAE OF MIHAD.pdf"
              className="flex items-center gap-3 text-lg font-medium  bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-md transition hover:duration-200 hover:scale-105"
            >
              <FaFileDownload />
              <span>
                Download
              </span>
            </Link>
          </div>
          {/* <div className="px-10 py-5">
            <Image
              className="mx-auto"
              width={400}
              height={400}
              src="https://i.ibb.co.com/VSrrymh/Screenshot-2024-10-17-214222-removebg-preview.png"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ResumeCv;
