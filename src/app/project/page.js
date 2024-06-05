"use client";
import React, { useState } from "react";
import Image from "next/image";
import Projects from "../Components/projects";
import Slides from "../sildes/page";
const page = () => {
  // Creating multiple objects
  const [getitem, setgetitem] = useState(null);
  const handleButtonClick = (buttonValue) => {
    setgetitem(buttonValue);
  };
  // console.log(getitem);
  return (
    <div>
      {" "}
      <Slides />
      <div className="flex flex-col justify-center items-center text-2xl  w-3/6 m-auto ">
        <span className="shadow-md text-xl mt-3 shadow-red-300 text-white">
          {" "}
          Explore by category or technology
        </span>
        <div className="flex mt-3 gap-5 rounded">
          <button
            type="button"
            className="rounded text-xs border-2 border-white p-2 hover:bg-white hover:border-gray-600 hover:shadow-xl"
            onClick={() => {
              handleButtonClick("AllProjects");
            }}
          >
            All
          </button>
          <button
            type="button"
            className="rounded-xl text-xs border-2 border-white p-2 hover:bg-white hover:border-gray-600 hover:shadow-xl"
            onClick={() => {
              handleButtonClick("protfolio");
            }}
          >
            Tilwind css
          </button>
          <button
            type="button"
            className="rounded-xl text-xs border-2 border-white p-2 hover:bg-white hover:border-gray-600 hover:shadow-xl"
            onClick={() => {
              handleButtonClick("E-commerce");
            }}
          >
            E-Commerce
          </button>

          <button
            type="button"
            className="rounded-xl text-xs border-2 border-white p-2 hover:bg-white hover:border-gray-600 hover:shadow-xl"
            onClick={() => {
              handleButtonClick("protfolio");
            }}
          >
            Protfolio
          </button>
          <button
            type="button"
            className="rounded-xl text-xs border-2 border-white p-2 hover:bg-white hover:border-gray-600 hover:shadow-xl"
            onClick={() => {
              handleButtonClick(".Net");
            }}
          >
            .Net
          </button>
          <button
            type="button"
            className="rounded-xl text-xs border-2 border-white p-2 hover:bg-white hover:border-gray-600 hover:shadow-xl"
            onClick={() => {
              handleButtonClick("Reactjs");
            }}
          >
            React js
          </button>
          <button
            type="button"
            className="rounded-xl text-xs border-2 border-white p-2 hover:bg-white hover:border-gray-600 hover:shadow-xl"
            onClick={() => {
              handleButtonClick("typescript");
            }}
          >
            TypeScript
          </button>

          <button
            type="button"
            className="rounded-xl text-xs border-2 border-white p-2 hover:bg-white hover:border-gray-600 hover:shadow-xl"
            onClick={() => {
              handleButtonClick("nextjs");
            }}
          >
            Next js
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5 w-5/6 m-auto">
        {Projects.map((item, index) => {
          // Check if the item's category matches the selected category
          if (item.category === getitem) {
            console.log("hi");
            // Return the JSX element when condition is met
            return (
              <div key={index}>
                <Image
                  className="rounded-md transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-gray-400"
                  src={item.image}
                  alt="Logo"
                  width={400}
                  height={400}
                />
              </div>
            );
          } else if (!getitem || getitem === "AllProjects") {
            return (
              <div key={index}>
                <Image
                  className="rounded-md transition-all duration-700 hover:scale-110"
                  src={item.image}
                  alt="Logo"
                  width={400}
                  height={400}
                />
              </div>
            );
          }
          // If condition is not met, return null
          return null;
        })}
      </div>
    </div>
  );
};

export default page;
