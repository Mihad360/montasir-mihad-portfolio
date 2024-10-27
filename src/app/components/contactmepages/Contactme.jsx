/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contactme = () => {

  const form = useRef();
  const emailSectionRef = useRef(null);

  useEffect(() => {
    // Initialize EmailJS after the script loads
    if (window.emailjs) {
      emailjs.init('jSFNkrUxU0F-VKblX');
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0qtusl9', 'template_owyg79e', form.current, {
        publicKey: 'jSFNkrUxU0F-VKblX',
      })
      .then(
        (res) => {
          console.log(res,'SUCCESS!');
          if(res.status === 200){
            e.target.reset()
            toast.success('Email sent successfully ✔️', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          }
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const scrollToEmail = () => {
    emailSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 justify-center space-y-8 md:space-y-0 text-center text-white pb-12">
        {/* Div 1: Email Me */}
        <div className="space-y-4 flex flex-col items-center">
          <Image
            width={300}
            height={300}
            src="https://i.ibb.co.com/L0F3pzn/107135-OMVKHI-425-removebg-preview.png"
            alt="image"
          />
          <h2 className="text-lg lg:text-2xl font-semibold">Email Me</h2>
          <p className="text-xs lg:text-lg text-gray-400">
            Reach out via email for any inquiries or collaboration ideas.
          </p>
          <button
            onClick={scrollToEmail}
            className="bg-purple-700 hover:bg-purple-600 px-6 py-3 text-xs lg:text-lg font-medium rounded-md transition"
          >
            Email Me
          </button>
        </div>

        {/* Div 2: Connect on Socials */}
        <div className="space-y-4 flex flex-col items-center">
          <Image
            width={300}
            height={300}
            src="https://i.ibb.co.com/LPF9Mnz/317901-P97-D3-H-889-removebg-preview.png"
            alt="image"
          />
          <h2 className="text-lg lg:text-2xl font-semibold">Connect on Socials</h2>
          <p className="text-xs lg:text-lg text-gray-400">
            Follow me on social platforms for the latest updates.
          </p>
          <Link
            target="_blank"
            href="https://www.facebook.com/MontasirMihad360"
            className="bg-purple-700 hover:bg-purple-600 px-6 py-3 text-xs lg:text-lg font-medium rounded-md transition"
          >
            Facebook
          </Link>
        </div>

        {/* Div 3: Let's Talk */}
        <div className="space-y-4 flex flex-col items-center">
          <Image
            width={400}
            height={400}
            src="https://i.ibb.co.com/Rb2fm1W/Fancy-Octocat-guide-image-removebg-preview.png"
            alt="image"
          />
          <h2 className="text-lg lg:text-2xl font-semibold">See my Github profile</h2>
          <p className="text-xs lg:text-lg text-gray-400">
            I’m open to discussions, project ideas, or just a friendly chat.
          </p>
          <Link
            target="_blank"
            href="https://github.com/Mihad360"
            onClick={scrollToEmail}
            className="bg-purple-700 hover:bg-purple-600 px-6 py-3 text-xs lg:text-lg font-medium rounded-md transition"
          >
            Github
          </Link>
        </div>
      </div>
      <h1 className="text-center text-3xl text-white font-semibold pt-5 pb-16">
        CONTACT BY MAIL
      </h1>
      <div
        ref={emailSectionRef}
        className="py-10 px-5 flex justify-center items-center bg-gradient-to-br from-[#200a30] via-[#2a0037] to-[#35005b]"
      >
        <div className="flex flex-col md:flex-row bg-[#1f1b2e] rounded-lg shadow-lg overflow-hidden max-w-6xl">
          {/* Left Div with Image */}
          <div className="lg:w-1/2 flex justify-center items-center p-5">
            <Image
              width={700}
              height={700}
              src="https://i.ibb.co.com/D87Kdzg/2453787-removebg-preview.png"
              alt="image"
            />
          </div>

          {/* Right Div with Form */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center bg-[#2a2438]">
            <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">
              Get In Touch via Email
            </h2>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              {/* Name Input */}
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="p-3 rounded-md border border-gray-600 bg-[#333048] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Email Input */}
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="p-3 rounded-md border border-gray-600 bg-[#333048] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />

              {/* Message Input */}
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                required
                className="p-3 rounded-md border border-gray-600 bg-[#333048] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              ></textarea>

              {/* Submit Button */}
              <input className="bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition duration-300 cursor-pointer" type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
