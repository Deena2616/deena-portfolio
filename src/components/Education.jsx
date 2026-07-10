import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import "./Education.css";

export default function Education() {
  return (
    <section className="education glass panel">
      <h2 className="panel-title">
        <GiGraduateCap className="panel-title__icon" />
        Education
      </h2>

      <div className="education__item">
        <span className="education__icon">
          <GiGraduateCap />
        </span>
        <div className="education__body">
          <div className="education__row">
            <h3 className="education__degree">B.Tech in Information Technology</h3>
            <span className="education__date">2019 - 2023</span>
          </div>
          <p className="education__school">
            University College of Engineering, Tindivanam, Tamil Nadu
          </p>
        </div>
      </div>
    </section>
  );
}
