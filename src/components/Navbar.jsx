import React, { useState, useEffect } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import Logo from "../assets/Logo-Portfolio.png";

const LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Deena P.pdf';
    link.download = 'Deena P.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleClick = (link) => {
    setActive(link);
    setOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" onClick={() => handleClick("Home")}>
          <img src={Logo} alt="Deena P Logo" className="navbar__logo-img" />
        </a>

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`navbar__link ${active === link ? "navbar__link--active" : ""}`}
              onClick={() => handleClick(link)}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="btn btn--primary btn--sm navbar__cv" onClick={handleDownloadResume}>
            <FiDownload /> Download Resume
          </button>
          <button className="navbar__burger" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
