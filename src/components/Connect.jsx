import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Connect.css";

export default function Connect() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:deenarajesh2000@gmail.com';
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_65hbjrv",
        "template_6fsm0el",
        {
          name: form.name,
          subject: form.subject,
          message: form.message,
        },
        "gUZyoumSyUXvRE_2m"
      );

      setShowSuccessPopup(true);

      setForm({
        name: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert(error.text || "Failed to send message.");
    }
  };

  return (
    <section id="contact" className="connect glass panel">
      <h2 className="panel-title">
        <FiMail className="panel-title__icon" />
        Let's Connect
      </h2>

      <p className="connect__desc">
        I'm always open to discussing new opportunities and interesting projects.
      </p>

      <div className="connect__info">
        <a href="mailto:deenarajesh2000@gmail.com" onClick={handleEmailClick} className="connect__info-row">
          <FiMail />
          <span>deenarajesh2000@gmail.com</span>
        </a>

        <a href="tel:+917358691403" className="connect__info-row">
          <FiPhone />
          <span>+91 7358691403</span>
        </a>

        <div className="connect__info-row">
          <FiMapPin />
          <span>Chennai, India</span>
        </div>
      </div>

      <div className="connect__socials">
        <a
          href="https://www.linkedin.com/in/deena-panjatcharam-1960a2319"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/Deena2616"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:deenarajesh2000@gmail.com"
          onClick={handleEmailClick}
        >
          <FiMail />
        </a>
      </div>

      <form className="connect__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn--primary connect__submit">
          Send Message <FiSend />
        </button>
      </form>

      {showSuccessPopup && (
        <div className="connect-success-overlay" onClick={() => setShowSuccessPopup(false)}>
          <div className="connect-success-popup" onClick={(e) => e.stopPropagation()}>
            <div className="connect-success-icon">
              <FiCheck />
            </div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
            <button className="btn btn--primary" onClick={() => setShowSuccessPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}