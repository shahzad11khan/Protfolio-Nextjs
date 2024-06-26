"use client";
import Image from "next/image";
import Slides from "../app/sildes/page";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function page() {
  const handleDownload = () => {
    window.open("/shahzadkhan.pdf", "_blank");
  };
  const handle = () => {
    window.open("#");
  };
  return (
    <>
      <div className="flex items-center ">
        <div className="bg-slate-400 p-8 rounded-lg flex items-center w-full mt-2 justify-around">
          <div className="mr-4">
            <Image
              className="rounded-full"
              src="/githubshahzad.jpg"
              alt="Logo"
              width={250}
              height={250}
            />
          </div>
          <div>
            {/* <h1 className="text-white text-2xl font-bold mb-2 underline">
              Hey! I'm Shahzad Khan!
            </h1> */}
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className="text-white text-2xl font-bold mb-2 underline"
            >
              Hey! I&apos;m Shahzad Khan!
            </motion.h1>
            <p className="text-white">
              A Software Engineer that loves to create high quality and
              user-centered digital products
            </p>
            <div className="flex mt-4">
              <button
                className="text-white font-bold py-2 px-2 rounded mr-4 border-b-2 border-transparent hover:border-blue-100 hover:bg-blue-800 border-2 border-b-white border-r-red-200"
                onClick={handle}
              >
                See my portfolio
              </button>
              <button
                id="downloadButton"
                class="text-white font-bold py-2 px-4 rounded mr-4 border-b-2 border-transparent hover:border-blue-100 hover:bg-green-800 border-2 border-t-white  border-l-red-200"
                onClick={handleDownload}
              >
                My Resume / CV
              </button>
            </div>
            <div className="w-4/6 flex flex-col items-center justify-center text-center mt-5">
              <div className="">
                <CountUp
                  start={2}
                  end={15}
                  duration={4}
                  className=" text-2xl font-bold mb-2 pt-10 text-red-500"
                />

                <div className="text-white text-2xl font-bold mb-2">
                  Completed Projects
                </div>
              </div>{" "}
            </div>
          </div>

          {/* counting */}
        </div>
      </div>
      <div>
        <Slides />
      </div>
    </>
  );
}

export default page;
