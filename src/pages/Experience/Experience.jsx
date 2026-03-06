import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../contexts/DarkModeContext";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

const Experience = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen py-24 px-6 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
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
  );
};

export default Experience;