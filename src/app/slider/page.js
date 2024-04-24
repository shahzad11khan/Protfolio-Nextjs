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
      class="relative w-full bg-gray-400 pt-3"
      data-carousel="slide"
    >
      <p className="text-2xl flex items-center justify-center">My Projects</p>
      <div className="slider-container relative h-56 rounded-lg md:h-96  flex justify-center">
        <button className="prev mr-4" onClick={() => changeSlide(-1)}>
          Previous
        </button>
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="slide w-3/5 mt-8"
            style={{ display: index === currentSlideIndex ? "block" : "none" }}
          >
            <img
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className="h-80 rounded-md bg-green-500 w-full"
            />
          </div>
        ))}

        <button className="next ml-4" onClick={() => changeSlide(1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
