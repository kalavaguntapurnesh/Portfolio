import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaFacebook,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { socialConfig } from "../../../utils/socialConfig";
import { useDarkMode } from "../../../contexts/DarkModeContext";

const SocialIcons = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: socialConfig.github,
      color: "bg-black",
    },
    {
      name: "LeetCode",
      icon: SiLeetcode,
      url: socialConfig.leetcode,
      color: "bg-pink-500",
    },
    {
      name: "Medium",
      icon: FaMedium,
      url: socialConfig.medium,
      color: "bg-black",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: socialConfig.twitter,
      color: "bg-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: socialConfig.linkedin,
      color: "bg-[#0a66c2]",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: socialConfig.facebook,
      color: "bg-[#1877F2]",
    },
  ];

  const handleClick = (url) => {
    if (url.startsWith("mailto:")) {
      const link = document.createElement("a");
      link.href = url;
      link.click();
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-4 z-50 w-full mx-auto"
    >
      <div
        className={`flex items-center justify-center max-w-100 mx-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-full p-2 ${
          isDarkMode
            ? "bg-gray-800 shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.1),0px_1px_0px_0px_rgba(255,255,255,0.02),0px_0px_0px_1px_rgba(255,255,255,0.08)]"
            : "bg-white"
        }`}
      >
        <div className="flex flex-row space-x-4">
          {socialLinks.map(({ name, icon: IconComponent, url, color }, index) => {
            const Icon = IconComponent;
            return (
              <motion.button
                key={name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick(url)}
                className={`
                group cursor-pointer relative p-2.5 backdrop-blur-sm text-white 
                rounded-full shadow-lg transition-all duration-300 ease-in-out 
                transform hover:scale-110 ${color} hover:shadow-xl
              `}
                aria-label={`Visit ${name}`}
                title={name}
              >
                <Icon className={`w-4 h-4 ${color}`} />
              </motion.button>
            );
          })}

          {/* Dark Mode Toggle Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: socialLinks.length * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className={`
            group relative cursor-pointer p-2.5 backdrop-blur-sm transition-all duration-300 ease-in-out 
            transform hover:scale-110 rounded-full shadow-lg hover:shadow-xl
            ${
              isDarkMode
                ? "bg-yellow-500 text-white hover:bg-yellow-400"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }
          `}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={isDarkMode ? "Light Mode" : "Dark Mode"}
          >
            {isDarkMode ? (
              <FaSun className="w-4 h-4" />
            ) : (
              <FaMoon className="w-4 h-4" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialIcons;
