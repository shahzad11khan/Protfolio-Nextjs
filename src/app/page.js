"use client";
import Image from "next/image";
import Slides from "../app/sildes/page";

function page() {
  const handleDownload = () => {
    window.open("/shahzadkhan.pdf", "_blank");
  };
  return (
    <>
      <div className="flex items-center">
        <div className="bg-slate-400 p-8 rounded-lg flex items-center w-full mt-2 justify-center">
          <div className="mr-4">
            <Image
              className="rounded-full"
              src="/shahzad.png"
              alt="Logo"
              width={200}
              height={200}
            />
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold mb-2">
              Hey! I'm Shahzad Khan!
            </h1>
            <p className="text-white">
              A Software Engineer that loves to create high quality and
              user-centered digital products
            </p>
            <div className="flex mt-4">
              <button className="text-white font-bold py-2 px-4 rounded mr-4 border-b-2 border-transparent hover:border-blue-100 hover:bg-blue-800">
                See my portfolio
              </button>
              <button
                id="downloadButton"
                class="text-white font-bold py-2 px-4 rounded mr-4 border-b-2 border-transparent hover:border-blue-100 hover:bg-green-800"
                onClick={handleDownload}
              >
                Download my Resume/CV
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Slides />
      </div>
    </>
  );
}

export default page;
