/* eslint-disable react/no-unescaped-entities */
import { FaFileExport } from 'react-icons/fa';
import { FaClover } from 'react-icons/fa6';
import { GiSkills } from 'react-icons/gi';
import { IoLogoWebComponent } from 'react-icons/io5';
import { MdCenterFocusStrong } from 'react-icons/md';
import { RiFocusFill } from 'react-icons/ri';

const Exp_skill = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 pb-20 pt-12">
        <div className="border rounded-lg border-gray-400 p-5 w-full md:w-[50%]">
          <h1 className="text-blue-600 font-semibold text-3xl flex items-center gap-5">
            <span>Experience</span>
            <FaFileExport />
          </h1>
          <div className="pl-5">
            <h1 className="flex items-center gap-5 pt-4">
              <span className="text-2xl font-bold text-gray-300 dark:text-gray-300">
                <IoLogoWebComponent />
              </span>
              <span className="text-xl font-semibold text-gray-300 dark:text-white">
                Web Developer
              </span>
            </h1>
            <h1 className="pl-12 pt-2 text-lg text-gray-300 dark:text-white">
              2023 -{" "}
              <span className="text-blue-600 font-semibold text-xl">
                Present
              </span>
            </h1>
            <p className="pl-12 dark:text-gray-300 text-gray-300">
              As a junior React developer with
              <span className="text-blue-600 font-medium"> 8</span> months of
              course at <span className="text-blue-600 font-medium">Programming Hero</span> , I've honed my skills in crafting
              responsive UIs and implementing features. Passionate about
              learning and contributing to innovative web solutions with
              enthusiasm and dedication.{" "}
              <a
                className="text-blue-600 font-semibold underline"
                href="https://drive.google.com/file/d/1n8iP7yRxF-KFliOEAPKuVAQpakV5TZg6/view?usp=sharing"
                target="_blank"
              >
                Achievement Letter
              </a>
            </p>
          </div>
          <h1 className="text-blue-600 font-semibold text-3xl flex items-center gap-5 pt-8">
            <span>Currently Focused</span>
            <MdCenterFocusStrong />
          </h1>
          <div className="pl-5 pt-5 space-y-2">
            <div className="flex items-center gap-3 text-lg text-gray-300 dark:text-gray-300">
              <RiFocusFill />
              <span>Learning more and new things</span>
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-300 dark:text-gray-300">
              <RiFocusFill />
              <span>Personal Branding</span>
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-300 dark:text-gray-300">
              <RiFocusFill />
              <span>Building new projects/designs</span>
            </div>
          </div>
        </div>
        <div className="border rounded-lg border-gray-400 p-5 w-full md:w-[50%]">
          <h1 className="text-blue-600 font-semibold text-3xl flex items-center gap-5">
            <span>Skills</span>
            <GiSkills />
          </h1>
          <p className="text-gray-300 pl-5 pt-5 dark:text-gray-300">
            I excel at building user-centric web interfaces with the MERN stack
            (MongoDB, Express.js, React.js, Node.js). Expert in HTML5, CSS3, and
            JavaScript (ES6+), I design beautiful, interactive experiences that
            function flawlessly across devices and browsers. My passion lies in
            crafting modern, responsive web apps that bring your vision to life.
            Let's collaborate!
          </p>
          <div>
            <h1 className="text-blue-600 font-semibold text-3xl flex items-center gap-5 pt-8">
              <span>Love to do</span>
              <FaClover />
            </h1>
            <p className="text-gray-300 pl-5 pt-5 dark:text-gray-300">
              I love turning ideas into awesome websites using MERN (think
              super-powered JavaScript!). I'm an expert at HTML5, CSS3, and
              modern JavaScript, so I can design beautiful and user-friendly
              experiences. My passion is building websites that work flawlessly
              on any device and bring your vision to life. Beyond the code, I
              love solving challenges and creating something truly amazing.
              Let's build something together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp_skill;
