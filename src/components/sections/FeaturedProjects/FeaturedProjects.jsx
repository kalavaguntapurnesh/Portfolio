import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

const FeaturedProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "AI Workflow Orchestrator",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Selenium"],
      description:
        "Platform to design, automate, and monitor multi-step AI workflows with agent-based execution and task tracking.",
      image:
        "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "PrepStack",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Selenium"],
      description:
        "Interview preparation platform featuring curated coding problems, progress tracking, and company-focused practice sets.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "TrendPulse",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Selenium"],
      description:
        "Analytics dashboard that aggregates and visualizes trending topics across social platforms in real time.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "FinStrat Advisory",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      description:
        "High-conversion corporate website for a financial advisory firm focused on fintech, digital assets, and risk strategy.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "AI Talent Screener",
      tech: ["Next.js", "OpenAI", "Tailwind CSS"],
      description:
        "Automated hiring tool that evaluates resumes using AI-based scoring, skill extraction, and role-fit analysis.",
      image:
        "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "Vision-Based Attendance",
      tech: ["Python", "OpenCV", "PostgreSQL"],
      description:
        "Computer vision system that identifies individuals and logs attendance using real-time facial recognition.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "Enterprise AI Assistant",
      tech: ["LangChain", "Vector DB", "RAG"],
      description:
        "Private AI assistant for organizations with document ingestion, semantic search, and context-aware responses.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "Subscription Analytics Panel",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      description:
        "Centralized dashboard for managing subscriptions, revenue metrics, and payment lifecycle events.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600",
      live: "#",
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
                  <div className="relative overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
                  </div>

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
                        className="flex items-center gap-2 hover:text-black text-gray-400 transition"
                      >
                        <FaGlobe className="w-4 h-4" />
                        <p>Live Preview</p>
                      </a>
                      {project.repo && (
                        <a
                          href={project.repo}
                          className="flex items-center gap-2 hover:text-black text-gray-400 transition"
                        >
                          <FaGithub className="w-4 h-4" />
                          <p>Repo URL</p>
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
