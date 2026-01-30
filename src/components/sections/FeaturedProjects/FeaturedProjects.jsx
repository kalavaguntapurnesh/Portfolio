import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FeaturedProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Sub-Agents Directory",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Selenium"],
      description:
        "Curated collection of Claude Code sub-agent prompts and MCP servers. Discover sub-agents, prompts and more.",
      image:
        "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "Codejeet",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Selenium"],
      description:
        "Website to solve 8k+ company-wise, topic-wise DSA questions. 7.5k users. Supported by Cloudflare.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "Trendscreener",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Selenium"],
      description:
        "Unified platform to track, list, and trade all social media trends. (Sold)",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
      live: "#",
    },
    {
      title: "LVyou Group",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      description:
        "Landing page for a strategic consulting firm specializing in payments, blockchain, and commodities advisory.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "AI Resume Analyzer",
      tech: ["Next.js", "OpenAI", "Tailwind CSS"],
      description:
        "AI-powered resume screening and scoring platform using semantic matching.",
      image:
        "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "Smart Attendance System",
      tech: ["Python", "OpenCV", "PostgreSQL"],
      description: "Face-recognition based smart attendance tracking system.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600",
      live: "#",
    },
    {
      title: "LLM Chatbot",
      tech: ["LangChain", "Vector DB", "RAG"],
      description:
        "Custom local LLM chatbot with retrieval augmented generation.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600",
      live: "#",
      repo: "#",
    },
    {
      title: "Payment Gateway Dashboard",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      description:
        "Admin dashboard to track payments, users, and subscriptions.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600",
      live: "#",
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
