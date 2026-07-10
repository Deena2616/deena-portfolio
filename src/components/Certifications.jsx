import React from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications" className="certifications glass panel">
      <h2 className="panel-title">
        <HiOutlineBadgeCheck className="panel-title__icon" />
        Certifications
      </h2>

      <div className="certifications__item">
        <span className="certifications__badge">
          <HiOutlineBadgeCheck />
        </span>
        <div className="certifications__body">
          <div className="certifications__row">
            <h3 className="certifications__name">Java Full-Stack Development</h3>
            <span className="certifications__year">2024</span>
          </div>
          <p className="certifications__desc">
            Gained hands-on experience in Java, Spring Boot, React.js, and
            MySQL through a comprehensive full-stack project.
          </p>
        </div>
      </div>
    </section>
  );
}
