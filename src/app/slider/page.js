"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

function Slider({ images = [] }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const autoChangeSlide = useCallback(() => {
    if (images.length > 0) {
      const newIndex = (currentSlideIndex + 1) % images.length;
      setCurrentSlideIndex(newIndex);
    }
  }, [currentSlideIndex, images.length]);

  useEffect(() => {
    const intervalId = setInterval(autoChangeSlide, 3000);

    return () => clearInterval(intervalId);
  }, [autoChangeSlide]);

  const changeSlide = (direction) => {
    let newIndex = currentSlideIndex + direction;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentSlideIndex(newIndex);
  };

  if (images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div
      id="default-carousel"
      className="relative w-full bg-gray-300 py-5"
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
              className="h-60 rounded-md w-full"
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
