import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="app__container">
        <Hero />
        <StatsBar />

        <div className="app__grid">
          <main className="app__main">
            <About />
            <Skills />
            <Projects />
          </main>

          <aside className="app__sidebar">
            <Experience />
            <Education />
            <Certifications />
            <Connect />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
