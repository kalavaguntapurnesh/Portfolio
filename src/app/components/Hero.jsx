import React from "react";
import Lottie from "lottie-react";
import HeroOne from "../../../public/lotties/HeroOne.json";

const Hero = () => {
  return (
    <div
      className="w-full pt-28 pb-8 h-auto bg-white dark:bg-[#000300]"
      id="home"
    >
      <div className="max-w-[1400px] m-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-4 w-full">
          <div className=" flex items-center lg:justify-start justify-center mt-4 mx-3">
            <h1 className="xl:text-6xl text-[48px] font-bold lg:px-2 xl:leading-[72px] lg:leading-[60px] lg:text-start text-center dark:text-white text-headingColor">
              Hello, myself Purnesh <br></br>
              <span className="text-green-500">Kalavagunta</span>
            </h1>
          </div>

          <div className="flex items-center lg:justify-start justify-center mx-3">
            <h1 className="lg:text-[24px] text-[24px] font-semibold lg:px-2 lg:text-start text-center dark:text-white text-headingColor">
              Software Engineer (February 2023 - Present)
            </h1>
          </div>

          <div className="flex items-center lg:justify-start justify-center mx-3">
            <p className="lg:text-lg text-[16px] dark:text-white text-sideHeading lg:px-2 lg:text-start text-center tracking-normal ">
              I'm passionate MERN Stack Web and App developer specialized in
              React.js, React Native, Spring, Node.js, and Express.js.
              Experienced in creating robust and user-friendly web applications
              across the software development lifecycle.
            </p>
          </div>

          <div className="flex items-center lg:justify-start justify-center md:mx-5 lg:mt-1 mt-2 lg:mb-0 mb-5">
            <a
              href="#contact"
              className="bg-green-500 dark:text-black outline-none
            rounded-3xl hover:shadow-form transition duration-1000 ease-in-out hover:bg-[#10C0A2] text-white px-8 py-2.5 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end items-center ">
          <Lottie
            animationData={HeroOne}
            loop={true}
            className="lg:w-10/12 w-11/12 lg:h-96 h-92 dark:bg-black bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
