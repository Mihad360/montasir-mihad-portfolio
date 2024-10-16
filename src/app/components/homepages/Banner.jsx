"use client";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {

    const logoRef = useRef(null)

    const onLogoEnter = () =>{
        const currentColor = logoRef.current.getAttribute('data-color')
        const logosvg = logoRef.current.firstChild.firstChild
        const nextColor = currentColor === '#0c5076' ? '#006661' : currentColor === '#006661' ? '#720165' : '#0c5076'

        logoRef.current.setAttribute('data-color', nextColor)
        gsap.to(logosvg,{backgroundColor: currentColor,duration: 0.5, ease: 'power1.out' })
    }

    const onLogoLeave = () =>{
        const logoSvg = logoRef.current.firstChild.firstChild
        gsap.to(logoSvg,{backgroundColor: '#4a30ab',duration: 0.5, ease: 'power1.out' })
    }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between pt-12 px-5">
        <div className="text-white">
          <div className="text-9xl">
            <h1 className="text-2xl tracking-widest">Hi, I am</h1>
            <h1 className="tracking-widest pt-3">Montasir</h1>
            <p className="tracking-widest pt-3">Ahmed</p>
            <p className="tracking-widest pt-3">Mihad</p>
          </div>
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
        <div className="pointer-event-auto cursor-pointer leading-none transition-height [&>p]:w-[500px] [&>p]:duration-500 [&>p]:ease-out" data-color="#0c5076"
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
