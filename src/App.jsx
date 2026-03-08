import "./App.css";
import Navbar from "@/components/layout/Navbar";
import SocialIcons from "@/components/ui/SocialIcons";
import StructuredData from "@/components/seo/StructuredData";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Blogs from "@/pages/Blogs";
import Experience from "@/pages/Experience";
import NotFound from "@/pages/NotFound";
import { useDarkMode } from "./contexts/DarkModeContext";

function App() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <StructuredData />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-projects" element={<Projects />} />
        <Route path="/my-blogs" element={<Blogs />} />
        <Route path="/my-experience" element={<Experience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SocialIcons />
    </div>
  );
}

export default App;
