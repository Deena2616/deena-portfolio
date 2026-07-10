import React from "react";
import { FiUser, FiPhone, FiMail, FiMapPin, FiGlobe } from "react-icons/fi";
import { GiBrain, GiTargetShot } from "react-icons/gi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import "./About.css";

const TRAITS = [
  { icon: <GiBrain />, label: "Problem Solver" },
  { icon: <GiTargetShot />, label: "Detail Oriented" },
  { icon: <HiOutlineLightningBolt />, label: "Fast Learner" },
  { icon: <FiUsers />, label: "Team Player" },
];

export default function About() {
  return (
    <section id="about" className="about glass panel">
      <h2 className="panel-title">
        <span className="panel-title__dot" />
        About Me
      </h2>

      <div className="about__grid">
        <div className="about__text-col">
          <p>
            Software Engineer with 1+ year of experience in developing
            scalable mobile and web applications using Flutter, React.js,
            Node.js, and Next.js. I specialize in building real-time
            applications, REST APIs, and cloud-based solutions with a
            focus on clean code, performance and great user experience.
          </p>
          <p>
            I have shipped 3 end-to-end products used by real users with
            real-time features, payment integrations, and AI capabilities.
          </p>
          <p>
            Passionate about problem solving and continuously learning new
            technologies to build innovative solutions.
          </p>

          <div className="about__traits">
            {TRAITS.map((t) => (
              <div className="about__trait" key={t.label}>
                <span className="about__trait-icon">{t.icon}</span>
                <p>{t.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about__info-card">
          <div className="about__info-row">
            <FiUser />
            <div>
              <p className="about__info-label">Name</p>
              <p className="about__info-value">Deena P</p>
            </div>
          </div>
          <div className="about__info-row">
            <FiPhone />
            <div>
              <p className="about__info-label">Phone</p>
              <p className="about__info-value">+91 7358691403</p>
            </div>
          </div>
          <div className="about__info-row">
            <FiMail />
            <div>
              <p className="about__info-label">Email</p>
              <p className="about__info-value">deenarajesh2000@gmail.com</p>
            </div>
          </div>
          <div className="about__info-row">
            <FiMapPin />
            <div>
              <p className="about__info-label">Location</p>
              <p className="about__info-value">Chennai, India</p>
            </div>
          </div>
          <div className="about__info-row">
            <FiGlobe />
            <div>
              <p className="about__info-label">Languages</p>
              <p className="about__info-value">
                Tamil (Native), English (Professional), Telugu (Conversational)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
