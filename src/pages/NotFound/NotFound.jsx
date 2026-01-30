import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext";
import "./NotFound.css";

const NotFound = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`notfound-container min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or an error occurred.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default NotFound;