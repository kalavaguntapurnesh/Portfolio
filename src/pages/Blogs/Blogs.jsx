import React from 'react'
import { motion } from "framer-motion";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useEffect, useState, useMemo } from "react";

const MEDIUM_RSS =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kalavaguntapurnesh";

const Blogs = () => {
  const { isDarkMode } = useDarkMode();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("All");
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    fetch(MEDIUM_RSS)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.items.map((item) => ({
          title: item.title,
          link: item.link,
          description: item.description.replace(/<[^>]+>/g, "").slice(0, 160),
          published: item.pubDate,
          thumbnail: item.thumbnail,
          tags: item.categories,
          readTime: `${Math.floor(Math.random() * 4) + 3} min read`,
        }));

        setBlogs(formatted);
        setLoading(false);
      });
  }, []);

  const filteredBlogs = useMemo(() => {
    let list = [...blogs];

    if (search)
      list = list.filter((b) =>
        b.title.toLowerCase().includes(search.toLowerCase())
      );

    if (tag !== "All") list = list.filter((b) => b.tags.includes(tag));

    if (sort === "latest")
      list.sort((a, b) => new Date(b.published) - new Date(a.published));

    return list;
  }, [blogs, search, tag, sort]);

  const tags = ["All", "AI", "React", "JavaScript", "Web", "System Design"];

  const featured = blogs[0];


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
    >
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto pt-8">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl font-bold text-brand">Engineering Blogs</h1>

            <div className="w-20 h-1 bg-brand mx-auto mt-2 rounded-full"></div>

            <p className="text-gray-500 mt-4">
              I write about software engineering, AI systems, full-stack
              development, and building scalable products.
            </p>
          </motion.div>

          {/* Featured */}
          {featured && (
            <motion.a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="block mb-20 pb-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <p className="text-xs uppercase tracking-wider text-brand">
                Featured Article
              </p>

              <h2 className="text-3xl font-bold mt-4">{featured.title}</h2>

              <p className="text-gray-400 mt-4 max-w-3xl">
                {featured.description}
              </p>

              <div className="flex gap-4 mt-6 text-sm text-gray-400">
                <span>{featured.readTime}</span>
                <span>
                  {new Date(featured.published).toLocaleDateString()}
                </span>
              </div>
            </motion.a>
          )}

          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-14">

            <input
              type="text"
              placeholder="Search articles..."
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white shadow rounded-full px-6 py-3 text-sm outline-none w-full md:w-[320px]"
            />

            <div className="flex flex-wrap gap-3 items-center">

              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={`px-4 py-1 rounded-full text-xs border transition ${tag === t
                      ? "bg-brand text-white"
                      : "border-gray-300 text-gray-500 hover:bg-gray-100"
                    }`}
                >
                  {t}
                </button>
              ))}

              <select
                onChange={(e) => setSort(e.target.value)}
                className="bg-brand text-white text-sm rounded-full px-4 py-2"
              >
                <option value="latest">Latest</option>
              </select>

            </div>
          </div>

          {/* Blogs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {loading &&
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-62.5 bg-white/5 animate-pulse rounded-xl"
                />
              ))}

            {!loading &&
              filteredBlogs.map((blog, index) => (
                <motion.a
                  key={index}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group border border-white/10 rounded-xl overflow-hidden hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition ease-in-out duration-1000"
                >
                  {blog.thumbnail && (
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="h-45 w-full object-cover group-hover:scale-105 transition ease-in-out duration-1000"
                    />
                  )}

                  <div className="p-6">

                    <h3 className="font-semibold text-lg leading-snug group-hover:text-brand transition">
                      {blog.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-3 line-clamp-3">
                      {blog.description}
                    </p>

                    <div className="flex justify-between mt-6 text-xs text-gray-400">
                      <span>{blog.readTime}</span>
                      <span>
                        {new Date(blog.published).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {blog.tags.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-black text-white rounded-full"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.a>
              ))}
          </div>

          {/* Medium Button */}
          <div className="flex justify-center mt-20">
            <a
              href="https://medium.com/@kalavaguntapurnesh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-brand text-white font-medium hover:opacity-90 transition"
            >
              View All Articles on Medium
            </a>
          </div>
        </div>
      </section>

    </motion.div>
  )
}

export default Blogs
