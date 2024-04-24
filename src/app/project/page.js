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
      <div className="flex flex-col justify-center items-center text-2xl">
        Explore by category or technology
        <div className="flex mt-3">
          <button
            type="button"
            className="text-gray-900 bg-slate-400 border btnname border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => {
              handleButtonClick("AllProjects");
            }}
          >
            All Projects
          </button>
          <button
            type="button"
            className="text-gray-900 bg-slate-400 border btnname border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => {
              handleButtonClick("protfolio");
            }}
          >
            Tilwind css
          </button>
          <button
            type="button"
            className="text-gray-900 bg-slate-400 border btnname border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => {
              handleButtonClick("E-commerce");
            }}
          >
            E-Commerce
          </button>

          <button
            type="button"
            className="text-gray-900 bg-slate-400 border btnname border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => {
              handleButtonClick("protfolio");
            }}
          >
            Protfolio
          </button>
          <button
            type="button"
            className="text-gray-900 bg-slate-400 border btnname border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => {
              handleButtonClick(".Net");
            }}
          >
            .Net
          </button>
          <button
            type="button"
            className="text-gray-900 bg-slate-400 border btnname border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => {
              handleButtonClick("Reactjs");
            }}
          >
            React js
          </button>
          <button
            type="button"
            className="text-gray-900 bg-slate-400 border btnname border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => {
              handleButtonClick("typescript");
            }}
          >
            TypeScript
          </button>

          <button
            type="button"
            className="text-gray-900 bg-slate-400 border btnname border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => {
              handleButtonClick("nextjs");
            }}
          >
            Next js
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-2 ml-4">
        {Projects.map((item, index) => {
          // Check if the item's category matches the selected category
          if (item.category === getitem) {
            console.log("hi");
            // Return the JSX element when condition is met
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
