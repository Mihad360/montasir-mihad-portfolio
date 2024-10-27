/* eslint-disable react/no-unescaped-entities */
"use client";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdEmail, MdOutlineEmail, MdPhonelinkRing } from "react-icons/md";
import Image from "next/image";

const AboutBanner = () => {

  return (
    <div>
      <div>
        <div>
          <div>
            <div className=" border-gray-400 p-5 border-r">
              <Image
                width={600}
                height={600}
                src="https://i.ibb.co.com/dMhpYG3/Mihad-bc-03.png"
                alt="image"
              />
              <h1 className="text-2xl md:text-4xl font-bold text-gray-200 pb-3 text-center pt-3">
                Montasir Mihad
              </h1>
              <div className="h-8 md:w-40 rounded-full border border-gray-500 text-xs text-fuchsia-600 font-normal uppercase lg:relative mt-5 lg:bottom-3 lg:right- lg:h-14 lg:w-[18vw] lg:text-xl overflow-hidden">
                <div className="flex h-full cursor-pointer items-center whitespace-nowrap group">
                  <span className="animate-loopL group-hover:pause">MERN-STACK-DEVELOPER FRONT-END-DEVELOPER&nbsp;</span>
                  <span className="animate-loopL group-hover:pause">MERN-STACK-DEVELOPER FRONT-END-DEVELOPER&nbsp;</span>
                </div>
              </div>
              <p className="border border-fuchsia-600 mt-6"></p>
              <div className="flex items-center gap-3 pt-6">
                <p className="text-fuchsia-600 text-4xl">
                  <MdOutlineEmail />
                </p>
                <div>
                  <p className="text-lg text-gray-300 font-semibold dark:text-gray-300">
                    Email
                  </p>
                  <p className="font-medium tracking-widest dark:text-gray-300 text-xs md:text-base text-gray-400">
                    ahmedmihad962@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-6">
                <p className="text-fuchsia-600 text-4xl">
                  <MdPhonelinkRing />
                </p>
                <div>
                  <p className="text-lg text-gray-300 font-semibold dark:text-gray-300">
                    Phone / What's app
                  </p>
                  <p className="font-medium tracking-widest dark:text-gray-300 text-xs md:text-base text-gray-400">
                    +8801621257820
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-6">
                <p className="text-fuchsia-600 text-4xl">
                  <GrLocation />
                </p>
                <div>
                  <p className="text-lg text-gray-300 font-semibold dark:text-gray-300">
                    Location
                  </p>
                  <p className="font-medium tracking-widest dark:text-gray-300 text-xs md:text-base text-gray-400">
                    Narayangonj, Dhaka-Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-6">
                <p className="text-fuchsia-600 text-4xl">
                  <LiaBirthdayCakeSolid />
                </p>
                <div>
                  <p className="text-lg text-gray-300 font-semibold dark:text-gray-300">
                    Birthday
                  </p>
                  <p className="font-medium tracking-widest dark:text-gray-300 text-xs md:text-base text-gray-400">
                    7th November 2004
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 pt-5 text-fuchsia-600 font-bold">
                <a
                  className="text-4xl hover:scale-150 duration-300 ease-in-out transition-all"
                  target="_blank"
                  href="mailto:ahmedmihad962@gmail.com"
                >
                  <MdEmail />
                </a>
                <a
                  className="text-3xl hover:scale-150 duration-300 ease-in-out transition-all"
                  target="_blank"
                  href="https://www.facebook.com/miyad.ahammed.3"
                >
                  <FaSquareFacebook />
                </a>
                <a
                  className="text-3xl hover:scale-150 duration-300 ease-in-out transition-all"
                  target="_blank"
                  href="https://github.com/Mihad360"
                >
                  <FaGithubSquare />
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
