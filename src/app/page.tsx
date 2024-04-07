"use client";
import Navbar from "@/app/components/Navbar";
// import Hero from "@/app/components/Hero";
// import About from "@/app/components/About";
// import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import Record from "@/app/components/Record";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      {/* <Hero />
      <About />
      <Projects /> */}
      <Record />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
