"use client";
import React from "react";
import Slider from "../slider/page";

const Slide = () => {
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    // "/image3.jpg",
    // Add more image paths as needed
  ];
  //   console.log("silder " + images);

  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <Slider images={images} />
    </div>
  );
};

export default Slide;
