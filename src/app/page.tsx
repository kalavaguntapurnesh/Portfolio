"use client";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import Hero from "@/app/components/Hero";
import Timeline from "@/app/components/Timeline";
import Skills from "@/app/components/Skills";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import Record from "@/app/components/Record";
import ScrollToTop from "@/app/components/ScrollToTop";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Record />
      <ScrollToTop />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
