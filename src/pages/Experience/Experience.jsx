import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../contexts/DarkModeContext";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import { Helmet } from "react-helmet-async";

const Experience = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Helmet>
        <title>My Experience | Purnesh Kalavagunta</title>
        <meta
          name="description"
          content="Professional experience of AI Full Stack Engineer Purnesh Kalavagunta including software development, AI, and cloud engineering roles with 3+ years in the industry."
        />
        <meta name="keywords" content="Experience, Full Stack Engineering, Software Development, AI Engineering, Cloud Computing" />
        <link rel="canonical" href="https://purneshkalavagunta.com/my-experience" />
        <meta property="og:title" content="My Experience | Purnesh Kalavagunta" />
        <meta property="og:description" content="Professional experience of AI Full Stack Engineer Purnesh Kalavagunta including software development, AI, and cloud engineering roles with 3+ years in the industry." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://purneshkalavagunta.com/my-experience" />
        <meta property="og:image" content="https://purneshkalavagunta.com/src/assets/Profile.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Experience | Purnesh Kalavagunta" />
        <meta name="twitter:description" content="Professional experience of AI Full Stack Engineer Purnesh Kalavagunta including software development, AI, and cloud engineering roles." />
        <meta name="twitter:image" content="https://purneshkalavagunta.com/src/assets/Profile.JPG" />
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`min-h-screen py-24 px-6 transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
      >
        <div className="max-w-6xl mx-auto pt-8">

          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-brand">My Experience</h1>

            <div className="w-20 h-1 bg-brand mx-auto mt-2 rounded-full"></div>

            <p className="text-gray-500 mt-4">
              My professional journey as a Full Stack Engineer building scalable
              web and mobile applications across startups and enterprise teams.
            </p>
          </div>

          {/* Experience Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">

            <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
              <p className="text-3xl font-bold text-brand">3+</p>
              <p className="text-sm text-gray-400 mt-1">Years Experience</p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
              <p className="text-3xl font-bold text-brand">20+</p>
              <p className="text-sm text-gray-400 mt-1">Projects Delivered</p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
              <p className="text-3xl font-bold text-brand">10+</p>
              <p className="text-sm text-gray-400 mt-1">Technologies</p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
              <p className="text-3xl font-bold text-brand">2</p>
              <p className="text-sm text-gray-400 mt-1">Companies</p>
            </div>

          </div>

          {/* Timeline */}
          <ExperienceTimeline />

        </div>
      </motion.section>

    </>
  );
};

export default Experience;