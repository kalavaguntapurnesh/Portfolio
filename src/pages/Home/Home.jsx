import React from "react";
import Technologies from "@/components/sections/Technologies";
import EducationTimeline from "@/components/sections/EducationTimeline";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { Feature } from "framer-motion";
import FeaturedBlogs from "@/components/sections/FeaturedBlogs";
import Hero from "@/components/sections/Hero";

const Home = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Hero />
      <Technologies />
      <FeaturedProjects />
      <ExperienceTimeline />
      <EducationTimeline />
      <FeaturedBlogs />
    </div>
  );
};

export default Home;
