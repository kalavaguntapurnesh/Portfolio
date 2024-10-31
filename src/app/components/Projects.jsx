import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="relative pt-8 md:pb-16 pb-4 bg-white dark:bg-[#000300]" id="projects">
      <div className="w-full">
        <div className="w-full px-4 mx-auto max-w-[1400px] text-white">
          <div className="mt-4 mb-8 flex flex-col flex-wrap items-center">
            <div className="group transition duration-1000 dark:text-white text-headingColor">
              <h1 className="text-center font-bold tracking-normal leading-relaxed text-3xl">
                Projects Developed
              </h1>
              <div className="bg-green-500 h-[3px] w-full group-hover:w-0 transition-all duration-500"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://mac-global.vercel.app/"
              className="flex flex-col justify-center items-center border-[0.5px]  rounded p-3"
            >
              <div className="w-[90%] md:w-full">
                <Image
                  src="/One.png"
                  alt="Hello"
                  width={200}
                  height={200}
                  className="w-full rounded-t-lg"
                ></Image>
              </div>
              <div className="w-[90%] md:w-full mt-2">
                <h1 className="text-lg font-bold dark:text-white text-headingColor">
                  MAC Global Services Website
                </h1>
                <p className="text-md font-normal text-sideHeading">
                  A freelance project developed for an education consultancy.
                </p>
              </div>
            </a>
            <a
              href="https://securenetworkguardsolutions.com/"
                  className="flex flex-col justify-center items-center border-[0.5px]  rounded p-3"
            >
              <div className="w-[90%] md:w-full">
                <Image
                  src="/Five.png"
                  alt="Hello"
                  width={200}
                  height={200}
                  className="w-full rounded-t-lg"
                ></Image>
              </div>
              <div className="w-[90%] md:w-full mt-2">
                <h1 className="text-lg font-bold dark:text-white text-headingColor">
                  Secure Network Guard Solutions Website
                </h1>
                <p className="text-md font-normal text-sideHeading">
                  A project developed for SNG company using HTML, CSS and
                  Javascript.
                </p>
              </div>
            </a>

            <a
              href="https://clouddatanetworks.com/"
                   className="flex flex-col justify-center items-center border-[0.5px]  rounded p-3"
            >
              <div className="w-[90%] md:w-full">
                <Image
                  src="/Three.png"
                  alt="Hello"
                  width={200}
                  height={200}
                  className="w-full rounded-t-lg"
                ></Image>
              </div>
              <div className="w-[90%] md:w-full mt-2">
                <h1 className="text-lg font-bold dark:text-white text-headingColor">
                  Cloud Data Networks Website
                </h1>
                <p className="text-md font-normal text-sideHeading">
                  Webiste developed as an intern for our new startup company.
                </p>
              </div>
            </a>
            <a
              href="https://alchemindssolutions.com/"
            className="flex flex-col justify-center items-center border-[0.5px]  rounded p-3"
            >
              <div className="w-[90%] md:w-full">
                <Image
                  src="/Four.png"
                  alt="Hello"
                  width={200}
                  height={200}
                  className="w-full rounded-t-lg"
                ></Image>
              </div>
              <div className="w-[90%] md:w-full mt-2">
                <h1 className="text-lg font-bold dark:text-white text-headingColor">
                  Alcheminds Solutions Website
                </h1>
                <p className="text-md font-normal text-sideHeading">
                  A website developed as an intern using HTML, CSS and
                  Javascript.
                </p>
              </div>
            </a>
            <a
              href="https://syndeo-frontendtwo.vercel.app/"
             className="flex flex-col justify-center items-center border-[0.5px]  rounded p-3"
            >
              <div className="w-[90%] md:w-full">
                <Image
                  src="/Two.png"
                  alt="Hello"
                  width={200}
                  height={200}
                  className="w-full rounded-t-lg"
                ></Image>
              </div>
              <div className="w-[90%] md:w-full mt-2">
                <h1 className="text-lg font-bold dark:text-white text-headingColor">
                  Appointment Scheduling Website
                </h1>
                <p className="text-md font-normal text-sideHeading">
                  A freelance project developed on appointment scheduling.
                </p>
              </div>
            </a>
            <a
              href="https://edu-kare.vercel.app/"
               className="flex flex-col justify-center items-center border-[0.5px]  rounded p-3"
            >
              <div className="w-[90%] md:w-full">
                <Image
                  src="/Six.png"
                  alt="Hello"
                  width={200}
                  height={200}
                  className="w-full rounded-t-lg"
                ></Image>
              </div>
              <div className="w-[90%] md:w-full mt-2">
                <h1 className="text-lg font-bold dark:text-white text-headingColor">
                  Edukare Education Website
                </h1>
                <p className="text-md font-normal text-sideHeading">
                  A freelance project developed for a education marketing
                  company.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
