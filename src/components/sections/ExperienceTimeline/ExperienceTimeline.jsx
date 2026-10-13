import React from "react";
import { motion as Motion } from "framer-motion";
import rsuLogo from "../../../assets/rsu-logo-black.svg";
import alchemindsLogo from "../../../assets/alcheminds-logo.png";
import cloudDataNetworksLogo from "../../../assets/cloud-data-networks.png";

const ExperienceTimeline = () => {
  const experiences = [
    {
      college: "Roehampton Students' Union",
      date: "October 2026 - Present",
      subject: "Program Representative - Artificial Intelligence",
      description:
        "• Represent students within the programme and communicate student feedback to university staff.\n• Work with school representatives and academic staff to identify and address issues affecting students.\n• Gather student feedback and contribute to discussions around improving the student experience.\n• Develop communication, leadership, teamwork, and stakeholder engagement skills.",
      icon: rsuLogo,
      link: "https://www.roehamptonstudent.com/",
    },
    {
      college: "Alcheminds Solutions Pvt Ltd, India",
      date: "June 2023 - Jan 2026",
      subject: "Full Stack App & Web Developer",
      description:
        "Worked as a Full Stack Developer, responsible for designing, developing, and maintaining web and mobile applications. Collaborating with cross-functional teams to deliver high-quality software solutions that meet client requirements and enhance user experience.",
      icon: alchemindsLogo,
      link: "https://www.alchemindssolutions.com/",
    },
    {
      college: "Cloud Data Networks, USA",
      date: "February 2023 - May 2023",
      subject: "Full Stack Developer Intern",
      description:
        "Interned as a Full Stack Developer, contributing to the development of web applications and services. Gained hands-on experience in front-end and back-end technologies, collaborating with senior developers to implement features and optimize performance.",

      icon: cloudDataNetworksLogo,
      link: "https://www.clouddatanetworks.com/",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-4 lg:px-0 px-8">
      <Motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex items-center justify-center"
      >
        <div className="flex flex-wrap flex-col items-center pb-3">
          <div className="text-center mt-4">
            <h3 className="lg:text-3xl text-2xl font-bold ">
              My Work Experience
            </h3>
          </div>
          <div className="md:w-40 w-20 h-1 border-b-2 border-brand mt-px"></div>
        </div>
      </Motion.div>
      <div className="max-w-5xl mx-auto">
        <div className="relative border-l border-gray-300">
          {experiences.map((exp, index) => (
            <Motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="ml-10 mb-12 relative"
            >
              {/* Icon */}
              <a
                href={exp.link}
                className="absolute -left-[4.5rem] top-1 flex h-12 w-16 items-center justify-center rounded-md bg-white p-1 md:-left-20 md:h-14 md:w-20"
              >
                <img
                  src={exp.icon}
                  alt={`${exp.college} logo`}
                  className="h-full w-full object-contain"
                  width="80"
                  height="56"
                  loading="lazy"
                  decoding="async"
                />
              </a>

              {/* Content */}
              <p className="text-sm text-gray-500 mb-1">{exp.date}</p>
              <h3 className="text-xl font-medium text-gray-900">
                {exp.college}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{exp.subject}</p>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {exp.description}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
