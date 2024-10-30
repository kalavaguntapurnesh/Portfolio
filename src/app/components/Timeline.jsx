import React from "react";

const Timeline = () => {
  return (
    <div className="relative pt-8 pb-12 bg-white dark:bg-[#000300]" id="timeline">
      <div className="w-full">
        <div className="w-full px-4 mx-auto max-w-[1400px] text-white">
          <div className="mt-4 mb-10 flex flex-col flex-wrap items-center">
            <div className="group transition duration-1000 dark:text-white text-headingColor">
              <h1 className="text-center font-bold tracking-normal leading-relaxed text-3xl">
                Education & Experience
              </h1>
              <div className="bg-green-500 h-[3px] w-full group-hover:w-0 transition-all duration-500"></div>
            </div>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-green-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                >
                  <path
                    fillRule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">
                    Secondary Education
                  </div>
                  <time className="font-caveat font-medium text-indigo-500">
                    May 2017
                  </time>
                </div>
                <div className="text-sideHeading">
                  Completed Secondary Education with CGPA of{" "}
                  <span className="font-semibold">10/10</span> which made me a
                  state topper for the year 2017.
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-green-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                >
                  <path
                    fillRule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">
                    High School Diploma
                  </div>
                  <time className="font-caveat font-medium text-indigo-500">
                    April 2019
                  </time>
                </div>
                <div className="text-sideHeading">
                  Completed my high school diploma with{" "}
                  <span className="font-semibold">98.8%</span> of major in
                  Physics, Chemistry and Mathematics (my favourite subject 😉)
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-green-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                >
                  <path
                    fillRule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">
                    Bachelor of Technology (B.Tech)
                  </div>
                  <time className="font-caveat font-medium text-indigo-500">
                    May 2023
                  </time>
                </div>
                <div className="text-sideHeading">
                  Graduated my bachelor's with{" "}
                  <span className="font-semibold">86%</span> and learnt on how
                  to deal complex things in life along with my studies.
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-green-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                >
                  <path
                    fillRule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">
                    Full Stack Developer Intern
                  </div>
                  <time className="font-caveat font-medium text-indigo-500">
                    Feb 2023 - May 2023
                  </time>
                </div>
                <div className="text-sideHeading">
                  Worked as an intern in the field of full stack development and
                  learnt variety of tech stack like TailwindCSS, NodeJS, React
                  and Spring.
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white group-[.is-active]:bg-green-500 text-green-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                >
                  <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">
                    Full Stack Developer
                  </div>
                  <time className="font-caveat font-medium text-amber-500">
                    June 2023 - Present
                  </time>
                </div>
                <div className="text-sideHeading">
                  Currently working as a full stack developer dealing with web
                  and app applications using NextJS, React and React Native.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
