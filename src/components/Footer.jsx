import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Leetcode from "../assets/leetcode.svg";

const Footer = () => {
  return (
    <div className="relative pt-8 pb-6 bg-[#000300]">
      <div className="w-full">
        <div className="w-full px-4 mx-auto max-w-[1400px] text-white">
          <div className="flex flex-col flex-wrap items-center mt-2 mb-2">
            <div className="group transition duration-1000 text-headingColor text-white ">
              <h4 className="text-center font-bold tracking-normal leading-relaxed text-3xl">
                Connect with me here.
              </h4>
              <div className="bg-green-500 h-[3px] w-full group-hover:w-0 transition-all duration-500"></div>
            </div>
          </div>
          <div className="w-full mx-auto px-4 max-w-[900px] mt-8 mb-6">
            <div className="grid grid-cols-6">
              <div className="flex justify-center items-center text-blue-500">
                <a href="https://www.linkedin.com/in/purnesh-k-465aba228/">
                  <FaLinkedinIn className="md:w-9 md:h-7 w-7 h-7" />
                </a>
              </div>
              <div className="flex justify-center items-center text-cyan-500">
                <a href="https://www.facebook.com/profile.php?id=100084688968409">
                  <FaFacebookF className="md:w-9 md:h-7 w-7 h-7" />
                </a>
              </div>
              <div className="flex justify-center items-center text-pink-500">
                <a href="https://www.instagram.com/being_purnesh?igsh=MXg3ZTR2ZjVyeG1rdA==">
                  <FaInstagram className="md:w-9 md:h-7 w-7 h-7" />
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a href="https://twitter.com/purneshkalavag">
                  <FaXTwitter className="md:w-9 md:h-7 w-7 h-7 text-headingColor text-white " />
                </a>
              </div>
              <div className="flex justify-center items-center text-violet-500">
                <a href="https://github.com/kalavaguntapurnesh">
                  <FaGithub className="md:w-9 md:h-7 w-7 h-7" />
                </a>
              </div>
              <div className="flex justify-center items-center text-orange-500">
                <a href="/">
                  <img
                    src={Leetcode}
                    alt="Picture of the author"
                    className="md:w-9 md:h-7 w-7 h-7"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <div className="border border-b "></div>
          </div>

          <div className="mt-4">
            <h4 className="text-center text-headingColor text-white tracking-normal leading-relaxed text-xs">
              Copyright © 2024 Purnesh Kalavagunta. All rights reserved.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
