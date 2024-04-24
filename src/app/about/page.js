import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <section class="">
        <div className="px-4 mx-auto max-w-screen-xl text-center  overflow-x-auto">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Web Developer and Instructor with Expertise in MERN Stack
          </h1>
          <p class="text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            A dynamic and enthusiastic Computer Science graduate with a
            comprehensive skill set spanning various programming languages and
            computer science technologies. Proficient in database programming,
            web development, and desktop application development, with a proven
            ability to multitask effectively. Possessing a strong aptitude for
            problem-solving and a track record of successful collaboration with
            individuals from diverse backgrounds. Self-supported, driven, and
            committed to continuous learning and professional growth, serving as
            a Senior MERN Stack, PHP, and ASP.NET Web Developer at EncoderBytes
            (Pvt) Ltd.
          </p>
        </div>
      </section>

      <div className="flex gap-2 justify-evenly mt-3">
        <div>
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-700 hover:scale-110"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              S K I L L S
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Web Design & Web Development <br></br> MERN stack development{" "}
              <br></br> Asp.Net development <br></br> PHP development <br></br>{" "}
              Communication Skill <br></br> Composing <br></br> MySQL <br></br>{" "}
              Problem-solving <br></br> Time Management <br></br> Computer
              Languages: Next.js, React.js <br></br> MongoDB <br></br> XAMPP
            </p>
          </a>
        </div>
        <div class="max-h-[380px] overflow-y-auto rounded-lg transition-all duration-700 hover:scale-110">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Projects
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              BACKUP FILE SOFTWARE Using this sohware, I create a backup of the
              original files which is uploaded to SAP Software. The reason is
              that if the original file is deletedso we have all ready saved
              that file in backup folder SCALE SOFTWARE This software is used
              for taking the weights of the materials which are loaded into
              tractor and trucks, e.g first weight and last weight . This first
              and last weight minus from each other the resultan weight is the
              material weight. VIRTUAL BOOK SHOP WEBSITE This project was made
              for an online book shop for their clients to buy books from them
              using mern. MEDICINE SUPPLIERS WEBSITES This project was made for
              an supply a medicine for their clients to buy medicine from them
              using mern. BULK FILE REMAINING SOFTWARE Using this software,
              Rename the original files to the created date of the file and
              store the old and new create name in the database. (CIR) Climate
              Impact Information Resource (lIVE) I have developed a project
              intended for the government to publish the Climate Impact
              Information Resource Book (CIR) using mern. Ecommerce Web
              Application I have developed Car Parts Selling web appliction
              using mern. Alaqar-App (lIVE) I have developing a project intended
              for the company for property deailing using mern.
            </p>
          </a>
        </div>
        <div class="max-h-[380px] overflow-y-auto rounded-lg transition-all duration-700 hover:scale-110">
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 overflow-hidden"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              W O R K E X P E R I E N C E
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              SENIOR MERN STACK, PHP, AND ASP.NET WEB DEVELOPER/ ENCODERBYTES
              (PVT) Senior MERN Stack Web Developer (Front End and Back End),
              Also Proficient in ASP.NET and PHP Development Teach mern stack
              course from the Side of EBLearning / Encoder Bytes. AS A
              INSTRUCTOR Teach mern stack course in Shaykh Zayed Islamic Centre
              University of peshawar under the (NAVTTC) organization. AS A
              INSTRUCTOR IN SHAYKH ZAYED ISLAMIC CENTRE -- NAVTTC ALSO PERSONALY
              TEACH WEB DEVELOPMENT CLASSES ONLINE USING GOOGEL MEET MIS
              REPORTING AND DOTNET DEVELOPER / FF STEEL I have one year of
              experience working with the .NET Framework, during which I
              developed two software applications. The first is a backup file
              utility, designed to securely manage and create backups of
              important files. The second is a file renaming application,
              facilitating bulk renaming of files for efficient organization
            </p>
          </a>
        </div>
      </div>

      <div className="flex gap-4 justify-evenly my-6">
        <div className="transition-all duration-700 hover:scale-110">
          <Image
            className="rounded-md"
            src="/YoutubeQRCode.png"
            alt="GitHub QR Code"
            width={200}
            height={200}
          />
        </div>
        <div className="transition-all duration-700 hover:scale-110">
          <Image
            className="rounded-md"
            src="/LinkedInQRcode.png"
            alt="LinkedIn QR Code"
            width={200}
            height={200}
          />
        </div>

        <div className="transition-all duration-700 hover:scale-110">
          <Image
            className="rounded-md"
            src="/GithubQRcode.png"
            alt="GitHub QR Code"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
