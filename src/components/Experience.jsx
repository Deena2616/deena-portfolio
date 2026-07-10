import React from "react";
import { FiBriefcase } from "react-icons/fi";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience glass panel">
      <h2 className="panel-title">
        <FiBriefcase className="panel-title__icon" />
        Experience
      </h2>

      <div className="experience__item">
        <div className="experience__row">
          <h3 className="experience__role">Software Engineer</h3>
          <span className="experience__date">May 2025 – Present</span>
        </div>
        <p className="experience__org">JBB Softech</p>

        <ul className="experience__list">
          <li>
            Led front-end development of 3 production products using Flutter and React.js  delivering 5+ modules per sprint cycle 
and maintaining zero critical post-release defects across all shipped features.
          </li>
          <li>
            Engineered real-time WebSocket communication using Socket.IO across 6 namespaces (notifications, app builder 
sync, subscriptions, vendor updates, support, and live previews), enabling instant UI updates without page refresh.
          </li>
          <li>
            Designed and consumed 20+ REST API contracts in collaboration with the Node.js backend team, cutting integration 
issues by 30% through early API contract definition and Postman-based validation.
          </li>
          <li>
            Optimized Flutter and React.js rendering pipelines through component memoization, lazy loading, and asset 
compression  achieving a measurable 20% reduction in page load time across all products.
          </li>
          <li>
            Built a cross-product reusable component library (buttons, forms, charts, modals) in both Flutter and React.js, 
eliminating ~30% of redundant UI code and reducing new screen development time by half. 
          </li>
          <li>Implemented secure authentication flows including JWT token management, OTP verification, role-based route 
guarding, and forgot-password recovery across Flutter and Next.js frontends. </li>
          <li> Managed full Git lifecycle  feature branching, pull request reviews, conflict resolution, and release tagging  across all 3 
product repositories using GitHub. </li>
        </ul>
      </div>
    </section>
  );
}
