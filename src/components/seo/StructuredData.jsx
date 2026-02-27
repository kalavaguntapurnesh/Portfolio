import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Purnesh Kalavagunta",
    "jobTitle": "AI Full Stack Engineer",
    "description": "Experienced AI Full Stack Engineer with 3+ years of experience and 20+ projects. Specializing in React, Node.js, Python, and AI/ML technologies.",
    "url": "https://purneshkalavagunta.com",
    "email": "mailto:kalavaguntapurnesh@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "United Kingdom"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "University of Roehampton",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "London",
          "addressCountry": "United Kingdom"
        }
      }
    ],
    "knowsAbout": [
      "React",
      "Node.js", 
      "Python",
      "JavaScript",
      "TypeScript",
      "Artificial Intelligence",
      "Machine Learning",
      "Full Stack Development",
      "Web Development"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/purneshkalavagunta",
      "https://github.com/purneshkalavagunta",
      "https://twitter.com/purneshkalavagunta"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
