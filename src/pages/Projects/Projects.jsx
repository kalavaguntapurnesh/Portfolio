import React from 'react'
import { motion } from "framer-motion";
import { useDarkMode } from "../../contexts/DarkModeContext";

const Projects = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
    >
      
    </motion.div>
  )
}

export default Projects
