import React from "react";
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
      url: "https://github.com/kalavaguntapurnesh",
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
      url: "https://medium.com/@kalavaguntapurnesh",
      color: "bg-black",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://x.com/purneshkalavag",
      color: "bg-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/purnesh-kalavagunta/",
      color: "bg-[#0a66c2]",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/profile.php?id=100084688968409",
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
    <div className="fixed bottom-4 z-50 w-full mx-auto">
      <div
        className={`flex items-center justify-center max-w-100 mx-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-full p-2 ${
          isDarkMode
            ? "bg-gray-800 shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.1),0px_1px_0px_0px_rgba(255,255,255,0.02),0px_0px_0px_1px_rgba(255,255,255,0.08)]"
            : "bg-white"
        }`}
      >
        <div className="flex flex-row space-x-4">
          {socialLinks.map(({ name, icon: IconComponent, url, color }) => {
            const Icon = IconComponent;
            return (
              <button
                key={name}
                onClick={() => handleClick(url)}
                className={`
                group relative p-2.5 cursor-pointer backdrop-blur-sm text-white 
                rounded-full shadow-lg transition-all duration-300 ease-in-out 
                transform hover:scale-110 ${color} hover:shadow-xl
              `}
                aria-label={`Visit ${name}`}
                title={name}
              >
                <Icon className={`w-4 h-4 ${color}`} />

                {/* Tooltip - hidden on mobile for better UX */}
                {/* <span
                  className={`
                absolute right-full cursor-pointer mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2
                bg-sky-500 text-white text-[8px] sm:text-sm px-2 py-1 whitespace-nowrap
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full
                pointer-events-none hidden sm:block
              `}
                >
                  {name}
                </span> */}
              </button>
            );
          })}

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`
            group relative p-2.5 backdrop-blur-sm transition-all duration-300 ease-in-out 
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

            {/* Tooltip - hidden on mobile for better UX */}
            {/* <span
              className={`
              absolute right-full cursor-pointer mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2
              bg-sky-500 text-white text-[8px] sm:text-sm px-2 py-1 whitespace-nowrap
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full
              pointer-events-none hidden sm:block
            `}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
