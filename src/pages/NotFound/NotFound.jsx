import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { socialConfig } from "../../utils/socialConfig";

const NotFound = () => {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Add noindex meta tag for 404 pages
    const metaNoIndex = document.createElement("meta");
    metaNoIndex.name = "robots";
    metaNoIndex.content = "noindex, nofollow";
    document.head.appendChild(metaNoIndex);

    // Set page title for 404
    document.title = "404 - Page Not Found | Portfolio";

    // Log 404 error for tracking (you can replace this with your analytics)
    console.warn(`404 Error: Page not found - ${window.location.pathname}`);

    return () => {
      // Cleanup
      if (document.head.contains(metaNoIndex)) {
        document.head.removeChild(metaNoIndex);
      }
    };
  }, []);

  const handleQuickSearch = (e) => {
    e.preventDefault();
    if (searchTerm.toLowerCase().includes("project")) {
      navigate("/my-projects");
    } else if (
      searchTerm.toLowerCase().includes("blog") ||
      searchTerm.toLowerCase().includes("article")
    ) {
      navigate("/my-blogs");
    } else if (
      searchTerm.toLowerCase().includes("experience") ||
      searchTerm.toLowerCase().includes("work")
    ) {
      navigate("/my-experience");
    } else if (
      searchTerm.toLowerCase().includes("about") ||
      searchTerm.toLowerCase().includes("bio")
    ) {
      navigate("/about");
    } else if (
      searchTerm.toLowerCase().includes("contact") ||
      searchTerm.toLowerCase().includes("email")
    ) {
      navigate("/contact");
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className={`min-h-screen flex  items-center justify-center p-4 md:p-8 font-sans transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-4xl w-full text-center animate-fade-in pt-24">
        {/* Large 404 Number */}
        <div className="text-6xl md:text-8xl lg:text-9xl font-black bg-brand bg-clip-text text-transparent mb-4 leading-none">
          404
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Oops! This page seems to have wandered off
          </h1>
          <p className="text-lg leading-relaxed opacity-80 max-w-2xl mx-auto mb-10">
            Don't worry, it happens to the best of us. The page you're looking
            for might have been moved, renamed, or temporarily unavailable. But
            hey, there's plenty more to explore!
          </p>
        </div>

        {/* Quick Search */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Looking for something specific?
          </h3>
          <form
            onSubmit={handleQuickSearch}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Try 'projects', 'blogs', 'about', 'contact'..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`flex-1 px-4 py-3 rounded-full border-2 text-base transition-all duration-200 bg-transparent ${
                isDarkMode
                  ? " focus:border-none"
                  : " focus:border-brand-500"
              } focus:outline-none focus:ring-4 focus:ring-brand-500 focus:ring-opacity-20`}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand text-white rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Search
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div
          className={`mb-12 p-8 rounded-2xl border ${
            isDarkMode
              ? "bg-white bg-opacity-5 border-white border-opacity-10"
              : "bg-sky-50 border-sky-100"
          }`}
        >
          <h3 className="text-xl font-semibold mb-3">
            Still can't find what you're looking for?
          </h3>
          <p className="mb-6 opacity-80">
            No problem! I'd love to help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 min-w-[140px]"
            >
              Get in Touch
            </Link>
            <a
              href={`mailto:${socialConfig.email}?subject=Website%20Issue%20-%20Page%20Not%20Found`}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand text-brand bg-transparent rounded-full hover:bg-brand hover:text-white transition-all duration-200 min-w-[140px]"
            >
              Report an Issue
            </a>
          </div>
        </div>

        {/* Go Home Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-brand text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
          >
            Take Me Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
