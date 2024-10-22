import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getCarousel } from "./api/getProjectData";

const ProjectBanner = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch carousel data from backend
  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        // const response = await fetch("/api/carousel"); // Fetch data from your backend
        const carousels = await getCarousel();
        console.log(carousels);
        setCarouselData(carousels);
      } catch (error) {
        console.error("Error fetching carousel data", error);
      }
    };

    fetchCarouselData();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselData.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [carouselData]);

  if (carouselData.length === 0) {
    return <p>Loading carousel...</p>; // Show loading state while fetching data
  }

  return (
    <div>
      <div className="relative w-full h-[500px] mb-10">
        {/* Image Carousel */}
        <div className="relative w-full h-full">
          <Image
            src={carouselData[currentSlide]?.image}
            alt="Banner"
            layout="fill"
            className="rounded-lg shadow-lg"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Text and Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold text-white mb-2 transition-opacity duration-1000 ease-in-out">
            {carouselData[currentSlide]?.text}
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-5 w-full flex justify-center space-x-3">
          {carouselData.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`cursor-pointer h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-fuchsia-600 scale-125"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
