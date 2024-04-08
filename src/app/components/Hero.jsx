import React from "react";
import Lottie from "lottie-react";
import HeroOne from "../../../public/lotties/HeroOne.json";

const Hero = () => {
  return (
    <div className="w-full pt-28 pb-8 h-auto ">
      <div className="max-w-[1400px] m-auto grid md:grid-cols-2 ">
        <div className="flex flex-col gap-4 w-full">
          <div className=" flex items-center lg:justify-start justify-center mt-4 mx-3">
            <h1 className="xl:text-6xl text-[48px] font-bold lg:px-2 xl:leading-[72px] lg:leading-[60px] lg:text-start text-center text-white">
              Hello, myself Purnesh <br></br>
              <span className="text-colorOne">Kalavagunta</span>
            </h1>
          </div>

          <div className="flex items-center lg:justify-start justify-center mx-3">
            <h1 className="lg:text-[24px] text-[24px] font-semibold lg:px-2 lg:text-start text-center text-white">
              Software Engineer (February 2023 - Present)
            </h1>
          </div>

          <div className="flex items-center lg:justify-start justify-center mx-3">
            <p className="lg:text-lg text-[16px] text-white lg:px-2 lg:text-start text-center">
              I'm passionate MERN Stack web and app developer specializing in
              React.js, React Native, Spring, Node.js, and Express.js.
              Experienced in creating robust and user-friendly web applications
              across the software development lifecycle.
            </p>
          </div>

          {/* <div className="flex items-center lg:justify-start justify-center mx-3">
            <p className="lg:text-lg text-[16px] text-white lg:px-2 lg:text-start text-center">
              Currently available for Freelance Projects.
            </p>
          </div> */}

          <div className="flex items-center lg:justify-start justify-center md:mx-5">
            <a
              href="/contact"
              className="bg-white font-semibold outline-none
            rounded-md hover:shadow-form transition duration-1000 ease-in-out hover:bg-colorTwo text-black px-8 py-2.5 text-center"
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
