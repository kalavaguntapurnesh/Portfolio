import React from 'react'
import { useDarkMode } from "../../contexts/DarkModeContext";

const Blogs = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      
    </div>
  )
}

export default Blogs
