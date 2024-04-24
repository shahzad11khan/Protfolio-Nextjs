"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Modal from "../Components/Modal";
import Link from "next/link";

const Footer = () => {
  const [showmodal, setshowmodal] = useState(false);
  const handleContactMe = () => {
    // Replace '1234567890' with your actual WhatsApp number
    window.location.href = "https://wa.me/03116663715";
  };
  return (
    <div className=" text-white">
      <div className="grid border-b-2  border-white grid-cols-2 mt-4 ">
        <div className="flex justify-center items-center border-b-2 border-white flex-col bg-slate-400">
          Do you have a project in mind?
          <p>
            I'm open to new proposals! If you want to develop an application or
            you know about any interesting project that I could be part of,
            please let me know sending me an email with all the details
          </p>
        </div>
        <div className="flex justify-center border-b-2 border-white items-center flex-col bg-slate-400">
          <button
            className="next ml-4 border-2 bg-slate-400 text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
            onClick={() => setshowmodal(true)}
          >
            Contact me
          </button>
          {showmodal && <Modal isclose={() => setshowmodal(false)} />}
        </div>
        <div className="w-[900px]  ml-[35%] my-2">
          <ul className="flex justify-evenly">
            <li>
              {" "}
              <Link href="/" className="text-white mr-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="/project" className="text-white mr-4">
                Projects
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/about" className="text-white mr-4">
                About
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/shahzad11khan"
                className="text-white mr-4"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                className="text-white mr-4 "
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center flex-col bg-slate-400">
          Do you have a project in mind? <br></br>
          <p>
            Made by me :) <br></br>Copyright 2024 Programmer Next js
          </p>
        </div>
        <div className="flex justify-center items-center flex-col bg-slate-400">
          <button
            className="next ml-4 border-2 bg-green size-12 text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
            onClick={handleContactMe}
          >
            {/* Contact me via WhatsApp */}
            <FontAwesomeIcon icon={faWhatsapp} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
