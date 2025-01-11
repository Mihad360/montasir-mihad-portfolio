// components/Cursor.js
"use client"
// components/Cursor.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: "power3.out",
      });
    };

    const onMouseEnter = (e) => {
      if (e.target.closest("a, button,Image, Link, ul, li, img, p, h1, h2, h3, span")) {
        cursorRef.current.classList.add("active"); // Add active class
      }
    };

    const onMouseLeave = (e) => {
      if (e.target.closest("a, button,Image, ul, li, img, p, h1, h2, h3, span")) {
        cursorRef.current.classList.remove("active"); // Remove active class
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseenter", onMouseEnter, true);
    document.body.addEventListener("mouseleave", onMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseenter", onMouseEnter, true);
      document.body.removeEventListener("mouseleave", onMouseLeave, true);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;
