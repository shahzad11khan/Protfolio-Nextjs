"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function Slider({ images }) {
  //   console.log(images);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Function to change the slide automatically
  const autoChangeSlide = () => {
    const newIndex = (currentSlideIndex + 1) % images.length;
    setCurrentSlideIndex(newIndex);
  };

  useEffect(() => {
    // Start auto-slide when the component mounts
    const intervalId = setInterval(autoChangeSlide, 3000); // Change slide every 3 seconds

    // Clear interval when the component unmounts or changes
    return () => clearInterval(intervalId);
  }, [currentSlideIndex]); // Re-run effect when currentSlideIndex changes

  const changeSlide = (direction) => {
    let newIndex = currentSlideIndex + direction;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentSlideIndex(newIndex);
  };

  return (
    <div
      id="default-carousel"
      class="relative w-full bg-gray-300 py-5"
      data-carousel="slide"
    >
      <span className="text-2xl flex items-center justify-center w-1/6 m-auto text-white underline shadow-xl shadow-red-200">
        My Projects
      </span>
      <div className="flex justify-center mt-5">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="slide"
            style={{ display: index === currentSlideIndex ? "block" : "none" }}
          >
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className="h-60 rounded-md  w-full"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
