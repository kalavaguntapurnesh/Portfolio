import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="relative pt-8 pb-16 bg-white dark:bg-[#000300]" id="skills">
      <div className="w-full">
        <div className="w-full px-4 mx-auto max-w-[1400px] text-white">
          <div className="mt-4 mb-8 flex flex-col flex-wrap items-center">
            <div className="group transition duration-1000 text-headingColor dark:text-white ">
              <h1 className="text-center font-bold tracking-normal leading-relaxed text-3xl">
                Skills & Tools Set
              </h1>
              <div className="bg-green-500 h-[3px] w-full group-hover:w-0 transition-all duration-500"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-3 gap-6">
            <div className="flex flex-col justify-center items-center rounded-md">
              <div className="my-1">
                <Image
                  src="/react.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  React.js
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md ">
              <div className="my-1">
                <Image
                  src="/next-js.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  Next.js
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md ">
              <div className="my-1">
                <Image
                  src="/ts.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  Typescript
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md ">
              <div className="my-1">
                <Image
                  src="/jwt.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  Flutter
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md ">
              <div className="my-1">
                <Image
                  src="/Tailwind.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  Tailwind CSS
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md ">
              <div className="my-1">
                <Image
                  src="/redux.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  Redux
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md ">
              <div className="my-1">
                <Image
                  src="/JS.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  Javascript
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md ">
              <div className="my-1">
                <Image
                  src="/Node.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  Node.js
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md ">
              <div className="my-1">
                <Image
                  src="/Mongo.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  Mongo DB
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md ">
              <div className="my-1">
                <Image
                  src="/HTML.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  AWS Cloud
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md">
              <div className="my-1">
                <Image
                  src="/CSS.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  Docker
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md ">
              <div className="my-1">
                <Image
                  src="/Spring.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  Spring
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md ">
              <div className="my-1">
                <Image
                  src="/Mysql.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  MySQL
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md ">
              <div className="my-1">
                <Image
                  src="/Java.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  Java
                </h1>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center rounded-md">
              <div className="my-1">
                <Image
                  src="/Figma.svg"
                  alt=""
                  width={27}
                  height={52}
                  className="h-16 w-16"
                ></Image>
              </div>
              <div className="my-1">
                <h1 className="font-semibold text-md tracking-wide text-headingColor dark:text-white ">
                  Figma
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
