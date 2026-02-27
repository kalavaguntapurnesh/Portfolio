import React from "react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      college: "Alcheminds Solutions Pvt Ltd, India",
      date: "June 2023 - Jan 2026",
      subject: "Full Stack App & Web Developer",
      description:
        "Worked as a Full Stack Developer, responsible for designing, developing, and maintaining web and mobile applications. Collaborating with cross-functional teams to deliver high-quality software solutions that meet client requirements and enhance user experience.",
      icon: "https://media.licdn.com/dms/image/v2/D4E0BAQECTornTl8u4g/company-logo_200_200/company-logo_200_200/0/1736446884566?e=1771459200&v=beta&t=opoIokrut1hmwXHRxQeImc7zE1fkjvVkZWXps6aaHjE",
      link: "https://www.alchemindssolutions.com/",
    },
    {
      college: "Cloud Data Networks, USA",
      date: "February 2023 - May 2023",
      subject: "Full Stack Developer Intern",
      description:
        "Interned as a Full Stack Developer, contributing to the development of web applications and services. Gained hands-on experience in front-end and back-end technologies, collaborating with senior developers to implement features and optimize performance.",

      icon: "https://media.licdn.com/dms/image/v2/C560BAQEdkNY06sdL0A/company-logo_200_200/company-logo_200_200/0/1676325607737/cloud_data_networks_logo?e=1771459200&v=beta&t=1f0K42tuhpfbR5ulNL_u_xr3mFZhdtZldW7dvFpksas",
      link: "https://www.clouddatanetworks.com/",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-4 lg:px-0 px-8">
      <div className="mb-8 flex items-center justify-center">
        <div className="flex flex-wrap flex-col items-center pb-3">
          <div className="text-center mt-4">
            <h3 className="lg:text-3xl text-2xl font-bold ">
              My Work Experience
            </h3>
          </div>
          <div className="md:w-40 w-20 h-1 border-b-2 border-brand mt-px"></div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="relative border-l border-gray-300">
          {experiences.map((exp, index) => (
            <div key={index} className="ml-10 mb-12 relative">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
