"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { RxModulzLogo } from "react-icons/rx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const linkRefs = useRef([]);
  const pathname = usePathname();

  const wrapLetters = (text) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        className="inline-block opacity-0 transition-transform duration-400"
      >
        {letter === " " ? "\u00A0" : letter} {/* Non-breaking space for wrapping */}
      </span>
    ));
  };

  useEffect(() => {
    // Animate each letter from top to bottom on mount
    linkRefs.current.forEach((el) => {
      const letters = el.querySelectorAll("span");
      letters.forEach((letter, letterIndex) => {
        gsap.fromTo(
          letter,
          { y: "-100%", opacity: 0 }, // Start above the letter and fully transparent
          {
            y: "0%", // End at the natural position
            opacity: 1, // Fully visible
            duration: 0.5, // Duration for each letter
            ease: "power1.out", // Easing function
            delay: letterIndex * 0.1, // Staggered delay based on the letter index
          }
        );
      });
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="header">
        <div className="header_container flex items-center justify-between py-4 border-b-gray-500 border-b fixed z-30 w-full max-w-7xl bg-slate-500 bg-opacity-10 rounded-b-lg px-5">
          <div className="header_logo text-5xl text-white">
            <RxModulzLogo />
          </div>
          <div className="relative">
            <ul className="flex items-center gap-6 text-white uppercase [&>li]:text-base lg:[&>li]:text-lg [&>li]:duration-200 [&>li]:ease-out">
              {/* Rendering each link manually with wrapped letters */}
              <li ref={(el) => (linkRefs.current[0] = el)}>
                <Link
                  className={`inline-block group relative leading-6 ${
                    pathname === "/"
                      ? "text-blue-600 font-bold"
                      : ""
                  }`}
                  href="/"
                >
                  <span className="inline-block group-hover:text-blue-600 transition duration-300 hover:border-b-blue-600 hover:border-b-2 px-1">
                    {wrapLetters("Home")}
                  </span>
                </Link>
              </li>
              <li ref={(el) => (linkRefs.current[1] = el)}>
                <Link
                  className={`inline-block group relative leading-6 ${
                    pathname === "/about" ? "text-blue-600 font-bold" : ""
                  }`}
                  href="/about"
                >
                  <span className="inline-block group-hover:text-blue-600 transition duration-300 hover:border-b-blue-600 hover:border-b-2 px-1">
                    {wrapLetters("About")}
                  </span>
                </Link>
              </li>
              <li ref={(el) => (linkRefs.current[2] = el)}>
                <Link
                  className={`inline-block group relative leading-6 ${
                    pathname === "/projects" ? "text-blue-600 font-bold" : ""
                  }`}
                  href="/projects"
                >
                  <span className="inline-block group-hover:text-blue-600 transition duration-300 hover:border-b-blue-600 hover:border-b-2 px-1">
                    {wrapLetters("Projects")}
                  </span>
                </Link>
              </li>
              <li ref={(el) => (linkRefs.current[3] = el)}>
                <Link
                  className={`inline-block group relative leading-6 ${
                    pathname === "/contactme" ? "text-blue-600 font-bold" : ""
                  }`}
                  href="/contactme"
                >
                  <span className="inline-block group-hover:text-blue-600 transition duration-300 hover:border-b-blue-600 hover:border-b-2 px-1">
                    {wrapLetters("Contact Me")} {/* Added space here */}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
