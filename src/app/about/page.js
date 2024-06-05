import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <section class="">
        <div className="px-4 mx-auto max-w-screen-xl text-center  overflow-x-auto">
          <h1 class="mb-4 text-1xl font-extrabold tracking-tight leading-none text-white md:text-2xl lg:text-4xl mt-10 underline w-2/4 m-auto">
            Web Developer and Instructor with Expertise in MERN Stack
          </h1>
          <p class="text-xs font-normal text-gray-300 lg:text-lg sm:px-16 lg:px-48">
            A dynamic and enthusiastic JavaScript developer with a comprehensive
            skill set spanning various JavaScript frameworks and technologies.
            Proficient in web development using modern JavaScript libraries such
            as React, Node.js, and Express. Demonstrates a proven ability to
            multitask effectively and possesses a strong aptitude for
            problem-solving. Known for successful collaboration with individuals
            from diverse backgrounds. Self-supported, driven, and committed to
            continuous learning and professional growth. Currently serving as a
            Senior JavaScript Developer at EncoderBytes (Pvt) Ltd.
          </p>
        </div>
      </section>

      <div className="flex gap-2 justify-between mt-5 w-5/6 m-auto">
        <div className="w-2/6">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  transition-all duration-700 hover:scale-110">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              S K I L L S
            </h5>
            <ul className="list-disc text-xs p-x-2">
              <li>Web Design & Development</li>
              <li>MERN STACK Development</li>
              <li>Problem-solving</li>
              <li>JavaScript</li>
              <li>Next.js</li>
              <li>React.js</li>
              <li>MongoDB</li>
              <li>XAMPP</li>
            </ul>
          </div>
        </div>
        <div className="w-2/6">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  transition-all duration-700 hover:scale-110">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              P R O J E C T S
            </h5>
            <ul className="list-disc text-xs">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Portfolio (LIVE)
                </a>
              </li>
              <li>
                <a
                  href="https://encoderbytes.vercel.app/"
                  className="hover:text-blue-600"
                >
                  EncoderBytes (LIVE)
                </a>
              </li>
              <li>
                <a
                  href="https://scrapo.vercel.app/"
                  className="hover:text-blue-600"
                >
                  Scrapo (LIVE)
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="http://64.227.110.165:5000/"
                  className="hover:text-blue-600"
                >
                  Alaqar-App (LIVE)
                </a>
              </li>
              <li>
                <a
                  href="http://128.199.219.192/"
                  className="hover:text-blue-600"
                >
                  C I R (LIVE)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/6">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  transition-all duration-700 hover:scale-110">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              E X P E R I E N C E
            </h5>
            <ul className="list-disc text-sm p-x-2">
              <li className="">
                MERN STACK WEB DEVELOPER at ENCODERBYTES (PVT) (jun-22 to
                Current)
              </li>
              <li>
                MERN Stack Web Developer at String Technologies (PVT)
                (january-23 to august-23)
              </li>
              <li>Code Alpha (Intern Full Stack) (jun-1 to jun-30) 23</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-evenly py-6">
        <div className="transition-all duration-700 hover:scale-110">
          <Image
            className="rounded-md"
            src="/YoutubeQRCode.png"
            alt="GitHub QR Code"
            width={150}
            height={150}
          />
        </div>
        <div className="transition-all duration-700 hover:scale-110">
          <Image
            className="rounded-md"
            src="/LinkedInQRcode.png"
            alt="LinkedIn QR Code"
            width={150}
            height={150}
          />
        </div>

        <div className="transition-all duration-700 hover:scale-110">
          <Image
            className="rounded-md"
            src="/GithubQRcode.png"
            alt="GitHub QR Code"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
