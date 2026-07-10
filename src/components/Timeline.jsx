import React from "react";
import { FiClock } from "react-icons/fi";
import "./Timeline.css";

const ITEMS = [
  {
    date: "May 2025 – Present",
    title: "Software Engineer",
    org: "JBB Softech",
    desc: "Working on multiple production products and delivering high-quality features.",
  },
  {
    date: "2024 – 2025",
    title: "Full Stack Developer (Projects)",
    desc: "Built multiple end-to-end applications with modern tech stack.",
  },
  {
    date: "2019 – 2023",
    title: "B.Tech in Information Technology",
    desc: "University College of Engineering, Tindivanam.",
  },
  {
    date: "2019",
    title: "Started My Journey",
    desc: "Began my journey in programming and problem solving.",
  },
];

export default function Timeline() {
  return (
    <section className="timeline-sidebar glass panel">
      <h2 className="panel-title">
        <FiClock className="panel-title__icon" />
        Experience Timeline
      </h2>

      <ul className="timeline-sidebar__list">
        {ITEMS.map((item) => (
          <li className="timeline-sidebar__item" key={item.title}>
            <span className="timeline-sidebar__dot" />
            <p className="timeline-sidebar__date">{item.date}</p>
            <p className="timeline-sidebar__title">{item.title}</p>
            {item.org && <p className="timeline-sidebar__org">{item.org}</p>}
            <p className="timeline-sidebar__desc">{item.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
