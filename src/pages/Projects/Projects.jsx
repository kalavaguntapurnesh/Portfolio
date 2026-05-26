import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { Helmet } from "react-helmet-async";
import { seoConfig } from "@/utils/seoConfig";
import projectFive from "@/assets/projectFive.png";
import projectFour from "@/assets/projectFour.png";
import projectOne from "@/assets/projectOne.png";
import projectSeven from "@/assets/projectSeven.png";
import projectSix from "@/assets/projectSix.png";
import projectThree from "@/assets/projectThree.png";
import projectTwo from "@/assets/projectTwo.png";

const Projects = () => {
  const { isDarkMode } = useDarkMode();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "LM Club",
      category: "React",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      description:
        "Member-focused platform built with React, Node.js, PostgreSQL, and Tailwind CSS.",
      image: projectOne,
      live: "https://www.lmclub.club/",
    },
    {
      title: "Triptovilla",
      category: "Angular",
      tech: ["Spring Boot", "Angular", "Tailwind CSS", "PostgreSQL"],
      description:
        "Travel platform built with Spring Boot, Angular, Tailwind CSS, and PostgreSQL.",
      image: projectTwo,
      live: "https://dev.triptovilla.com/",
    },
    {
      title: "RMA Housing",
      category: "Angular",
      tech: ["Spring Boot", "Angular", "Tailwind CSS", "PostgreSQL"],
      description:
        "Housing platform built with Spring Boot, Angular, Tailwind CSS, and PostgreSQL.",
      image: projectThree,
      live: "https://dev.rmahousing.com/",
    },
    {
      title: "Axseva",
      category: "React",
      tech: ["React", "Node.js", "Tailwind CSS"],
      description:
        "Corporate site implemented with React, Node.js, and Tailwind CSS.",
      image: projectFour,
      live: "https://www.axseva.com/",
    },
    {
      title: "Cloud Data Networks",
      category: "React",
      tech: ["React", "Node.js", "Tailwind CSS"],
      description:
        "Business website built with the same React and Node.js stack as Axseva.",
      image: projectFive,
      live: "https://www.clouddatanetworks.com/",
    },
    {
      title: "Alcheminds Solutions",
      category: "React",
      tech: ["React", "Node.js", "Tailwind CSS"],
      description:
        "Solutions website built with React, Node.js, and Tailwind CSS.",
      image: projectSix,
      live: "https://www.alchemindssolutions.com/",
    },
    {
      title: "Lakshmi Areti",
      category: "React",
      tech: ["React", "Node.js", "Tailwind CSS"],
      description:
        "Personal or business site implemented with React, Node.js, and Tailwind CSS.",
      image: projectSeven,
      live: "https://lakshmiareti.us/",
    },
  ];

  const categories = ["All", "React", "Angular"];

  const filteredProjects = useMemo(() => {
    let list = [...projects];

    if (filter !== "All") {
      list = list.filter((p) => p.category === filter);
    }

    if (search) {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return list;
  }, [search, filter]);

  return (
    <>
      <Helmet>
        <title>{seoConfig.projects.title}</title>
        <meta name="description" content={seoConfig.projects.description} />
        <meta name="keywords" content={seoConfig.projects.keywords} />
        <link rel="canonical" href={seoConfig.projects.url} />
        <meta property="og:title" content={seoConfig.projects.title} />
        <meta property="og:description" content={seoConfig.projects.description} />
        <meta property="og:type" content={seoConfig.projects.type} />
        <meta property="og:url" content={seoConfig.projects.url} />
        <meta property="og:image" content={seoConfig.projects.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.projects.title} />
        <meta name="twitter:description" content={seoConfig.projects.description} />
        <meta name="twitter:image" content={seoConfig.projects.image} />
      </Helmet>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`min-h-screen py-24 px-6 transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
      >
        <div className="max-w-6xl mx-auto pt-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-brand">My Projects</h1>
            <div className="w-20 h-1 bg-brand mx-auto mt-2 rounded-full"></div>

            <p className="text-gray-500 mt-4">
              A collection of projects I’ve built across AI systems, full stack
              development, and scalable software engineering.
            </p>
          </div>

          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-14">

            <input
              type="text"
              placeholder="Search projects..."
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white shadow rounded-full px-6 py-3 text-sm outline-none w-full md:w-75"
            />

            <div className="flex gap-3 flex-wrap">

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1 rounded-full text-xs border transition ${filter === cat
                    ? "bg-brand text-white"
                    : "border-gray-300 text-gray-500 hover:bg-gray-100"
                    }`}
                >
                  {cat}
                </button>
              ))}

            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >

                {/* Image */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block overflow-hidden rounded-xl border border-white/10"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-55 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
                </a>

                {/* Content */}
                <div className="mt-5">

                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-black text-white text-xs"
                      >
                        {tech}
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
                      className="text-gray-400 hover:text-brand transition"
                    >
                      ↗ Live Preview
                    </a>

                    {project.repo && (
                      <a
                        href={project.repo}
                        className="text-gray-400 hover:text-brand transition"
                      >
                        ⌘ GitHub
                      </a>
                    )}

                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;