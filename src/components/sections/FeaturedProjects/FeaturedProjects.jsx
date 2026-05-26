import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectFive from "@/assets/projectFive.png";
import projectFour from "@/assets/projectFour.png";
import projectOne from "@/assets/projectOne.png";
import projectSeven from "@/assets/projectSeven.png";
import projectSix from "@/assets/projectSix.png";
import projectThree from "@/assets/projectThree.png";
import projectTwo from "@/assets/projectTwo.png";

const FeaturedProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "LM Club",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      description:
        "Member-focused platform built with React, Node.js, PostgreSQL, and Tailwind CSS.",
      image: projectOne,
      live: "https://www.lmclub.club/",
      repo: "#",
    },
    {
      title: "Triptovilla",
      tech: ["Spring Boot", "Angular", "Tailwind CSS", "PostgreSQL"],
      description:
        "Travel platform built with Spring Boot, Angular, Tailwind CSS, and PostgreSQL.",
      image: projectTwo,
      live: "https://dev.triptovilla.com/",
      repo: "#",
    },
    {
      title: "RMA Housing",
      tech: ["Spring Boot", "Angular", "Tailwind CSS", "PostgreSQL"],
      description:
        "Housing platform built with Spring Boot, Angular, Tailwind CSS, and PostgreSQL.",
      image: projectThree,
      live: "https://dev.rmahousing.com/",
      repo: "#",
    },
    {
      title: "Axseva",
      tech: ["React", "Node.js", "Tailwind CSS"],
      description:
        "Corporate site implemented with React, Node.js, and Tailwind CSS.",
      image: projectFour,
      live: "https://www.axseva.com/",
      repo: "#",
    },
    {
      title: "Cloud Data Networks",
      tech: ["React", "Node.js", "Tailwind CSS"],
      description:
        "Business website built with the same React and Node.js stack as Axseva.",
      image: projectFive,
      live: "https://www.clouddatanetworks.com/",
      repo: "#",
    },
    {
      title: "Alcheminds Solutions",
      tech: ["React", "Node.js", "Tailwind CSS"],
      description:
        "Solutions website built with React, Node.js, and Tailwind CSS.",
      image: projectSix,
      live: "https://www.alchemindssolutions.com/",
      repo: "#",
    },
    {
      title: "Lakshmi Areti",
      tech: ["React", "Node.js", "Tailwind CSS"],
      description:
        "Personal or business site implemented with React, Node.js, and Tailwind CSS.",
      image: projectSeven,
      live: "https://lakshmiareti.us/",
      repo: "#",
    },
  ];

  return (
    <section className=" py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap flex-col items-center pb-20">
          <div className="text-center mt-4">
            <h3 className="lg:text-3xl text-2xl font-bold ">
              My Featured Projects
            </h3>
          </div>
          <div className="md:w-40 w-20 h-1 border-b-2 border-brand mt-px"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence>
            {(showAll ? projects : projects.slice(0, 4)).map(
              (project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  {/* Image Card */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block overflow-hidden rounded-xl border border-white/10"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="h-65 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width="400"
                      height="260"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
                  </a>

                  {/* Content */}
                  <div className="mt-5">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((item, i) => (
                        <span
                          key={i}
                          className="
        px-3 py-1
        rounded-full
        bg-black/90
        text-xs
        font-medium
        text-white
     
      "
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-500 mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex gap-6 mt-4 text-sm">
                      <a
                        href={project.live}
                        className="flex items-center gap-2 hover:text-white text-gray-400 transition"
                      >
                        ↗ Live Preview
                      </a>
                      {project.repo && (
                        <a
                          href={project.repo}
                          className="flex items-center gap-2 hover:text-white text-gray-400 transition"
                        >
                          ⌘ Repo URL
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
      px-6 py-2
      rounded-full
      bg-brand
      text-sm
      font-medium
      text-white
    "
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
