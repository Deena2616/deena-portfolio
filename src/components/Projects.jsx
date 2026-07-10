import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiX } from "react-icons/fi";
import appifyoursBanner from "../assets/appifyours.png";
import churchhubBanner from "../assets/churchhub.png";
import visualwalkinBanner from "../assets/visualwalk-in.png";
import queensgambitBanner from "../assets/queensgambit.png";
import collegeassistantBanner from "../assets/collegeassistant.png";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Appifyours",
    tagline: "No-Code App Builder Platform",
    desc: "No-code/low-code mobile app builder with real-time preview, code generation and subscription management.",
    tags: ["Flutter", "Node.js", "MongoDB"],
    banner: appifyoursBanner,
    liveDemo: "https://appifyours.com/",
    github: "https://github.com/Deena2616",
  },
  {
    title: "ChurchHub",
    tagline: "Church Management System",
    desc: "Multi-tenant church management system with role-based access and 17+ service modules.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    banner: churchhubBanner,
    liveDemo: "https://churchmanagment.com/",
    github: "https://github.com/Deena2616",
  },
  {
    title: "Visual Walk-In",
    tagline: "360° Virtual Tour Creator",
    desc: "360° virtual tour creator with hotspot navigation and immersive walkthrough experience.",
    tags: ["React", "Node.js", "Firebase"],
    banner: visualwalkinBanner,
    liveDemo: "https://visualwalkin.com/",
    github: "https://github.com/Deena2616",
  },
  {
    title: "College Assistant AITaskFlow",
    tagline: "AI-Powered Task Management",
    desc: "An AI-Powered Smart Campus Assistant Using NLP and Semantic Search.",
    tags: ["Python", "Flutter", "Firebase"],
    banner: collegeassistantBanner,
    github: "https://github.com/Deena2616",
  },
  {
    title: "Queen's Gambit",
    tagline: "Chess Tournament Management System",
    desc: "Queen's Gambit is a Flutter & Firebase-based chess tournament management system with QR verification and real-time tracking.",
    tags: ["Flutter", "Firebase"],
    banner: queensgambitBanner,
    github: "https://github.com/Deena2616",
  },
];

export default function Projects() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="projects" className="projects glass panel">
      <div className="projects__header">
        <h2 className="panel-title">
          <span className="panel-title__dot" />
          Featured Projects
        </h2>
        <a href="#" className="projects__view-all">
          View All Projects <FiArrowRight />
        </a>
      </div>

      <div className="projects__grid">
        {PROJECTS.slice(0, 3).map((p) => (
          <motion.div
            className="project-card"
            key={p.title}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="project-card__banner" style={{ backgroundImage: typeof p.banner === 'string' && p.banner.startsWith('linear-gradient') ? p.banner : `url(${p.banner})` }} />
            <div className="project-card__body">
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__tagline">{p.tagline}</p>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span className="project-card__tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-card__footer">
                <a href={p.liveDemo || "#"} className="project-card__link" target={p.liveDemo ? "_blank" : "_self"} rel={p.liveDemo ? "noopener noreferrer" : undefined}>
                  Live Demo <FiArrowRight />
                </a>
                <a href={p.github || "#"} aria-label="GitHub repo" className="project-card__gh" target={p.github ? "_blank" : "_self"} rel={p.github ? "noopener noreferrer" : undefined}>
                  <FiGithub />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="btn btn--primary btn--sm projects__view-btn" onClick={() => setShowModal(true)}>
        View All Projects
      </button>
    </section>

    {showModal && (
      <div className="projects-modal-overlay" onClick={() => setShowModal(false)}>
        <div className="projects-modal" onClick={(e) => e.stopPropagation()}>
          <div className="projects-modal__header">
            <h2>All Projects</h2>
            <button className="projects-modal__close" onClick={() => setShowModal(false)}>
              <FiX />
            </button>
          </div>
          <div className="projects-modal__grid">
            {PROJECTS.map((p) => (
              <motion.div
                className="project-card"
                key={p.title}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="project-card__banner" style={{ backgroundImage: typeof p.banner === 'string' && p.banner.startsWith('linear-gradient') ? p.banner : `url(${p.banner})` }} />
                <div className="project-card__body">
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__tagline">{p.tagline}</p>
                  <p className="project-card__desc">{p.desc}</p>
                  <div className="project-card__tags">
                    {p.tags.map((t) => (
                      <span className="project-card__tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-card__footer">
                    <a href={p.liveDemo || "#"} className="project-card__link" target={p.liveDemo ? "_blank" : "_self"} rel={p.liveDemo ? "noopener noreferrer" : undefined}>
                      Live Demo <FiArrowRight />
                    </a>
                    <a href={p.github || "#"} aria-label="GitHub repo" className="project-card__gh" target={p.github ? "_blank" : "_self"} rel={p.github ? "noopener noreferrer" : undefined}>
                      <FiGithub />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )}
    </>
  );
}
