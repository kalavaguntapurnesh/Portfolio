import React from "react";
import { motion } from "framer-motion";
import Profile from "@/assets/Profile.JPG";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ProtectedEmail from "../../ui/ProtectedEmail";

const Hero = () => {
  return (
    <section className=" text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12 items-stretch">
        {/* LEFT SIDEBAR */}
        <motion.aside 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 h-full"
        >
          <div className="h-full flex flex-col bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            {/* Profile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={Profile}
                alt="Purnesh Kalavagunta - AI Full Stack Engineer Portrait"
                className="w-40 h-40 rounded-xl object-cover mb-4"
                width="160"
                height="160"
                loading="lazy"
                decoding="async"
              />
              <h2 className="text-xl font-semibold text-brand">
                Purnesh Kalavagunta
              </h2>
              <span className="mt-2 px-3 py-1 rounded-full text-xs text-black">
                Full Stack Web & App Developer
              </span>

              {/* Socials */}
              <div className="flex gap-4 mt-4 text-gray-400">
                <a
                  href="https://linkedin.com/in/purnesh-kalavagunta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="https://leetcode.com/purneshkalavagunta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition"
                >
                  <SiLeetcode size={18} />
                </a>

                <a
                  href="https://github.com/kalavaguntapurnesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://x.com/purneshkalavag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition"
                >
                  <FaTwitter size={18} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=100084688968409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition"
                >
                  <FaFacebookF size={18} />
                </a>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-white/10 my-6" />

            {/* Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-sm"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Email
                </p>
                <ProtectedEmail />
              </div>
              <Info label="Role" value="AI/ML Full Stack Engineer" />
              <Info label="Location" value="London, United Kingdom" />
              <Info label="Open To" value="Internships & Full Time" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 grid grid-cols-2 gap-4 text-center"
            >
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xl font-semibold text-brand">3+</p>
                <p className="text-xs text-gray-400">Years Exp</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xl font-semibold text-brand">20+</p>
                <p className="text-xs text-gray-400">Projects</p>
              </div>

              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xl font-semibold text-brand">10+</p>
                <p className="text-xs text-gray-400">Tech Stacks</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xl font-semibold text-brand">7+</p>
                <p className="text-xs text-gray-400">Blog Articles</p>
              </div>
            </motion.div>
          </div>
        </motion.aside>

        {/* RIGHT CONTENT */}
        <motion.main 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-6 rounded-2xl"
        >
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold mb-2 text-brand">About Me</h1>
            <div className="w-10 h-1 bg-brand rounded-full mb-6" />

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi, I'm{" "}
                <span className="text-brand font-medium">
                  Purnesh Kalavagunta{" "}
                </span>
                a Full Stack Developer passionate about turning complex ideas
                into scalable, user-centric web applications.
              </p>
              <p>
                I've worked across the full stack—frontend, backend, and
                cloud—building systems that prioritize performance, usability,
                and long-term maintainability.
              </p>
              <p>
                Currently, I'm exploring AI/ML driven products, system design, and
                modern web engineering.
              </p>
            </div>
          </motion.div>

          {/* What I'm Doing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14"
          >
            <h2 className="text-2xl font-bold mb-8 text-brand">
              What I'm Doing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "AI & System Design",
                  desc: "Exploring intelligent systems and scalable architectures."
                },
                {
                  title: "Mobile Development",
                  desc: "Creating cross-platform mobile apps with smooth UX."
                },
                {
                  title: "Frontend Engineering",
                  desc: "Building fast, accessible, and visually polished interfaces."
                },
                {
                  title: "Backend Systems",
                  desc: "Designing scalable APIs and reliable server-side logic."
                },
                {
                  title: "DevOps & Cloud",
                  desc: "Automating deployments and managing cloud infrastructure."
                },
                {
                  title: "Technical Writing",
                  desc: "Writing concise blogs on web, AI, and engineering."
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                >
                  <Service title={service.title} desc={service.desc} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export default Hero;

/* ---- Helper Components ---- */

const Info = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-white/10 pb-2">
    <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
    <p className="text-sm text-gray-600 font-medium">{value}</p>
  </div>
);

const Service = ({ title, desc }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
    <h3 className="font-semibold mb-2 text-black">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);
