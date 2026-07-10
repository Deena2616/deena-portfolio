import React, { useState } from "react";
import {
  SiFlutter, SiDart, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiFirebase, SiGit,
  SiJavascript, SiPostman, SiBootstrap, SiMysql,
} from "react-icons/si";
import { FaAws, FaHtml5, FaCss3, FaAndroid, FaJava, FaMicrosoft } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import "./Skills.css";

const TABS = ["All Skills", "Frontend", "Backend", "Mobile", "Tools"];

const SKILLS = [
  { icon: <SiFlutter />, name: "Flutter", level: 90, cat: "Mobile", color: "#54C5F8" },
  { icon: <SiDart />, name: "Dart", level: 85, cat: "Mobile", color: "#0175C2" },
  { icon: <SiReact />, name: "React.js", level: 90, cat: "Frontend", color: "#61DAFB" },
  { icon: <SiNextdotjs />, name: "Next.js", level: 85, cat: "Frontend", color: "#000000" },
  { icon: <SiNodedotjs />, name: "Node.js", level: 85, cat: "Backend", color: "#3C873A" },
  { icon: <SiExpress />, name: "Express.js", level: 85, cat: "Backend", color: "#000000" },
  { icon: <SiMongodb />, name: "MongoDB", level: 80, cat: "Backend", color: "#47A248" },
  { icon: <SiPostgresql />, name: "PostgreSQL", level: 80, cat: "Backend", color: "#336791" },
  { icon: <SiMysql />, name: "MySQL", level: 80, cat: "Backend", color: "#4479A1" },
  { icon: <SiFirebase />, name: "Firebase", level: 85, cat: "Backend", color: "#FFA000" },
  { icon: <FaJava />, name: "Java", level: 85, cat: "Backend", color: "#007396" },
  { icon: <FaAws />, name: "AWS S3", level: 75, cat: "Tools", color: "#FF9900" },
  { icon: <SiGit />, name: "Git / GitHub", level: 90, cat: "Tools", color: "#F05032" },
  { icon: <SiJavascript />, name: "JavaScript", level: 85, cat: "Frontend", color: "#F7DF1E" },
  { icon: <FaHtml5 />, name: "HTML5", level: 90, cat: "Frontend", color: "#E34F26" },
  { icon: <FaCss3 />, name: "CSS3", level: 85, cat: "Frontend", color: "#1572B6" },
  { icon: <SiBootstrap />, name: "Bootstrap", level: 85, cat: "Frontend", color: "#7952B3" },
  { icon: <FaAndroid />, name: "Android Studio", level: 80, cat: "Mobile", color: "#3DDC84" },
  { icon: <VscCode />, name: "VS Code", level: 90, cat: "Tools", color: "#007ACC" },
  { icon: <SiPostman />, name: "Postman", level: 85, cat: "Tools", color: "#FF6C37" },
  { icon: <FaMicrosoft />, name: "MS Office", level: 85, cat: "Tools", color: "#F25022" },
];

export default function Skills() {
  const [tab, setTab] = useState("All Skills");
  const filtered = tab === "All Skills" ? SKILLS : SKILLS.filter((s) => s.cat === tab);

  return (
    <section id="skills" className="skills glass panel">
      <div className="skills__header">
        <h2 className="panel-title">
          <span className="panel-title__dot" />
          My Skills
        </h2>

        <div className="skills__tabs">
          {TABS.map((t) => (
            <button
              key={t}
              className={`skills__tab ${tab === t ? "skills__tab--active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="skills__grid">
        {filtered.map((s) => (
          <div className="skill-card" key={s.name}>
            <div className="skill-card__top">
              <span className="skill-card__icon" style={{ color: s.color }}>{s.icon}</span>
              <p className="skill-card__name">{s.name}</p>
              <span className="skill-card__level">{s.level}%</span>
            </div>
            <div className="skill-card__bar">
              <div
                className="skill-card__fill"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
