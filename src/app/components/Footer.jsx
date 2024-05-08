import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="relative pt-8 pb-6 ">
      <div className="w-full">
        <div className="w-full px-4 mx-auto max-w-[1400px] text-white">
          <div className="text-center ">
            <h1 className="text-center font-semibold tracking-normal leading-relaxed text-3xl">
              Connect with me here.
            </h1>
          </div>
          <div className="w-full mx-auto px-4 max-w-[900px] mt-8 mb-6">
            <div className="grid grid-cols-5">
              <div className="flex justify-center items-center">
                <a href="https://twitter.com/Purneshstalwart">
                  <FaXTwitter className="w-9 h-7" />
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a href="https://www.instagram.com/being_purnesh?igsh=MXg3ZTR2ZjVyeG1rdA==">
                  <FaInstagram className="w-9 h-7" />
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a href="https://www.linkedin.com/in/purnesh-k-465aba228/">
                  <FaLinkedinIn className="w-9 h-7" />
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a href="https://github.com/kalavaguntapurnesh">
                  <FaGithub className="w-9 h-7" />
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a href="/">
                  <MdOutlineAlternateEmail className="w-9 h-7" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <div className="border border-b "></div>
          </div>

          <div className="mt-4">
            <h1 className="text-center tracking-normal leading-relaxed text-xs">
              Copyright ©2024 Purnesh Kalavagunta
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
