import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import figma from "@/assets/figma.svg";
import react from "@/assets/react.svg";
import next from "@/assets/next.svg";
import ts from "@/assets/ts.svg";
import js from "@/assets/js.svg";
import docker from "@/assets/docker.svg";
import angular from "@/assets/angular.svg";
import python from "@/assets/python.svg";
import android from "@/assets/android.svg";
import vue from "@/assets/vue.svg";
import flutter from "@/assets/flutter.svg";
import tailwind from "@/assets/tailwind.svg";
import spring from "@/assets/spring.svg";
import postgresql from "@/assets/postgresql.svg";
import nest from "@/assets/nest.svg";
import mongodb from "@/assets/mongodb.svg";
import aws from "@/assets/HTML.svg";
import kotlin from "@/assets/kotlin.svg";
import kubernetes from "@/assets/kubernetes.svg";
import firebase from "@/assets/firebase.svg";

const Technologies = () => {
  const { isDarkMode } = useDarkMode();

  const logos = [
    {
      src: react,
      alt: "SNG",
      width: "w-[60px] h-[60px]",
    },
    {
      src: next,
      alt: "Alcheminds",
      width: "w-[60px] h-[60px]",
    },
    {
      src: ts,
      alt: "LMClub",

      width: "w-[60px] h-[60px]",
    },

    {
      src: angular,
      alt: "LMClub",

      width: "w-[60px] h-[60px]",
    },
    {
      src: figma,
      alt: "Vahas",

      width: "w-[60px] h-[60px]",
    },

    {
      src: docker,
      alt: "LMClub",

      width: "w-[60px] h-[60px]",
    },
    {
      src: python,
      alt: "LMClub",

      width: "w-[60px] h-[60px]",
    },
    {
      src: android,
      alt: "LMClub",

      width: "w-[60px] h-[60px]",
    },
    {
      src: kubernetes,
      alt: "LMClub",

      width: "w-[60px] h-[60px]",
    },
    {
      src: js,
      alt: "LMClub",

      width: "w-[60px] h-[60px]",
    },
  ];

  const logosTwo = [
    {
      src: aws,
      alt: "SNG",
      width: "w-[60px] h-[60px]",
    },
    {
      src: postgresql,
      alt: "LMClub",
      width: "w-[60px] h-[60px]",
    },

    {
      src: flutter,
      alt: "Alcheminds",
      width: "w-[60px] h-[60px]",
    },
    {
      src: spring,
      alt: "LMClub",
      width: "w-[60px] h-[60px]",
    },
    {
      src: vue,
      alt: "Vahas",

      width: "w-[60px] h-[60px]",
    },
    {
      src: mongodb,
      alt: "LMClub",
      width: "w-[60px] h-[60px]",
    },
    {
      src: tailwind,
      alt: "LMClub",
      width: "w-[60px] h-[60px]",
    },

    {
      src: nest,
      alt: "LMClub",
      width: "w-[60px] h-[60px]",
    },
    {
      src: kotlin,
      alt: "LMClub",
      width: "w-[60px] h-[60px]",
    },
    {
      src: firebase,
      alt: "LMClub",
      width: "w-[60px] h-[60px]",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it animates only once
    threshold: 0.5, // Starts when 50% of the component is visible
  });
  return (
    <>
      <div
        className={`lg:pt-20 pt-4 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-6xl">
              <div className="py-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap flex-col items-center pb-3">
                    <div className="text-center mt-4">
                      <h3 className="lg:text-3xl text-2xl font-bold ">
                        Empower Your Product with Perfect Technology
                      </h3>
                    </div>
                    <div className="md:w-40 w-20 h-1 border-b-2 border-brand mt-px"></div>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      By combining thoughtful system design with modern
                      technologies, I help build products that are reliable,
                      scalable, and engineered for long-term success.
                    </p>
                  </div>
                </div>

                <div
                  className={`lg:pt-12 overflow-hidden ${
                    isDarkMode ? "bg-gray-900" : "bg-white"
                  }`}
                >
                  <div className="relative w-full">
                    <div className="logo-slider">
                      <div className="logo-track">
                        {[...Array(4)].map((_, index) => (
                          <div
                            key={index}
                            className="flex flex-nowrap gap-12 mx-6"
                          >
                            {logos.map((logo, i) => (
                              <a
                                key={i}
                                href={logo.link}
                                className="flex justify-center items-center"
                              >
                                <img
                                  src={logo.src}
                                  alt={logo.alt}
                                  className={`${logo.width} object-contain`}
                                />
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:pt-12 lg:hidden block overflow-hidden bg-white">
                  <div className="relative w-full">
                    <div className="logo-slider">
                      <div className="logo-track">
                        {[...Array(4)].map((_, index) => (
                          <div
                            key={index}
                            className="flex flex-nowrap gap-12 mx-6"
                          >
                            {logos.slice(0, 4).map((logo, i) => (
                              <a
                                key={i}
                                href={logo.link}
                                className="flex justify-center items-center"
                              >
                                <img
                                  src={logo.src}
                                  alt={logo.alt}
                                  className={`${logo.width} object-contain`}
                                />
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:pt-8 overflow-hidden bg-white">
                  <div className="relative w-full">
                    <div className="logo-slider">
                      <div className="logo-track">
                        {[...Array(4)].map((_, index) => (
                          <div
                            key={index}
                            className="flex flex-nowrap gap-12 mx-6"
                          >
                            {logosTwo.map((logo, i) => (
                              <div
                                key={i}
                                className="flex justify-center items-center"
                              >
                                <img
                                  src={logo.src}
                                  alt={logo.alt}
                                  className={`${logo.width} object-contain flex`}
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:pt-8 lg:hidden block overflow-hidden bg-white">
                  <div className="relative w-full">
                    <div className="logo-slider">
                      <div className="logo-track">
                        {[...Array(4)].map((_, index) => (
                          <div
                            key={index}
                            className="flex flex-nowrap gap-12 mx-6"
                          >
                            {logosTwo.slice(0, 4).map((logo, i) => (
                              <div
                                key={i}
                                className="flex justify-center items-center"
                              >
                                <img
                                  src={logo.src}
                                  alt={logo.alt}
                                  className={`${logo.width} object-contain flex`}
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
