"use client";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import Services from "@/app/components/Services";
import Timeline from "@/app/components/Timeline";
import Skills from "@/app/components/Skills";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import Record from "@/app/components/Record";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      {/* <Hero /> */}
      <Record />
      {/* <Services /> */}
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
