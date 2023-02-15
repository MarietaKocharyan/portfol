import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
