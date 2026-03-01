import React from "react";
import { motion } from "framer-motion";

const ExperienceTimeline = () => {
  const experiences = [
    {
      college: "Alcheminds Solutions Pvt Ltd, India",
      date: "June 2023 - Jan 2026",
      subject: "Full Stack App & Web Developer",
      description:
        "Worked as a Full Stack Developer, responsible for designing, developing, and maintaining web and mobile applications. Collaborating with cross-functional teams to deliver high-quality software solutions that meet client requirements and enhance user experience.",
      icon: "https://www.clouddatanetworks.com/assets/logo-ChTLD_gX.png",
      link: "https://www.alchemindssolutions.com/",
    },
    {
      college: "Cloud Data Networks, USA",
      date: "February 2023 - May 2023",
      subject: "Full Stack Developer Intern",
      description:
        "Interned as a Full Stack Developer, contributing to the development of web applications and services. Gained hands-on experience in front-end and back-end technologies, collaborating with senior developers to implement features and optimize performance.",

      icon: "https://www.alchemindssolutions.com/assets/l8-B6JxuAcn.png",
      link: "https://www.clouddatanetworks.com/",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-4 lg:px-0 px-8">
      <motion.div 
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
      </motion.div>
      <div className="max-w-5xl mx-auto">
        <div className="relative border-l border-gray-300">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="ml-10 mb-12 relative"
            >
              {/* Icon */}
              <a
                href={exp.link}
                className="absolute border-none -left-17 top-1 rounded-full bg-white border flex items-center justify-center"
              >
                <img
                  src={exp.icon}
                  alt={`${exp.college} logo`}
                  className="rounded-full w-14 h-14 object-cover"
                  width="56"
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
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
