import React, { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Record = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="pt-20 pb-4">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="justify-center w-full text-center pb-4">
                <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                  <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-8 mx-auto justify-center items-center content-center">
                    <div className=" flex flex-col gap-1">
                      <div className=" h-12 flex justify-center items-center">
                        <h1 className="font-bold text-5xl text-white tracking-wider">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={6}
                              duration={3}
                              delay={0}
                            ></CountUp>
                          )}
                          +
                        </h1>
                      </div>
                      <div className=" h-20 flex justify-center items-center">
                        <h1 className="font-bold tracking-wide leading-relaxed md:text-base text-sm text-white">
                          Projects developed across various tech stack.
                        </h1>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <div className=" h-12 flex justify-center items-center tracking-wider">
                        <h1 className="font-bold text-5xl text-white">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={100}
                              duration={3}
                              delay={0}
                            ></CountUp>
                          )}
                          +
                        </h1>
                      </div>
                      <div className=" h-20 flex justify-center items-center">
                        <h1 className="font-bold tracking-wide leading-relaxed md:text-base text-sm text-white">
                          Satisfied Clients and users across the globe.
                        </h1>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <div className=" h-12 flex justify-center items-center">
                        <h1 className="font-bold text-5xl text-white tracking-wider">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={4}
                              duration={3}
                              delay={0}
                            ></CountUp>
                          )}
                          .
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={8}
                              duration={3}
                              delay={0}
                              className="font-bold"
                            ></CountUp>
                          )}
                          /
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={5}
                              duration={3}
                              delay={0}
                            ></CountUp>
                          )}
                        </h1>
                      </div>
                      <div className=" h-20 flex flex-col justify-center items-center">
                        <div className="flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-yellow-400 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-400 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-400 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-400 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-400 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <h1 className="font-bold tracking-wide leading-relaxed md:text-base text-sm text-white">
                          Excellent Ratings From Clients and Real time Users.
                        </h1>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <div className=" h-12 flex justify-center items-center">
                        <h1 className="font-bold text-5xl text-white tracking-wider">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={30}
                              duration={3}
                              delay={0}
                            ></CountUp>
                          )}
                          +
                        </h1>
                      </div>
                      <div className=" h-20 flex justify-center items-center">
                        <h1 className="font-bold tracking-wide leading-relaxed md:text-base text-sm text-white">
                          Real-time problems and bugs solved over an year.
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Record;
