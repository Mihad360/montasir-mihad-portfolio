"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { RxModulzLogo } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/router";

const Navbar = () => {
  const linkRefs = useRef([]);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null); // Ref for mobile menu container
  // const router = useRouter();

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

    // Close mobile menu if clicked outside
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Attach the click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleReload = async (e) => {
    e.preventDefault(); // Prevent default link behavior
    // window.location.reload()
    // if(e.currentTarget.href){
    //   window.location.reload()
    // }
    window.location.href = await e.currentTarget.href; // Use window.location.href to reload
  };

// const handleReload = async (e) => {
//   e.preventDefault(); // Prevent default link behavior
//   const { href } = e.currentTarget;

//   if (href) {
//     // Navigate to the route first
//     await router.push(href);

//     // After navigating, reload the page or trigger any necessary refetch
//     window.location.reload(); // This will reload the page after navigation
//   }
// };


  return (
    <div>
      <div>
        <div className="flex items-center gap-5 md:gap-0 justify-between py-4 border-b-gray-500 border-b bg-slate-900 bg-opacity-60 rounded-b-lg px-5">
          {/* Logo */}
          <div className="text-3xl md:text-4xl lg:text-5xl text-white">
            <p>
              <RxModulzLogo />
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2 md:gap-4 lg:gap-8 text-white uppercase">
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
                    pathname === "/contactme"
                      ? "text-fuchsia-600 font-bold"
                      : ""
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

          {/* Mobile Menu */}
          <div className="block md:hidden">
            <button
              className="text-white text-2xl"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            {isMobileMenuOpen && (
              <div
                ref={mobileMenuRef} // Assign the ref to the mobile menu container
                className="absolute top-16 right-0 bg-slate-900 bg-opacity-90 text-white p-5 rounded-lg shadow-lg"
              >
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link href="/" onClick={handleReload}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" onClick={handleReload}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" onClick={handleReload}>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/contactme" onClick={handleReload}>
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
