import "./App.css";
import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
import SocialIcons from "@/components/ui/SocialIcons";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-projects" element={<Projects />} />
        <Route path="/my-blogs" element={<Blogs />} />
        <Route path="/my-experience" element={<Experience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
      <SocialIcons />
    </div>
  );
}

export default App;
