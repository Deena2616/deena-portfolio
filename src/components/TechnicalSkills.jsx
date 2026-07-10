import React from "react";
import {
  FiCode, FiLayout, FiSmartphone, FiServer, FiDatabase, FiCloud, FiLink,
} from "react-icons/fi";
import "./TechnicalSkills.css";

const ROWS = [
  { icon: <FiCode />, label: "Languages", value: "Java, JavaScript, Dart" },
  { icon: <FiLayout />, label: "Frontend", value: "React.js, Next.js 14, HTML5, CSS3, Bootstrap" },
  { icon: <FiSmartphone />, label: "Mobile", value: "Flutter (Dart), Android Studio, Cross-Platform" },
  { icon: <FiServer />, label: "Backend", value: "Node.js, Express.js, REST API, Socket.IO" },
  { icon: <FiDatabase />, label: "Databases", value: "Firebase Firestore, MongoDB, PostgreSQL, MySQL, Redis" },
  { icon: <FiCloud />, label: "Cloud & Tools", value: "AWS S3, Git, GitHub, VS Code, Postman, Prisma ORM" },
  { icon: <FiLink />, label: "Integrations", value: "Razorpay, OpenAI/Groq API, JWT, bcrypt, Multer, Sharp" },
];

export default function TechnicalSkills() {
  return (
    <section className="tech-skills glass panel">
      <h2 className="panel-title">
        <FiCode className="panel-title__icon" />
        Technical Skills
      </h2>

      <div className="tech-skills__rows">
        {ROWS.map((r) => (
          <div className="tech-skills__row" key={r.label}>
            <span className="tech-skills__icon">{r.icon}</span>
            <div>
              <p className="tech-skills__label">{r.label}</p>
              <p className="tech-skills__value">{r.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
