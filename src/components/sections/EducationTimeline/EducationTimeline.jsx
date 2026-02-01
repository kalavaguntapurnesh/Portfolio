import React from "react";
import UofR from "@/assets/UofR.jpg";
import Narayana from "@/assets/Narayana.avif";
import SVCE from "@/assets/SVCE.png";

const EducationTimeline = () => {
  const experiences = [
    {
      college: "University of Roehampton, London",
      date: "Jan 2026 - Jan 2027",
      title: "University of Roehampton, London",
      subject: "Artificial Intelligence",
      description:
        "Pursuing a Master's degree in Artificial Intelligence with a focus on machine learning, deep learning, and data science. Engaging in research projects that explore innovative AI applications across various industries.",
      icon: UofR,
      link: "https://www.roehampton.ac.uk/",
    },
    {
      college: "Sri Venkateswara College of Engineering, India",
      date: "August 2019 - May 2023",
      title: "Bachelors in Computer Science",
      subject: "Computer Science & Engineering",
      description:
        "Graduated with First Class Honors, achieving a CGPA of 8.39/10. Actively participated in coding competitions and hackathons, securing top positions in several events and demonstrating strong problem-solving skills.",
      icon: SVCE,
      link: "https://svce.edu.in/",
    },
    {
      college: "Narayana Junior College, India",
      date: "June 2017 - May 2019",
      title: "Hack JKU",
      subject: "Mathematics, Physics, Chemistry",
      description:
        "Achieved a top 1% rank among all participants in the State Level Examinatiions, demonstrating strong problem-solving skills and mathematical aptitude.",
      icon: Narayana,
      link: "https://www.narayanajuniorcolleges.com/",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto pt-12 mt-4 lg:px-0 px-8">
      <div className="flex flex-wrap flex-col items-center pb-3">
        <div className="text-center mt-4">
          <h3 className="lg:text-3xl text-2xl font-bold ">
            My Education History
          </h3>
        </div>
        <div className="md:w-40 w-20 h-1 border-b-2 border-brand mt-px"></div>
      </div>
      <div className="max-w-5xl mx-auto pt-8">
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
                  alt="education_image"
                  className="rounded-full w-14 h-14 object-cover"
                />
              </a>

              {/* Content */}
              <p className="text-sm text-gray-500 mb-1">{exp.date}</p>
              <h3 className="text-xl font-semibold">
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

export default EducationTimeline;
