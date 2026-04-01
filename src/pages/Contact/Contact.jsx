import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { isDarkMode } = useDarkMode();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (connect backend later)");
  };

  return (
    <>

      <Helmet>
        <title>Contact | Purnesh Kalavagunta - AI/ML Full Stack Engineer</title>
        <meta name="description" content="Contact AI Full Stack Engineer Purnesh Kalavagunta for collaboration, freelance work, or software development projects. Get in touch now!" />
        <meta name="keywords" content="Contact, Hire Developer, Freelance, Collaboration, Software Development" />
        <link rel="canonical" href="https://purneshkalavagunta.com/contact" />
        <meta property="og:title" content="Contact | Purnesh Kalavagunta - AI/ML Full Stack Engineer" />
        <meta property="og:description" content="Contact AI Full Stack Engineer Purnesh Kalavagunta for collaboration, freelance work, or software development projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://purneshkalavagunta.com/contact" />
        <meta property="og:image" content="https://purneshkalavagunta.com/src/assets/Profile.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Purnesh Kalavagunta - AI/ML Full Stack Engineer" />
        <meta name="twitter:description" content="Contact AI Full Stack Engineer for collaboration, freelance work, or software development." />
        <meta name="twitter:image" content="https://purneshkalavagunta.com/src/assets/Profile.JPG" />
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`min-h-screen py-24 px-6 transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
      >
        <div className="max-w-6xl mx-auto pt-8">

          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-brand">Get In Touch</h1>

            <div className="w-20 h-1 bg-brand mx-auto mt-2 rounded-full"></div>

            <p className="text-gray-500 mt-4">
              Have a project idea, collaboration opportunity, or just want to
              say hello? Feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

              <div className="space-y-4 text-gray-500">

                <p>
                  <span className="font-medium">Location:</span> London, United Kingdom
                </p>

                <p>
                  <span className="font-medium">Email:</span>{" "}
                  kalavaguntapurnesh@gmail.com
                </p>

                <p>
                  <span className="font-medium">Open to:</span> Full-time roles,
                  internships, and freelance projects.
                </p>

                {/* Socials */}
                <div className="flex gap-8 pt-4 text-gray-400 text-2xl">
                  <a
                    href="https://linkedin.com/in/purnesh-kalavagunta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand transition"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://leetcode.com/purneshkalavagunta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand transition"
                  >
                    <SiLeetcode />
                  </a>

                  <a
                    href="https://github.com/kalavaguntapurnesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand transition"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://twitter.com/purneshkalavg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand transition"
                  >
                    <FaTwitter />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=100084688968409"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand transition"
                  >
                    <FaFacebookF />
                  </a>
                </div>

              </div>


            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >

              <div>
                <label className="text-sm text-gray-500">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-brand text-white font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>

            </motion.form>
          </div>
        </div>
      </motion.section>

    </>
  );
};

export default Contact;