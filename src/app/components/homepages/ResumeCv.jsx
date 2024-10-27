"use client";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaEye, FaFileDownload } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ResumeCv = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const initScrollAnimations = () => {
      const textElements = document.querySelectorAll(".scroll-text");
      const buttonElements = document.querySelectorAll(".scroll-button");

      textElements.forEach((text, index) => {
        gsap.fromTo(
          text,
          { opacity: 0.1, y: 100 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: text,
              start: "top bottom",
              end: "top 70%",
              scrub: true,
              toggleActions: "play reverse play reverse",
            },
            delay: index * 2,
          }
        );
      });

      buttonElements.forEach((button, index) => {
        gsap.fromTo(
          button,
          { opacity: 0.1, y: 100 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: button,
              start: "top bottom",
              end: "top 70%",
              scrub: true,
              toggleActions: "play reverse play reverse",
            },
            delay: (textElements.length * 0.1) + index * 0.1,
          }
        );
      });
    };

    initScrollAnimations();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto lg:px-5">
      <p className="uppercase text-3xl text-center text-white pt-12 font-semibold">
        Resume - CV
      </p>
      <div className="flex flex-col md:flex-row justify-center md:gap-3 lg:gap-10 text-gray-100 pt-10 pb-12">
        <section className="hero">
          <div className="hero_wrapper">
            <div className="hero_paragraph text-center p-5 md:p-10">
              <p className="hero_para_text text-2xl md:text-3xl font-semibold uppercase pb-3 text-gray-400 scroll-text">
                Resume
              </p>
              <p className="text-lg md:text-xl scroll-text">
                A one-page document that highlights your most relevant skills and experiences for a specific job.
              </p>
              <ul className="px-8 md:px-16 pt-3 text-gray-400 text-sm md:text-base">
                <li className="list-disc scroll-text">
                  Includes all academic achievements, publications, awards, and professional experience.
                </li>
                <li className="list-disc scroll-text">
                  Particularly common for roles in research, education, or global positions.
                </li>
              </ul>
              <div className="flex flex-col md:flex-row items-center gap-5 justify-center pt-5">
                <Link
                  href="https://drive.google.com/file/d/1oVnQKFYHSPKa2V7KlGWXClJ8gnSGeyTU/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg font-medium bg-purple-700 hover:bg-purple-600 px-5 py-2 rounded-md transition hover:duration-200 hover:scale-105 scroll-button"
                >
                  <FaEye />
                  <span>Resume</span>
                </Link>
                <Link
                  target="_blank"
                  href="/Montasir-Mihad-Resume (1).pdf"
                  download="Montasir-Mihad-Resume (1).pdf"
                  className="flex items-center gap-3 text-lg font-medium bg-purple-700 hover:bg-purple-600 px-5 py-2 rounded-md transition hover:duration-200 hover:scale-105 scroll-button"
                >
                  <FaFileDownload />
                  <span>Download</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-5 md:p-10">
          <p className="text-2xl md:text-3xl font-semibold uppercase pb-3 text-gray-400 scroll-text">
            CV
          </p>
          <p className="text-lg md:text-xl scroll-text">
            A more detailed document that outlines your entire career history, often used in academic or research fields.
          </p>
          <ul className="px-8 md:px-16 pt-3 text-gray-400 text-sm md:text-base">
            <li className="list-disc scroll-text">
              Tailored to each job, emphasizing the skills and experience most relevant to the position.
            </li>
            <li className="list-disc scroll-text">
              Resumes are usually one to two pages, making it easy for employers to quickly assess your fit.
            </li>
          </ul>
          <div className="flex flex-col md:flex-row items-center gap-5 justify-center pt-5">
            <Link
              href="https://drive.google.com/file/d/1I5EHxWMlrFNFD96NsuLSKTQVVpG5nqmT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-medium bg-purple-700 hover:bg-purple-600 px-5 py-2 rounded-md transition hover:duration-200 hover:scale-105 scroll-button"
            >
              <FaEye />
              <span>CV</span>
            </Link>
            <Link
              target="_blank"
              href="/CURRICULUM VITAE OF MIHAD.pdf"
              download="CURRICULUM VITAE OF MIHAD.pdf"
              className="flex items-center gap-3 text-lg font-medium bg-purple-700 hover:bg-purple-600 px-5 py-2 rounded-md transition hover:duration-200 hover:scale-105 scroll-button"
            >
              <FaFileDownload />
              <span>Download</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCv;
