import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Technologies from "@/components/sections/Technologies";
import EducationTimeline from "@/components/sections/EducationTimeline";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import { useDarkMode } from "../../contexts/DarkModeContext";
import FeaturedBlogs from "@/components/sections/FeaturedBlogs";
import Hero from "@/components/sections/Hero";
import { seoConfig } from "@/utils/seoConfig";

const Home = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Helmet>
        <title>{seoConfig.home.title}</title>
        <meta name="description" content={seoConfig.home.description} />
        <meta name="keywords" content={seoConfig.home.keywords} />
        <link rel="canonical" href={seoConfig.home.url} />
        <meta property="og:title" content={seoConfig.home.title} />
        <meta property="og:description" content={seoConfig.home.description} />
        <meta property="og:type" content={seoConfig.home.type} />
        <meta property="og:url" content={seoConfig.home.url} />
        <meta property="og:image" content={seoConfig.home.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.home.title} />
        <meta name="twitter:description" content={seoConfig.home.description} />
        <meta name="twitter:image" content={seoConfig.home.image} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
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
      </motion.div>
    </>
  );
};

export default Home;
