/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

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
            xPercentValue = -60; // Less extreme
            transformOrigin = "0% 50%";
            scaleXvalue = 1; // Less intense
            scaleYvalue = 1; // Less compressed vertically
            filterValue = "blur(2px)"; // Adjust blur
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
            xPercentValue = 60; // Less extreme
            transformOrigin = "100% 50%";
            scaleXvalue = 1; // Less intense
            scaleYvalue = 1; // Less compressed vertically
            filterValue = "blur(2px)"; // Adjust blur
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
            opacity: 2,
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
    <div>
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
                  <div className="img-wrap [aspect-ratio:0.6] md:h-auto relative overflow-hidden h-52 ">
                    <div className="img absolute top-0 left-0 w-24 md:w-full  [backface-visibility:hidden] md:pt-6 bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-1 md:px-6 hover:scale-105 transition-transform duration-300 ">
                      <div className="pt-1 md:pt-5">
                        <Image
                          className=""
                          width={200}
                          height={200}
                          src="https://i.ibb.co.com/rGMkbqb/download-html5-round-logo-icon-png-701751694771801xidtztxanv-removebg-preview.png"
                          alt="html"
                        />
                        <div className="hidden lg:block">
                        <div className="flex pt-5 justify-end">
                          <div className="skill">
                            <div className="outer">
                              <div className="inner">
                                <div id="number">75%</div>
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="160px"
                              height="160px"
                              id="svg"
                            >
                              <defs>
                                <linearGradient id="GradientColor">
                                  <stop offset="0%" stop-color="#e91e63" />
                                  <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                              </defs>
                              <circle
                                id="circle"
                                cx="80"
                                cy="80"
                                r="70"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="pb-2 md:pb-5 pt-2 md:pt-5">
                        <h3 className="text-xs md:text-lg font-semibold text-white">
                          HTML
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300">
                          A markup language for creating web pages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-item relative z-10 ">
                  <div className="img-wrap w-full [aspect-ratio:0.6] h-52 md:h-auto relative overflow-hidden rounded-none">
                    <div className="img absolute top-0 left-0 w-24 md:w-full  [backface-visibility:hidden] md:pt-6 bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-1 md:px-6 hover:scale-105 transition-transform duration-300 ">
                      <div className="pt-1 md:pt-5">
                        <Image
                          className=""
                          width={200}
                          height={200}
                          src="https://i.ibb.co.com/jw7fSTc/9fbbaeb59401e5630c288dce9ef57e03-removebg-preview.png"
                          alt="html"
                        />
                        <div className="hidden lg:block">
                        <div className="flex pt-5 justify-end">
                          <div className="skill">
                            <div className="outer">
                              <div className="inner">
                                <div id="number">72%</div>
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="160px"
                              height="160px"
                              id="svg"
                            >
                              <defs>
                                <linearGradient id="GradientColor">
                                  <stop offset="0%" stop-color="#e91e63" />
                                  <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                              </defs>
                              <circle
                                id="circle2"
                                cx="80"
                                cy="80"
                                r="70"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="pb-2 md:pb-5 pt-2 md:pt-5">
                        <h3 className="text-xs md:text-lg font-semibold text-white">
                          REACT JS
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300">
                          A JavaScript library for building user interfaces.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-item relative z-10 ">
                  <div className="img-wrap w-full [aspect-ratio:0.6] h-52 md:h-auto relative overflow-hidden rounded-none">
                    <div className="img absolute top-0 left-0 w-24 md:w-full  [backface-visibility:hidden] md:pt-6 bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-1 md:px-6 hover:scale-105 transition-transform duration-300 ">
                      <div className="pt-1 md:pt-5">
                        <Image
                          className=""
                          width={200}
                          height={200}
                          src="https://i.ibb.co.com/3FHS5WQ/download-removebg-preview-1.png"
                          alt="html"
                        />
                        <div className="hidden lg:block">
                        <div className="flex pt-5 justify-end">
                          <div className="skill">
                            <div className="outer">
                              <div className="inner">
                                <div id="number">70%</div>
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="160px"
                              height="160px"
                              id="svg"
                            >
                              <defs>
                                <linearGradient id="GradientColor">
                                  <stop offset="0%" stop-color="#e91e63" />
                                  <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                              </defs>
                              <circle
                                id="circle3"
                                cx="80"
                                cy="80"
                                r="70"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="pb-2 md:pb-5 pt-2 md:pt-5">
                        <h3 className="text-xs md:text-lg font-semibold text-white">
                          MONGODB
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300">
                          A NoSQL database for modern web apps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* column 2 */}
              <div className="column w-full relative grid gap-4">
                <div className="col-item relative z-10 ">
                  <div className="img-wrap w-full [aspect-ratio:0.6] h-52 md:h-auto relative overflow-hidden rounded-none">
                    <div className="img absolute top-0 left-0 w-24 md:w-full  [backface-visibility:hidden] md:pt-6 bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-1 md:px-6 hover:scale-105 transition-transform duration-300 ">
                      <div className="pt-1 md:pt-5">
                        <Image
                          className=""
                          width={200}
                          height={200}
                          src="https://i.ibb.co.com/wRt2Lfp/logo-2582747-1280-removebg-preview.png"
                          alt="html"
                        />
                        <div className="hidden lg:block">
                        <div className="flex pt-5 justify-end">
                          <div className="skill">
                            <div className="outer">
                              <div className="inner">
                                <div id="number">70%</div>
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="160px"
                              height="160px"
                              id="svg"
                            >
                              <defs>
                                <linearGradient id="GradientColor">
                                  <stop offset="0%" stop-color="#e91e63" />
                                  <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                              </defs>
                              <circle
                                id="circle4"
                                cx="80"
                                cy="80"
                                r="70"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="pb-2 md:pb-5 pt-2 md:pt-5">
                        <h3 className="text-xs md:text-lg font-semibold text-white">
                          CSS
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300">
                          A style sheet language for designing web pages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-item relative z-10 ">
                  <div className="img-wrap w-full [aspect-ratio:0.6] h-52 md:h-auto relative overflow-hidden rounded-none">
                    <div className="img absolute top-0 left-0 w-24 md:w-full  [backface-visibility:hidden] md:pt-6 bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-1 md:px-6 hover:scale-105 transition-transform duration-300 ">
                      <div className="pt-1 md:pt-5">
                        <Image
                          className=""
                          width={200}
                          height={200}
                          src="https://i.ibb.co.com/SK0S8Ws/download-removebg-preview.png"
                          alt="html"
                        />
                        <div className="hidden lg:block">
                        <div className="flex pt-5 justify-end">
                          <div className="skill">
                            <div className="outer">
                              <div className="inner">
                                <div id="number">65%</div>
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="160px"
                              height="160px"
                              id="svg"
                            >
                              <defs>
                                <linearGradient id="GradientColor">
                                  <stop offset="0%" stop-color="#e91e63" />
                                  <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                              </defs>
                              <circle
                                id="circle5"
                                cx="80"
                                cy="80"
                                r="70"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="pb-2 md:pb-5 pt-2 md:pt-5">
                        <h3 className="text-xs md:text-lg font-semibold text-white">
                          NEXT JS
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300">
                          A Powerfull React framework
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-item relative z-10 ">
                  <div className="img-wrap w-full [aspect-ratio:0.6] h-52 md:h-auto relative overflow-hidden rounded-none">
                    <div className="img absolute top-0 left-0 w-24 md:w-full  [backface-visibility:hidden] md:pt-6 bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-1 md:px-6 hover:scale-105 transition-transform duration-300 ">
                      <div className="pt-1 md:pt-5">
                        <Image
                          className=""
                          width={200}
                          height={200}
                          src="https://i.ibb.co.com/C8ftmMt/download-removebg-preview-2.png"
                          alt="html"
                        />
                        <div className="hidden lg:block">
                        <div className="flex pt-5 justify-end">
                          <div className="skill">
                            <div className="outer">
                              <div className="inner">
                                <div id="number">75%</div>
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="160px"
                              height="160px"
                              id="svg"
                            >
                              <defs>
                                <linearGradient id="GradientColor">
                                  <stop offset="0%" stop-color="#e91e63" />
                                  <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                              </defs>
                              <circle
                                id="circle6"
                                cx="80"
                                cy="80"
                                r="70"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="pb-2 md:pb-5 pt-2 md:pt-5">
                        <h3 className="text-xs md:text-lg font-semibold text-white">
                          FIREBASE
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300">
                          A platform for building Authentication
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* column 3 */}
              <div className="column w-full relative grid gap-4">
                <div className="col-item relative z-10 ">
                  <div className="img-wrap w-full [aspect-ratio:0.6] h-52 md:h-auto relative overflow-hidden rounded-none">
                    <div className="img absolute top-0 left-0 w-24 md:w-full  [backface-visibility:hidden] md:pt-6 bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-1 md:px-6 hover:scale-105 transition-transform duration-300 ">
                      <div className="pt-1 md:pt-5">
                        <Image
                          className=""
                          width={200}
                          height={200}
                          src="https://i.ibb.co.com/zPRqm1d/5453022-removebg-preview.png"
                          alt="html"
                        />
                       <div className="hidden lg:block">
                       <div className="flex pt-5 justify-end">
                          <div className="skill">
                            <div className="outer">
                              <div className="inner">
                                <div id="number">60%</div>
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="160px"
                              height="160px"
                              id="svg"
                            >
                              <defs>
                                <linearGradient id="GradientColor">
                                  <stop offset="0%" stop-color="#e91e63" />
                                  <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                              </defs>
                              <circle
                                id="circle7"
                                cx="80"
                                cy="80"
                                r="70"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                       </div>
                      </div>
                      <div className="pb-2 md:pb-5 pt-2 md:pt-5">
                        <h3 className="text-xs md:text-lg font-semibold text-white">
                          JAVASCRIPT
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300">
                          A versatile programming language
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-item relative z-10 ">
                  <div className="img-wrap w-full [aspect-ratio:0.6] h-52 md:h-auto relative overflow-hidden rounded-none">
                    <div className="img absolute top-0 left-0 w-24 md:w-full  [backface-visibility:hidden] md:pt-6 bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-1 md:px-6 hover:scale-105 transition-transform duration-300 ">
                      <div className="pt-1 md:pt-5">
                        <Image
                          className=""
                          width={200}
                          height={200}
                          src="https://i.ibb.co.com/hmDQB7C/download-removebg-preview-4.png"
                          alt="html"
                        />
                       <div className="hidden lg:block">
                       <div className="flex pt-5 justify-end">
                          <div className="skill">
                            <div className="outer">
                              <div className="inner">
                                <div id="number">80%</div>
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="160px"
                              height="160px"
                              id="svg"
                            >
                              <defs>
                                <linearGradient id="GradientColor">
                                  <stop offset="0%" stop-color="#e91e63" />
                                  <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                              </defs>
                              <circle
                                id="circle8"
                                cx="80"
                                cy="80"
                                r="70"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                       </div>
                      </div>
                      <div className="pb-2 md:pb-5 pt-2 md:pt-5">
                        <h3 className="text-xs md:text-lg font-semibold text-white">
                          TAILWIND CSS
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300">
                          A utility-first CSS framework
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-item relative z-10 ">
                  <div className="img-wrap w-full [aspect-ratio:0.6] h-52 md:h-auto relative overflow-hidden rounded-none">
                    <div className="img absolute top-0 left-0 w-24 md:w-full  [backface-visibility:hidden] md:pt-6 bg-gradient-to-br from-black via-gray-900 to-indigo-950 bg-opacity-80 rounded-lg shadow-lg px-1 md:px-6 hover:scale-105 transition-transform duration-300 ">
                      <div className="pt-1 md:pt-5">
                        <Image
                          className=""
                          width={200}
                          height={200}
                          src="https://i.ibb.co.com/7GVQMk6/download-removebg-preview-3.png"
                          alt="html"
                        />
                        <div className="hidden lg:block">
                        <div className="flex pt-5 justify-end">
                          <div className="skill">
                            <div className="outer">
                              <div className="inner">
                                <div id="number">60%</div>
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="160px"
                              height="160px"
                              id="svg"
                            >
                              <defs>
                                <linearGradient id="GradientColor">
                                  <stop offset="0%" stop-color="#e91e63" />
                                  <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                              </defs>
                              <circle
                                id="circle9"
                                cx="80"
                                cy="80"
                                r="70"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="pb-2 md:pb-5 pt-2 md:pt-5">
                        <h3 className="text-xs md:text-lg font-semibold text-white">
                          NODE JS
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300">
                          A JavaScript runtime built on Chrome's V8 engine.
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
    </div>
  );
};

export default ColsAni;
