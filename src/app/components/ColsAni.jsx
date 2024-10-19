"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { skillsData } from "../lib/skills";
import { CircularProgressbar } from "react-circular-progressbar";

gsap.registerPlugin(ScrollTrigger);

const ColsAni = () => {
  useEffect(() => {
    let lenis;
    const grid = document.querySelector(".columns");
    const columns = [...grid.querySelectorAll(".column")];

    const items = columns.map((column, pos) => {
      return [...column.querySelectorAll(".col-item")].map((item) => ({
        element: item,
        column: pos,
        wrapper: item.querySelector(".img-wrap"),
        image: item.querySelector(".img"),
      }));
    });

    const mergedItems = items.flat();

    const SmoothScroll = () => {
      lenis = new Lenis({
        lerp: 0.15,
        smoothWheel: true,
      });
      lenis.on("scroll", () => ScrollTrigger.update());
      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };
      requestAnimationFrame(scrollFn);
    };

    const ScrollAni = () => {
      mergedItems.forEach((item) => {
        let xPercentValue,
          scaleXvalue,
          scaleYvalue,
          transformOrigin,
          filterValue;
        switch (item.column) {
          case 0:
            // Adjust the movement for the left column
            xPercentValue = -50; // Less extreme
            transformOrigin = "0% 50%";
            scaleXvalue = 1; // Less intense
            scaleYvalue = 1; // Less compressed vertically
            filterValue = "blur(0px)"; // Adjust blur
            break;
          case 1:
            // Center column remains static with less scaling
            xPercentValue = 0;
            transformOrigin = "50% 50%";
            scaleXvalue = 1; // No scaling for center column
            scaleYvalue = 1; // No scaling for center column
            filterValue = "blur(0px)"; // No blur
            break;
          case 2:
            // Adjust the movement for the right column
            xPercentValue = 50; // Less extreme
            transformOrigin = "100% 50%";
            scaleXvalue = 1; // Less intense
            scaleYvalue = 1; // Less compressed vertically
            filterValue = "blur(0px)"; // Adjust blur
            break;
        }

        gsap.fromTo(
          item.wrapper,
          {
            willChange: "filter",
            xPercent: xPercentValue,
            opacity: 0,
            scaleX: scaleXvalue,
            scaleY: scaleYvalue,
            filter: filterValue,
          },
          {
            transformOrigin: transformOrigin,
            scrollTrigger: {
              trigger: item.element,
              start: "top 100%", // Adjusted for earlier trigger
              end: "bottom 20%", // Adjusted for later trigger
              scrub: true,
            },
            xPercent: 0,
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            filter: "blur(0px)",
          }
        );
      });
    };

    SmoothScroll();
    ScrollAni();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="py-10 overflow-x-hidden">
        <h2 className="text-4xl text-center text-white font-bold mb-10">
          Skills
        </h2>
        <div className="grid place-items-center relative px-4 md:px-10 lg:px-16">
          <div className="columns w-full relative grid grid-cols-3 gap-4">
            {/* column 1 */}
            <div className="column relative grid gap-4">
              <div className="col-item relative z-10 ">
                <div className="img-wrap [aspect-ratio:0.6] h-auto relative overflow-hidden">
                  <div className="img absolute top-0 left-0 w-full  [backface-visibility:hidden] pt-6 bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-6 items-center hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center px-20 gap-5 pt-5">
                      <Image
                        className=""
                        width={200}
                        height={200}
                        src="https://i.ibb.co.com/rGMkbqb/download-html5-round-logo-icon-png-701751694771801xidtztxanv-removebg-preview.png"
                        alt="html"
                      />
                    </div>
                    <div className="pb-5 pt-5">
                      <h3 className="text-lg font-semibold text-white">HTML</h3>
                      <p className="text-sm text-gray-300">
                        A markup language for creating web pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-item relative z-10 ">
                <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <div className="img absolute top-0 left-0 w-full bg-cover [backface-visibility:hidden] bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-6 items-center hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center px-20 gap-5 pt-5">
                      <Image
                        className=""
                        width={160}
                        height={160}
                        src="https://i.ibb.co.com/rGMkbqb/download-html5-round-logo-icon-png-701751694771801xidtztxanv-removebg-preview.png"
                        alt="html"
                      />
                    </div>
                    <div className="pb-5 pt-5">
                      <h3 className="text-lg font-semibold text-white">HTML</h3>
                      <p className="text-sm text-gray-300">
                        A markup language for creating web pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-item relative z-10 ">
                <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <div className="img absolute top-0 left-0 w-full bg-cover [backface-visibility:hidden] bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-6 items-center hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center px-20 gap-5 pt-5">
                      <Image
                        className=""
                        width={160}
                        height={160}
                        src="https://i.ibb.co.com/rGMkbqb/download-html5-round-logo-icon-png-701751694771801xidtztxanv-removebg-preview.png"
                        alt="html"
                      />
                    </div>
                    <div className="pb-5 pt-5">
                      <h3 className="text-lg font-semibold text-white">HTML</h3>
                      <p className="text-sm text-gray-300">
                        A markup language for creating web pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* column 2 */}
            <div className="column w-full relative grid gap-4">
              <div className="col-item relative z-10 ">
                <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <div className="img absolute top-0 left-0 w-full bg-cover [backface-visibility:hidden] bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-6 items-center hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center px-20 gap-5 pt-5">
                      <Image
                        className=""
                        width={160}
                        height={160}
                        src="https://i.ibb.co.com/rGMkbqb/download-html5-round-logo-icon-png-701751694771801xidtztxanv-removebg-preview.png"
                        alt="html"
                      />
                    </div>
                    <div className="pb-5 pt-5">
                      <h3 className="text-lg font-semibold text-white">HTML</h3>
                      <p className="text-sm text-gray-300">
                        A markup language for creating web pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-item relative z-10 ">
                <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <div className="img absolute top-0 left-0 w-full bg-cover [backface-visibility:hidden] bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-6 items-center hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center px-20 gap-5 pt-5">
                      <Image
                        className=""
                        width={160}
                        height={160}
                        src="https://i.ibb.co.com/rGMkbqb/download-html5-round-logo-icon-png-701751694771801xidtztxanv-removebg-preview.png"
                        alt="html"
                      />
                    </div>
                    <div className="pb-5 pt-5">
                      <h3 className="text-lg font-semibold text-white">HTML</h3>
                      <p className="text-sm text-gray-300">
                        A markup language for creating web pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-item relative z-10 ">
                <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <div className="img absolute top-0 left-0 w-full bg-cover [backface-visibility:hidden] bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-6 items-center hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center px-20 gap-5 pt-5">
                      <Image
                        className=""
                        width={160}
                        height={160}
                        src="https://i.ibb.co.com/rGMkbqb/download-html5-round-logo-icon-png-701751694771801xidtztxanv-removebg-preview.png"
                        alt="html"
                      />
                    </div>
                    <div className="pb-5 pt-5">
                      <h3 className="text-lg font-semibold text-white">HTML</h3>
                      <p className="text-sm text-gray-300">
                        A markup language for creating web pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* column 3 */}
            <div className="column w-full relative grid gap-4">
              <div className="col-item relative z-10 ">
                <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <div className="img absolute top-0 left-0 w-full bg-cover [backface-visibility:hidden] bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-6 items-center hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col items-center px-20 gap-5 pt-5">
                      <Image
                        className=""
                        width={160}
                        height={160}
                        src="https://i.ibb.co.com/rGMkbqb/download-html5-round-logo-icon-png-701751694771801xidtztxanv-removebg-preview.png"
                        alt="html"
                      />
                      <Image
                        className=""
                        width={160}
                        height={160}
                        src="https://i.ibb.co.com/rGMkbqb/download-html5-round-logo-icon-png-701751694771801xidtztxanv-removebg-preview.png"
                        alt="html"
                      />
                    </div>
                    <div className="pb-5 pt-5">
                      <h3 className="text-lg font-semibold text-white">HTML</h3>
                      <p className="text-sm text-gray-300">
                        A markup language for creating web pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-item relative z-10 ">
                <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <div className="img absolute top-0 left-0 w-full bg-cover [backface-visibility:hidden] bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-6 items-center hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center px-20 gap-5 pt-5">
                      <Image
                        className=""
                        width={160}
                        height={160}
                        src="https://i.ibb.co.com/rGMkbqb/download-html5-round-logo-icon-png-701751694771801xidtztxanv-removebg-preview.png"
                        alt="html"
                      />
                    </div>
                    <div className="pb-5 pt-5">
                      <h3 className="text-lg font-semibold text-white">HTML</h3>
                      <p className="text-sm text-gray-300">
                        A markup language for creating web pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-item relative z-10 ">
                <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <div className="img absolute top-0 left-0 w-full bg-cover [backface-visibility:hidden] bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-6 items-center hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center px-20 gap-5 pt-5">
                      <Image
                        className=""
                        width={160}
                        height={160}
                        src="https://i.ibb.co.com/rGMkbqb/download-html5-round-logo-icon-png-701751694771801xidtztxanv-removebg-preview.png"
                        alt="html"
                      />
                    </div>
                    <div className="pb-5 pt-5">
                      <h3 className="text-lg font-semibold text-white">HTML</h3>
                      <p className="text-sm text-gray-300">
                        A markup language for creating web pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColsAni;
