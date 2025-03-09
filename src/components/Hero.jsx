import React from "react";
import Lottie from "lottie-react";
import HeroOne from "../assets/HeroOne.json";

const Hero = () => {
  return (
    <div className="w-full pt-28 pb-8 h-auto bg-[#000300]" id="home">
      <div className="max-w-[1400px] m-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-4 w-full lg:mb-0 mb-6 space-y-2 lg:ml-6 mt-6">
          <div className="flex items-center lg:justify-start justify-center ">
            <div className="h-4 w-1 bg-green-500"></div>
            <h1 className="ml-2 text-lg font-bold text-green-500 uppercase">
              collaborate with me
            </h1>
          </div>
          <div className=" flex items-center lg:justify-start justify-center ">
            <h1 className="xl:text-6xl text-[40px] font-bold xl:leading-[72px] lg:leading-[60px] lg:text-start text-center text-headingColor text-white">
              Hello, myself Purnesh
              <span className="text-green-500"> Kalavagunta</span>
            </h1>
          </div>

          <div className="flex items-center lg:justify-start justify-center">
            <h1 className="lg:text-[24px] text-[24px] font-semibold  lg:text-start text-center text-headingColor text-white">
              Software Engineer (February 2023 - Present)
            </h1>
          </div>

          <div className="flex items-center lg:justify-start justify-center ">
            <p className="lg:text-lg text-[16px] text-sideHeading lg:text-start text-center text-white">
              I'm passionate MERN Stack Web and App developer specialized in
              React.js, React Native, Spring, Node.js, and Express.js.
              Experienced in creating robust and user-friendly web applications
              across the software development lifecycle.
            </p>
          </div>

          <div className="md:flex items-center lg:justify-start justify-center hidden">
            <a
              href="#contact"
              className="bg-green-500 font-medium outline-none
              rounded-full transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
            >
              Let's get started
            </a>
          </div>

          <div className="mx-8">
            <a
              href="#contact"
              className="bg-green-500 dark:text-black font-medium outline-none md:hidden block
                      rounded-full hover:shadow-form transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end items-center ">
          <Lottie
            animationData={HeroOne}
            loop={true}
            className="lg:w-10/12 w-11/12 lg:h-96 h-92 bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
