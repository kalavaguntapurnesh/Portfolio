import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="relative pt-8 md:pb-16 pb-4" id="projects">
      <div className="w-full">
        <div className="w-full px-4 mx-auto max-w-[1400px] text-white">
          <div className="mt-4 mb-8">
            <h1 className="text-center font-semibold tracking-normal leading-relaxed text-3xl">
              My Projects
            </h1>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://mac-global-services.vercel.app/"
              className="flex flex-col justify-center items-center "
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
                <h1 className="text-lg font-semibold">
                  MAC Global Services Website
                </h1>
                <p className="text-md font-normal text-gray-400">
                  A freelance project developed for an education consultancy.
                </p>
              </div>
            </a>
            <a
              href="https://calendly-sigma.vercel.app/"
              className="flex flex-col justify-center items-center"
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
                <h1 className="text-lg font-semibold">
                  Appointment Scheduling Website
                </h1>
                <p className="text-md font-normal text-gray-400">
                  A freelance project developed on appointment scheduling.
                </p>
              </div>
            </a>
            <a
              href="https://clouddatanetworks.com/"
              className="flex flex-col justify-center items-center "
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
                <h1 className="text-lg font-semibold">
                  Cloud Data Networks Website
                </h1>
                <p className="text-md font-normal text-gray-400">
                  Webiste developed as an intern for our new startup company.
                </p>
              </div>
            </a>
            <a
              href="https://clouddatanetworks.com/"
              className="flex flex-col justify-center items-center "
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
                <h1 className="text-lg font-semibold">
                  MAC Global Services Website
                </h1>
                <p className="text-md font-normal text-gray-400">
                  A freelance project developed for an education consultancy.
                </p>
              </div>
            </a>
            <a
              href="https://clouddatanetworks.com/"
              className="flex flex-col justify-center items-center "
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
                <h1 className="text-lg font-semibold">
                  MAC Global Services Website
                </h1>
                <p className="text-md font-normal text-gray-400">
                  A freelance project developed for an education consultancy.
                </p>
              </div>
            </a>
            <a
              href="https://clouddatanetworks.com/"
              className="flex flex-col justify-center items-center "
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
                <h1 className="text-lg font-semibold">
                  MAC Global Services Website
                </h1>
                <p className="text-md font-normal text-gray-400">
                  A freelance project developed for an education consultancy.
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
