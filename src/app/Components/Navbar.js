// components/Navbar.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const Navbar = () => {
  const [showmodal, setshowmodal] = useState(false);
  const handleContactMe = () => {
    // Replace '1234567890' with your actual WhatsApp number
    window.location.href = "https://wa.me/03116663715";
  };
  return (
    <nav className=" bg-slate-400 p-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl rounded">
          <Image src="/mylaptop.png" alt="Logo" width={100} height={40} />
        </Link>
        <div>
          <Link
            href="/"
            className="text-white mr-4 hover:shadow-md hover:shadow-cyan-400"
          >
            Home
          </Link>
          <Link
            href="/project"
            className="text-white mr-4 hover:shadow-md hover:shadow-cyan-400"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-white mr-4 hover:shadow-md hover:shadow-cyan-400"
          >
            About
          </Link>
          <Link
            href="https://github.com/shahzad11khan"
            className="text-white mr-4 hover:shadow-md hover:shadow-cyan-400"
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            className="text-white mr-4 hover:shadow-md hover:shadow-cyan-400"
          >
            LinkedIn
          </Link>
          {/* <div className="flex justify-center items-center flex-col bg-slate-400"> */}
          <button
            className="next bg-green size-12 text-black p-2 hover:shadow-md hover:shadow-cyan-400"
            onClick={handleContactMe}
          >
            {/* Contact me via WhatsApp */}
            <FontAwesomeIcon icon={faWhatsapp} />
          </button>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
