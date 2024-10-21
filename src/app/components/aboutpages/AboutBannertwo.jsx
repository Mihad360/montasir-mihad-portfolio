/* eslint-disable react/no-unescaped-entities */
"use client"
import { useEffect, useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { GrWaypoint } from "react-icons/gr";
import { MdCastForEducation } from "react-icons/md";
import TextTransition, { presets } from "react-text-transition";

const texts = ["Hi There!!", "Hello!!", "Hey all!!"];

const AboutBannertwo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div>
      <div className="">
        <div className="  p-5 ">
          <h1 className="text-blue-600 flex justify-end text-3xl font-semibold">
            <TextTransition springConfig={presets.wobbly}>
              {texts[index % texts.length]}
            </TextTransition>
          </h1>
          <p className="md:text-lg text-gray-300 tracking-wide pt-5 text-justify dark:text-white">
            I'm a student developer living in the bustling city of Narayanganj,
            Dhaka. Fueled by coffee-tea and late nights, I'm obsessed with
            building beautiful and intuitive user interfaces that come alive
            with the power of the MERN Stack (MongoDB, Express.js, React.js,
            Node.js). Every pixel matters to me, and I love crafting seamless
            user experiences that make the web a joy to navigate. My journey's
            just beginning, and I'm constantly pushing the boundaries of
            frontend development. Dive into my portfolio and witness the
            transformation of a passionate developer in the making!
          </p>
          <h1 className="text-blue-600 font-semibold text-3xl pt-7 flex items-center justify-end gap-5">
            <span>Education</span>
            <MdCastForEducation className="text-4xl" />
          </h1>

          <div className="p-5 pt-7 flex flex-col md:flex-row">
            <ol className="w-full md:w-[50%] pr-6 mb-10 md:mb-0">
              <li className="mb-10">
                <h3 className="mb-1 text-2xl font-semibold text-gray-300 dark:text-white">
                  Diploma in Computer Science & Technology (Present)
                </h3>
                <h3 className="mb-1 text-lg font-semibold text-gray-500 dark:text-white">
                  Dhaka Polytechnic Institute <br />
                  Dhaka-Bangladesh
                </h3>
                <time className="block mb-2 text-lg font-medium leading-none text-blue-500 dark:text-gray-500 pt-2">
                  2023-2026
                </time>
                <p className="text-base font-normal text-gray-300 dark:text-gray-400 tracking-wide">
                  At Present I am studying at the CST department of Dhaka
                  Polytechnic Institute
                </p>
              </li>
            </ol>
            <ol className="relative border-s border-blue-600 border-l-2 dark:border-gray-700 w-full md:w-[50%]">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center p-2 -left-4 text-2xl bg-blue-600 rounded-full dark:ring-gray-900 dark:bg-blue-900 text-black">
                  <FaDotCircle className="animate-pulse" />
                </span>
              </li>
              <li className="pl-10">
                <span className="absolute flex items-center justify-center p-2 -left-4 text-2xl bg-blue-600 rounded-full dark:ring-gray-900 dark:bg-blue-900 mt-0 md:mt-48 text-black">
                  <GrWaypoint />
                </span>
                <h3 className="mb-1 text-2xl font-semibold text-gray-300 dark:text-white pt-20 md:pt-48">
                  Secondary School Certificate
                </h3>
                <h3 className="mb-1 text-lg font-semibold text-gray-500 dark:text-white">
                  Merchant Workers High School, Narayanganj-Bangladesh
                </h3>
                <time className="block mb-2 text-lg font-medium leading-none text-blue-500 dark:text-gray-500 pt-2">
                  2020-2022
                </time>
                <p className="text-base font-normal text-gray-300 dark:text-gray-400 tracking-wide">
                  After junior school passing I cleared my SSC (Secondary School
                  Certificate) from this school.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBannertwo;
