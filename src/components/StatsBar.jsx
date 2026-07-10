import React from "react";
import { FiBriefcase, FiCode, FiLayers, FiSend, FiShield, FiTrendingUp } from "react-icons/fi";
import "./StatsBar.css";

const STATS = [
  { icon: <FiBriefcase />, value: "1+", label: "Years Experience" },
  { icon: <FiCode />, value: "4+", label: "Major Projects" },
  { icon: <FiLayers />, value: "20+", label: "Technologies" },
  { icon: <FiSend />, value: "3", label: "Production Apps" },
  { icon: <FiShield />, value: "30%", label: "Defect Reduction" },
  { icon: <FiTrendingUp />, value: "20%", label: "Performance Boost" },
];

export default function StatsBar() {
  return (
    <section className="stats-bar">
      {STATS.map((s) => (
        <div className="stats-bar__item glass" key={s.label}>
          <span className="stats-bar__icon">{s.icon}</span>
          <div>
            <p className="stats-bar__value">{s.value}</p>
            <p className="stats-bar__label">{s.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
