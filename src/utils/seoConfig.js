// SEO Configuration for all pages
export const seoConfig = {
  home: {
    title: "Purnesh Kalavagunta - AI/ML Full Stack Engineer | Portfolio",
    description: "Experienced AI/ML Full Stack Engineer with 3+ years of experience and 20+ projects. Specializing in React, Node.js, Python, and AI/ML technologies.",
    keywords: "Purnesh Kalavagunta, AI/ML Engineer, Full Stack Developer, React, Node.js, Python, Machine Learning, Portfolio, Web Development",
    url: "https://purneshkalavagunta.com",
    image: "https://purneshkalavagunta.com/src/assets/Profile.JPG",
    type: "website",
  },
  experience: {
    title: "My Experience | Purnesh Kalavagunta",
    description: "Professional experience of AI Full Stack Engineer Purnesh Kalavagunta including software development, AI, and cloud engineering roles with 3+ years in the industry.",
    keywords: "Experience, Full Stack Engineering, Software Development, AI Engineering, Cloud Computing",
    url: "https://purneshkalavagunta.com/my-experience",
    image: "https://purneshkalavagunta.com/src/assets/Profile.JPG",
    type: "website",
  },
  projects: {
    title: "Projects | Purnesh Kalavagunta - AI/ML Full Stack Engineer",
    description: "Explore 20+ innovative projects including AI workflows, full-stack applications, and web development solutions built with React, Node.js, Python, and more.",
    keywords: "Projects, Portfolio, AI Projects, Full Stack Development, Web Applications, Machine Learning Projects",
    url: "https://purneshkalavagunta.com/my-projects",
    image: "https://purneshkalavagunta.com/src/assets/Profile.JPG",
    type: "website",
  },
  blogs: {
    title: "Blog | Purnesh Kalavagunta - AI/ML & Web Development",
    description: "Read insights on AI, machine learning, full-stack development, React, Node.js, and modern web development from AI/ML engineer Purnesh Kalavagunta.",
    keywords: "Blog, AI Articles, Machine Learning, Web Development, React, Node.js, Full Stack, Programming",
    url: "https://purneshkalavagunta.com/my-blogs",
    image: "https://purneshkalavagunta.com/src/assets/Profile.JPG",
    type: "website",
  },
  contact: {
    title: "Contact | Purnesh Kalavagunta - AI/ML Full Stack Engineer",
    description: "Contact AI Full Stack Engineer Purnesh Kalavagunta for collaboration, freelance work, or software development projects. Get in touch now!",
    keywords: "Contact, Hire Developer, Freelance, Collaboration, Software Development",
    url: "https://purneshkalavagunta.com/contact",
    image: "https://purneshkalavagunta.com/src/assets/Profile.JPG",
    type: "website",
  },
};

// Function to generate Open Graph and Twitter meta tags
export const getOGTags = (page) => {
  const config = seoConfig[page];
  if (!config) return {};
  
  return {
    "og:title": config.title,
    "og:description": config.description,
    "og:type": config.type,
    "og:url": config.url,
    "og:image": config.image,
    "og:site_name": "Purnesh Kalavagunta Portfolio",
    "og:locale": "en_US",
    "twitter:card": "summary_large_image",
    "twitter:title": config.title,
    "twitter:description": config.description,
    "twitter:image": config.image,
    "twitter:creator": "@purneshkalavagunta",
  };
};
