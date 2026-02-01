import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { useDarkMode } from "../../../contexts/DarkModeContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isDarkMode } = useDarkMode();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full fixed z-20">
      <div
        className={`w-full mx-auto max-w-7xl ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="justify-center w-full">
          <div
            className={`flex justify-between md:shadow-none shadow h-20 w-full md:top-0 top-0 max-w-350 mx-auto ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <div className="lg:flex lg:flex-row lg:justify-center lg:items-center hidden lg:gap-2">
              <div className="pl-4"></div>
              <div className="font-bold text-[30px] hidden lg:block">
                <h2 className="text-brand">PURNESH.</h2>
              </div>
            </div>

            <div className="md:ml-4 lg:hidden flex justify-center items-center ">
              <div className="font-semibold text-[26px] pl-6">
                <h2 className="text-brand">PURNESH.</h2>
              </div>
            </div>

            <ul className="hidden md:flex md:pt-4 ">
              <li className="lg:p-4 p-2.75 group cursor-pointer uppercase text-sm tracking-wider transition duration-1000 ">
                <a href="#home">Home</a>
                <div className="bg-brand h-0.5 w-0 group-hover:w-full transition-all duration-500"></div>
              </li>
              <li className="lg:p-4 p-2.75 group cursor-pointer uppercase text-sm tracking-wider transition duration-1000 ">
                <a href="#skills">Skills</a>
                <div className="bg-brand h-0.5 w-0 group-hover:w-full transition-all duration-500"></div>
              </li>
              <li className="lg:p-4 p-2.75 group cursor-pointer uppercase text-sm tracking-wider transition duration-1000 ">
                <a href="#projects">Projects</a>
                <div className="bg-brand h-0.5 w-0 group-hover:w-full transition-all duration-500"></div>
              </li>
              <li className="lg:p-4 p-2.75 group cursor-pointer uppercase text-sm tracking-wider transition duration-1000 ">
                <a href="#timeline">Experience</a>
                <div className="bg-brand h-0.5 w-0 group-hover:w-full transition-all duration-500"></div>
              </li>
              <li className="lg:p-4 p-2.75 cursor-pointer">
                <a
                  href="#contact"
                  className="bg-brand duration-1000 text-sm ease-in-out transition
        rounded-full text-white px-8 py-2 text-center"
                >
                  Contact{" "}
                </a>
              </li>
            </ul>

            <div onClick={handleNav} className="block md:hidden cursor-pointer">
              {!nav ? (
                <RiMenu3Fill size={24} className={`mr-4 mt-6  ${isDarkMode ? "text-white" : "text-black"}`} />
              ) : (
                <AiOutlineClose size={24} className={`mr-4 mt-6 ${isDarkMode ? "text-white" : "text-black"}`} />
              )}
            </div>

            <div
              className={
                !nav
                  ? "md:hidden fixed -left-full h-[75%] ease-in-out duration-1000 transition"
                  : "md:hidden fixed left-0 top-0 w-[70%] h-[75%] bg-white ease-in-out duration-1000 z-10 shadow-xl rounded"
              }
            >
              <h4 className="w-full text-2xl text-brand font-bold m-4 cursor-pointer">
                PURNESH.
              </h4>
              <ul className=" uppercase p-4">
                <li className="p-4 border-b border-gray-400 text-black cursor-pointer">
                  <a href="#home">Home</a>
                </li>
                <li className="p-4 border-b border-gray-400 text-black cursor-pointer">
                  <a href="#skills">Skills</a>
                </li>
                <li className="p-4 border-b border-gray-400 text-black cursor-pointer ">
                  <a href="#projects">Projects</a>
                </li>
                <li className="p-4 border-b border-gray-400 text-black cursor-pointer">
                  <a href="#timeline">Experience</a>
                </li>
                <li className="p-4 border-b border-gray-400 text-black cursor-pointer">
                  <a href="#contact">Contact</a>
                </li>
              </ul>

              <div className="px-4">
                <h4 className="p-4 text-xl font-semibold">Follow me on</h4>
                <div className="p-4">
                  <div className="grid grid-cols-5">
                    <a href="https://www.linkedin.com/in/purnesh-k-465aba228/">
                      <FaLinkedinIn className="w-6 h-6 text-gray-400 duration-1000 hover:text-mainColor ease-in-out" />
                    </a>
                    <a href="https://github.com/kalavaguntapurnesh">
                      {" "}
                      <SiLeetcode className="w-6 h-6 text-gray-400 duration-1000 hover:text-mainColor ease-in-out" />
                    </a>
                    <a href="https://twitter.com/Purneshstalwart">
                      <FaXTwitter className="w-6 h-6 text-gray-400 duration-1000 hover:text-mainColor ease-in-out" />
                    </a>
                    <a href="https://www.instagram.com/being_purnesh?igsh=MXg3ZTR2ZjVyeG1rdA==">
                      {" "}
                      <FaInstagram className="w-6 h-6 text-gray-400 duration-1000 hover:text-mainColor ease-in-out" />
                    </a>
                    <a href="https://github.com/kalavaguntapurnesh">
                      {" "}
                      <FaGithub className="w-6 h-6 text-gray-400 duration-1000 hover:text-mainColor ease-in-out" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
