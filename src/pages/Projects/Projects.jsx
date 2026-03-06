import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const { isDarkMode } = useDarkMode();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "AI Workflow Orchestrator",
      category: "AI",
      tech: ["Next.js", "PostgreSQL", "Tailwind", "Selenium"],
      description:
        "Platform to design and automate multi-step AI workflows with task orchestration and monitoring.",
      image:
        "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "PrepStack",
      category: "Web",
      tech: ["Next.js", "PostgreSQL", "Tailwind"],
      description:
        "Interview preparation platform with curated problems, progress tracking and company-focused question sets.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "TrendPulse",
      category: "Analytics",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      description:
        "Analytics dashboard visualizing trending topics across social platforms in real time.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
      live: "#",
    },
    {
      title: "FinStrat Advisory",
      category: "Web",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      description:
        "Corporate website for fintech advisory firm focused on digital assets and financial strategy.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "AI Talent Screener",
      category: "AI",
      tech: ["OpenAI", "Next.js", "Tailwind"],
      description:
        "AI-powered hiring assistant that evaluates resumes and scores candidates for role fit.",
      image:
        "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "Vision Attendance System",
      category: "AI",
      tech: ["Python", "OpenCV", "PostgreSQL"],
      description:
        "Computer vision based attendance system using real-time face recognition.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600",
      live: "#",
    },
  ];

  const categories = ["All", "AI", "Web", "Analytics"];

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
        <title>Projects | Purnesh Kalavagunta</title>
        <meta
          name="description"
          content="Explore AI, full stack, and cloud projects built by Purnesh Kalavagunta using React, Node.js, Python and modern technologies."
        />
        <link rel="canonical" href="https://purneshkalavagunta.com/my-projects" />

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
              className="bg-white shadow rounded-full px-6 py-3 text-sm outline-none w-full md:w-[300px]"
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
                <div className="relative overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
                </div>

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