import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const MEDIUM_RSS =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kalavaguntapurnesh";

const Skeleton = () => (
  <div className="animate-pulse space-y-3">
    <div className="h-5 bg-white/10 rounded w-3/4" />
    <div className="h-4 bg-white/10 rounded w-1/2" />
    <div className="h-4 bg-white/10 rounded w-1/3" />
  </div>
);

const Blogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("All");
  const [sort, setSort] = useState("date");

  const filteredBlogs = useMemo(() => {
    let list = [...blogs.slice(1)];

    if (search)
      list = list.filter((b) =>
        b.title.toLowerCase().includes(search.toLowerCase())
      );

    if (tag !== "All") list = list.filter((b) => b.tags.includes(tag));

    if (sort === "claps") list.sort((a, b) => b.claps - a.claps);
    if (sort === "date")
      list.sort((a, b) => new Date(b.published) - new Date(a.published));

    return list;
  }, [blogs, search, tag, sort]);

  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  const paginatedBlogs = filteredBlogs.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-yellow-400/20 text-yellow-300">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const trackClick = (title) => {
    const clicks = JSON.parse(localStorage.getItem("blog_clicks")) || {};
    clicks[title] = (clicks[title] || 0) + 1;
    localStorage.setItem("blog_clicks", JSON.stringify(clicks));
  };

  useEffect(() => {
    fetch(MEDIUM_RSS)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.items.map((item) => ({
          title: item.title,
          link: item.link,
          published: item.pubDate,
          description: item.description.replace(/<[^>]+>/g, ""),
          tags: item.categories,
          claps: Math.floor(Math.random() * 30) + 5,
          readTime: `${Math.floor(Math.random() * 4) + 2} min read`,
        }));

        setBlogs(formatted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const featured = blogs[0];

  const allTags = ["All", "AI", "React", "Web", "Crypto"];

  return (
    <section className="py-24 lg:px-0 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-wrap flex-col items-center">
            <div className="text-center mt-4">
              <h3 className="lg:text-3xl text-2xl font-bold ">
                My Featured Blogs
              </h3>
            </div>
            <div className="md:w-40 w-20 h-1 border-b-2 border-brand mt-px"></div>
          </div>
          <p className="text-gray-600 mt-2">
            Articles, guides & deep dives I’ve written on Medium
          </p>
        </motion.div>

        {/* Featured Article */}
        {featured && (
          <motion.a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="block mb-20 py-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <span className="text-xs uppercase text-brand tracking-wider">
              Featured Article
            </span>
            <h3 className="text-2xl md:text-3xl text-brand font-bold mt-3">
              {featured.title}
            </h3>
            <p className="text-gray-400 mt-4 line-clamp-2">
              {featured.description}
            </p>
            <div className="flex gap-4 mt-4 text-sm text-gray-400">
              <span>{featured.readTime}</span>
              <span>👏 {featured.claps}</span>
            </div>
          </motion.a>
        )}

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-12">
          <input
            type="text"
            placeholder="Search articles..."
            className="bg-white shadow placeholder-gray-400 rounded-full px-12 py-2 text-sm outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex gap-3 flex-wrap">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`px-4 py-1 rounded-full text-xs border transition ${
                  tag === t
                    ? "bg-white text-black"
                    : "border-white/20 text-gray-400 hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}

            <select
              onChange={(e) => setSort(e.target.value)}
              className="bg-brand text-sm rounded-full px-8 py-2"
            >
              <option value="date">Sort by Date</option>
              <option value="claps">Sort by Claps</option>
            </select>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
            : paginatedBlogs.map((blog, i) => (
                <motion.a
                  key={i}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick(blog.title)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group pb-6 border-b border-white/10"
                >
                  <h3 className="text-lg font-semibold leading-snug text-brand transition">
                    {highlightText(blog.title, search)}
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-400">
                    <span>{blog.readTime}</span>
                    <span>👏 {blog.claps}</span>
                    {blog.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx}>#{t}</span>
                    ))}
                  </div>
                </motion.a>
              ))}
        </div>

        {/* <div className="flex justify-center gap-3 mt-16">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-1 rounded-full text-sm transition ${
                page === i + 1
                  ? "bg-white text-black"
                  : "border border-white/20 text-gray-400 hover:bg-white/10"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div> */}

        {/* Footer */}
        <div className="flex justify-center mt-20">
          <a
            href="https://medium.com/@kalavaguntapurnesh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-brand transition text-white"
          >
            View all on Medium
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
