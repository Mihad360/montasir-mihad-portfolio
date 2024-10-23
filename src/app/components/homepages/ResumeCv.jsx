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
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness value
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Initialize GSAP animation on scroll
    const initScrollAnimations = () => {
      // Select all text elements and buttons
      const textElements = document.querySelectorAll(".scroll-text");
      const buttonElements = document.querySelectorAll(".scroll-button");

      // Loop through each text element and apply dark to light animation
      textElements.forEach((text, index) => {
        gsap.fromTo(
          text,
          { opacity: 0.1, y: 100 }, // Start dark (low opacity) and off-screen
          {
            opacity: 1, // Light (full opacity) as you scroll down
            y: 0, // Bring into view
            scrollTrigger: {
              trigger: text,
              start: "top bottom", // Start when the top of the text hits the bottom of the viewport
              end: "top 70%", // End when the top hits 70% of the viewport height
              scrub: true, // Allow smooth transition as you scroll
              toggleActions: "play reverse play reverse", // Play animation down, reverse on scroll up
            },
            delay: index * 2, // Delay for serial animations
          }
        );
      });

      // Animate buttons with dark to light effect after text
      buttonElements.forEach((button, index) => {
        gsap.fromTo(
          button,
          { opacity: 0.1, y: 100 }, // Start dark (low opacity) and hidden below screen
          {
            opacity: 1, // Light (full opacity) as you scroll down
            y: 0, // Bring into view
            scrollTrigger: {
              trigger: button,
              start: "top bottom", // Start when the top of the button hits the bottom of the viewport
              end: "top 70%", // End when the button is 70% into the viewport
              scrub: true, // Allow smooth transition as you scroll
              toggleActions: "play reverse play reverse", // Play down and reverse up
            },
            delay: (textElements.length * 0.1) + index * 0.1, // Animate after text
          }
        );
      });
    };

    // Initialize the scroll animations
    initScrollAnimations();

    // Cleanup function to remove event listeners and kill ScrollTriggers
    return () => {
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5">
      <p className="uppercase text-3xl text-center text-white pt-12 font-semibold">
        Resume - CV
      </p>
      <div className="flex justify-center gap-20 text-gray-100 pt-10 pb-12">
        <section className="hero">
          <div className="hero_wrapper">
            <div className="hero_paragraph text-center p-10">
              <p className="hero_para_text text-2xl font-semibold uppercase pb-3 text-gray-400 scroll-text">
                Resume
              </p>
              <p className="text-xl scroll-text">
                A one-page document that highlights your most relevant skills
                and experiences for a specific job.
              </p>
              <ul className="px-16 pt-3 text-gray-400">
                <li className="list-disc scroll-text">
                  Includes all academic achievements, publications, awards, and
                  professional experience.
                </li>
                <li className="list-disc scroll-text">
                  Particularly common for roles in research, education, or
                  global positions.
                </li>
              </ul>
              <div className="flex flex-col md:flex-row items-center gap-5 justify-center pt-5">
                <Link
                  href="https://drive.google.com/file/d/1oVnQKFYHSPKa2V7KlGWXClJ8gnSGeyTU/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg font-medium bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-md transition hover:duration-200 hover:scale-105 scroll-button"
                >
                  <FaEye />
                  <span>See Resume</span>
                </Link>
                <Link
                  target="_blank"
                  href="/Montasir-Mihad-Resume (1).pdf"
                  download="Montasir-Mihad-Resume (1).pdf"
                  className="flex items-center gap-3 text-lg font-medium bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-md transition hover:duration-200 hover:scale-105 scroll-button"
                >
                  <FaFileDownload />
                  <span>Download</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-10">
          <p className="text-2xl font-semibold uppercase pb-3 text-gray-400 scroll-text">
            CV
          </p>
          <p className="text-xl scroll-text">
            A more detailed document that outlines your entire career history,
            often used in academic or research fields.
          </p>
          <ul className="px-16 pt-3 text-gray-400">
            <li className="list-disc scroll-text">
              Tailored to each job, emphasizing the skills and experience most
              relevant to the position.
            </li>
            <li className="list-disc scroll-text">
              Resumes are usually one to two pages, making it easy for employers
              to quickly assess your fit.
            </li>
          </ul>
          <div className="flex flex-col md:flex-row items-center gap-5 justify-center pt-5">
            <Link
              href="https://drive.google.com/file/d/1I5EHxWMlrFNFD96NsuLSKTQVVpG5nqmT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-medium bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-md transition hover:duration-200 hover:scale-105 scroll-button"
            >
              <FaEye />
              <span>See CV</span>
            </Link>
            <Link
              target="_blank"
              href="/CURRICULUM VITAE OF MIHAD.pdf"
              download="CURRICULUM VITAE OF MIHAD.pdf"
              className="flex items-center gap-3 text-lg font-medium bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-md transition hover:duration-200 hover:scale-105 scroll-button"
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
