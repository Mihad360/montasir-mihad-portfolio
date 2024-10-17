"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { CustomEase } from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25,1,0.5,1");

const Banner = () => {
  const logoRef = useRef(null);

  const onLogoEnter = () => {
    const currentColor = logoRef.current.getAttribute("data-color");
    const logosvg = logoRef.current.firstChild.firstChild;
    const nextColor =
      currentColor === "#0c5076"
        ? "#006661"
        : currentColor === "#006661"
        ? "#720165"
        : "#0c5076";

    logoRef.current.setAttribute("data-color", nextColor);
    gsap.to(logosvg, {
      backgroundColor: currentColor,
      duration: 0.5,
      ease: "power1.out",
    });
  };

  const onLogoLeave = () => {
    const logoSvg = logoRef.current.firstChild.firstChild;
    gsap.to(logoSvg, {
      backgroundColor: "#4a30ab",
      duration: 0.5,
      ease: "power1.out",
    });
  };

  useEffect(() => {
    const titles = document.querySelectorAll('.h_title')
    const tl = gsap.timeline({defaults: {duration: 1}})
    titles.forEach((title, index)=>{
      const el = title.querySelectorAll('span span')
      const delay = index * 0.08
      tl.to(
        el,
        {
          y: 0,
          duration: 2,
          ease: 'cubic-text',
        },
        delay
      )
    })
    return () => {}
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between pt-12 px-5">
        <div className="text-white">
          <h1 className="h_title relative">
            <span className="overflow-hidden inline-block">
              <span className="text-2xl tracking-widest translate-y-full inline-block">
                Hi, I am&nbsp;
              </span>
            </span>
          </h1>
          <h1 className="h_title text-9xl relative leading-[90%]">
            <span className="overflow-hidden inline-block">
              <span className="pt-5 tracking-widest translate-y-full inline-block">
                Montasir&nbsp;
              </span>
            </span>
          </h1>
          <h1 className="h_title text-9xl relative leading-[90%]">
            <span className="overflow-hidden inline-block">
              <span className="pt-3 tracking-widest translate-y-full inline-block">
                Ahmed&nbsp;
              </span>
            </span>
          </h1>
          <h1 className="h_title text-9xl relative leading-[90%]">
            <span className="overflow-hidden inline-block">
              <span className="pt-3 tracking-widest translate-y-full inline-block">
                Mihad&nbsp;
              </span>
            </span>
          </h1>
          <p className="uppercase text-lg pt-4 pl-1">
            <TypeAnimation
              sequence={[
                "Front-end Developer",
                2000,
                "MERN Stack Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>
        </div>
        <div
          className="pointer-event-auto cursor-pointer leading-none transition-height [&>p]:w-[500px] [&>p]:duration-500 [&>p]:ease-out"
          data-color="#0c5076"
          ref={logoRef}
          onMouseEnter={onLogoEnter}
          onMouseLeave={onLogoLeave}
        >
          <p>
            <Image
              className="w-[100%] h-full bg-[#4a30ab] rounded-full shadow-2xl shadow-gray-800"
              width={500}
              height={500}
              src="https://i.ibb.co.com/tpzmdMJ/image-1-removebg-preview.png"
              alt="profile"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
