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
        className="inline-block transition-transform duration-400"
      >
        {letter === " " ? "\u00A0" : letter}{" "}
      </span>
    ));
  };

  useEffect(() => {
    // Check if the screen width is 768px or larger
    if (window.innerWidth >= 768) {
      linkRefs.current.forEach((el) => {
        const letters = el.querySelectorAll("span");
        letters.forEach((letter, letterIndex) => {
          gsap.fromTo(
            letter,
            { y: "-100%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 0.5,
              ease: "power1.out",
              delay: letterIndex * 0.1,
            }
          );
        });
      });
    }
  }, []);

  const handleReload = (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.location.href = e.currentTarget.href; // Use window.location.href to reload
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="header">
        <div className="header_container flex items-center gap-5 md:gap-0 justify-between py-4 border-b-gray-500 border-b fixed z-50 w-full max-w-7xl bg-slate-500 bg-opacity-10 rounded-b-lg px-5">
          <div className="header_logo text-3xl md:text-4xl lg:text-5xl text-white">
            <p><RxModulzLogo /></p>
          </div>
          <div className="relative">
            <ul className="flex flex-wrap items-center gap-2 md:gap-4 lg:gap-8 text-white uppercase [&>li]:text-xs md:[&>li]:text-base lg:[&>li]:text-lg [&>li]:duration-200 [&>li]:ease-out">
              <li ref={(el) => (linkRefs.current[0] = el)}>
                <Link
                  className={`inline-block group relative leading-6 ${
                    pathname === "/" ? "text-fuchsia-600 font-bold" : ""
                  }`}
                  href="/"
                  onClick={handleReload}
                >
                  <span className="inline-block group-hover:text-fuchsia-600 transition duration-300 hover:border-b-fuchsia-600 hover:border-b-2 px-1">
                    {wrapLetters("Home")}
                  </span>
                </Link>
              </li>
              <li ref={(el) => (linkRefs.current[1] = el)}>
                <Link
                  className={`inline-block group relative leading-6 ${
                    pathname === "/about" ? "text-fuchsia-600 font-bold" : ""
                  }`}
                  href="/about"
                  onClick={handleReload}
                >
                  <span className="inline-block group-hover:text-fuchsia-600 transition duration-300 hover:border-b-fuchsia-600 hover:border-b-2 px-1">
                    {wrapLetters("About")}
                  </span>
                </Link>
              </li>
              <li ref={(el) => (linkRefs.current[2] = el)}>
                <Link
                  className={`inline-block group relative leading-6 ${
                    pathname === "/projects" ? "text-fuchsia-600 font-bold" : ""
                  }`}
                  href="/projects"
                  onClick={handleReload}
                >
                  <span className="inline-block group-hover:text-fuchsia-600 transition duration-300 hover:border-b-fuchsia-600 hover:border-b-2 px-1">
                    {wrapLetters("Projects")}
                  </span>
                </Link>
              </li>
              <li ref={(el) => (linkRefs.current[3] = el)}>
                <Link
                  className={`inline-block group relative leading-6 ${
                    pathname === "/contactme" ? "text-fuchsia-600 font-bold" : ""
                  }`}
                  href="/contactme"
                  onClick={handleReload}
                >
                  <span className="inline-block group-hover:text-fuchsia-600 transition duration-300 hover:border-b-fuchsia-600 hover:border-b-2 px-1">
                    {wrapLetters("Contact Me")}
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
