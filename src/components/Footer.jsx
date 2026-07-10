import React from "react";
import { FiDownload } from "react-icons/fi";
import "./Footer.css";
import Logo from "../assets/Logo-Portfolio.png";

const QUICK_LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];
const TOP_SKILLS = ["Flutter", "React.js", "Node.js", "Next.js", "MongoDB", "PostgreSQL"];

export default function Footer() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Deena P.pdf';
    link.download = 'Deena P.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <img src={Logo} alt="Deena P Logo" className="footer__logo-img" />
          <p className="footer__tagline">Software Engineer | Full Stack Developer</p>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Top Skills</h4>
          <ul className="footer__skills-grid">
            {TOP_SKILLS.map((s) => (
              <li key={s}><span>{s}</span></li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__resume">
          <h4>Download Resume</h4>
          <p>Get a quick overview of my professional journey and experience.</p>
          <button className="btn btn--primary btn--sm" onClick={handleDownloadResume}>
            <FiDownload /> Download Resume
          </button>
        </div>
      </div>

      <div className="footer__bottom">
        <span>Deena P</span>
        <span>Built with ❤️ and lots of ☕</span>
      </div>
    </footer>
  );
}
