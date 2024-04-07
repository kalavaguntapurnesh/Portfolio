import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full fixed  md:z-20 z-20 bg-[#000300]">
      <div className="w-full mx-auto max-w-[1400px]">
        <div className="justify-center w-full">
          <div
            className="text-black flex justify-between md:shadow-none shadow-xl h-24 w-full  md:top-0 top-0
     bg-[#000300] max-w-[1400px] mx-auto"
          >
            {/* <div className="flex flex-row lg:block hidden ml-2 mt-[22px] border-2 border-green-500">
              <div className="">
                <Image
                  src="/Logo.jpg"
                  alt=""
                  width={120}
                  height={100}
                  className="md:pb-4 text-3xl text-red-500 font-bold lg:pl-12 pl-6 pt-3 cursor-pointer "
                ></Image>
              </div>
              <div className="absolute top-[25px] left-[130px] font-bold text-[30px] hidden xl:block ">
                <h2 className="text-primaryColor">
                  <span className="text-primaryColor">MAC</span>GLOBAL.
                </h2>
              </div>
            </div> */}

            <div className="lg:flex lg:flex-row lg:justify-center lg:items-center hidden lg:gap-2">
              <div className="pl-4">
                {/* <Image src="/Logo.jpg" alt="" width={120} height={100}></Image> */}
              </div>
              <div className="font-semibold text-[30px] hidden lg:block">
                <h2 className="text-white">
                  <span className="text-white">PUR</span>NESH.
                </h2>
              </div>
            </div>

            <div className="md:ml-4 lg:hidden flex justify-center items-center ">
              {/* <Image
                src="/Logo.jpg"
                alt=""
                width={90}
                height={90}
                className="pb-4 pl-6 cursor-pointer w-full"
              ></Image> */}
            </div>

            <ul className="hidden md:flex md:pt-4 ">
              <li className="lg:p-4 p-[11px] cursor-pointer text-white font-medium uppercase text-sm tracking-wider">
                <Link href="/">Home</Link>
              </li>
              <li className="lg:p-4 p-[11px] cursor-pointer text-white font-medium uppercase text-sm tracking-wider">
                <Link href="/features">About </Link>
              </li>
              <li className="lg:p-4 p-[11px] cursor-pointer text-white font-medium uppercase text-sm tracking-wider">
                <Link href="/about">Skills</Link>
              </li>
              <li className="lg:p-4 p-[11px] cursor-pointer text-white font-medium uppercase text-sm tracking-wider">
                <Link href="/features">Projects</Link>
              </li>
              <li className="lg:p-4 p-[11px] cursor-pointer text-white font-medium uppercase text-sm tracking-wider">
                <Link href="/services">Experience</Link>
              </li>
              {/* <li className="lg:p-4 p-[11px] cursor-pointer text-white font-medium uppercase text-sm tracking-wider">
                <Link href="/services">Contact</Link>
              </li> */}
              <li className="lg:p-4 p-[11px] cursor-pointer font-medium">
                <a
                  href="/contact"
                  className="bg-white
        rounded-[4px] text-black px-8 py-2.5 text-center"
                >
                  Contact{" "}
                </a>
              </li>
            </ul>

            <div onClick={handleNav} className="block md:hidden cursor-pointer">
              {!nav ? (
                <AiOutlineMenu size={30} className=" mr-4 mt-6 text-white" />
              ) : (
                <AiOutlineClose size={30} className=" mr-4 mt-6  text-white" />
              )}
            </div>

            <div
              className={
                !nav
                  ? "md:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 "
                  : "md:hidden fixed left-0 top-0 w-[70%] border-r  h-[75%] bg-white dark:bg-[#000300] ease-in-out duration-1000 rounded-b-lg z-10 shadow-xl"
              }
            >
              <h1 className="w-full text-2xl text-black font-bold m-4 cursor-pointer">
                PURNESH.
              </h1>
              <ul className=" uppercase p-4">
                <li className="p-4 border-b border-gray-600 text-[#000300] cursor-pointer font-medium dark:text-white">
                  <Link href="/">Home</Link>
                </li>
                <li className="p-4 border-b border-gray-600 text-[#000300] cursor-pointer font-medium dark:text-white">
                  <Link href="/">About</Link>
                </li>
                <li className="p-4 border-b border-gray-600 text-[#000300] cursor-pointer font-medium dark:text-white">
                  <Link href="/about">Skills</Link>
                </li>
                <li className="p-4 border-b border-gray-600 text-[#000300] cursor-pointer font-medium dark:text-white">
                  <Link href="/features">Projects</Link>
                </li>
                <li className="p-4 border-b border-gray-600 text-[#000300] cursor-pointer font-medium dark:text-white">
                  <Link href="/services">Experience</Link>
                </li>
                <li className="p-4 text-[#000300] cursor-pointer font-medium dark:text-white">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
