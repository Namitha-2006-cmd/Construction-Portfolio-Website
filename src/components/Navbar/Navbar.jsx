import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/Images/SB Logo.png";
import "./navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faDiagramProject,
  faPhone,
  faFileSignature,
  faLanguage
} from "@fortawesome/free-solid-svg-icons";

/* ================= Language Translations ================= */
const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
    quote: "Request Quote",
    c: "SB",
    company: "Construction",
    langBtn: "தமிழ்"
  },
  ta: {
    home: "முகப்பு",
    about: "எங்களை பற்றி",
    services: "சேவைகள்",
    projects: "திட்டங்கள்",
    contact: "தொடர்பு",
    quote: "விலை கோரிக்கை",
    c: "எஸ் பி",
    company: "கன்ஸ்ட்ரக்ஷன்",
    langBtn: "English"
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ta" : "en");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div
        className={`max-w-7xl mx-auto px-6 py-4 flex justify-between items-center ${
          language === "ta" ? "tamil-nav" : "english-nav"
        }`}
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        {/* ================= Logo ================= */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="SB Construction Logo"
            className="h-12 w-auto"
          />
          <h1 className="text-2xl font-bold text-yellow-500">
            {translations[language].c}{" "}
            <span className="text-gray-800">
              {translations[language].company}
            </span>
          </h1>
        </Link>

        {/* ================= Hamburger ================= */}
        <div className="hamburger md:hidden" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* ================= Menu ================= */}
        <ul className={`nav-menu ${open ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              <FontAwesomeIcon icon={faHouse} />
              {translations[language].home}
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setOpen(false)}>
              <FontAwesomeIcon icon={faUser} />
              {translations[language].about}
            </Link>
          </li>

          <li>
            <Link to="/services" onClick={() => setOpen(false)}>
              <FontAwesomeIcon icon={faBriefcase} />
              {translations[language].services}
            </Link>
          </li>

          <li>
            <Link to="/projects" onClick={() => setOpen(false)}>
              <FontAwesomeIcon icon={faDiagramProject} />
              {translations[language].projects}
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <FontAwesomeIcon icon={faPhone} />
              {translations[language].contact}
            </Link>
          </li>

          <li>
            <Link
              to="/quote"
              className="request-btn"
              onClick={() => setOpen(false)}
            >
              <FontAwesomeIcon icon={faFileSignature} />
              {translations[language].quote}
            </Link>
          </li>

          {/* ================= Desktop Language Button ================= */}
          {/* <li className="hidden md:block">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 border px-3 py-1 rounded-md text-sm font-semibold text-gray-700 hover:bg-yellow-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faLanguage} />
              {translations[language].langBtn}
            </button>
          </li> */}

          {/* ================= Mobile Language Button ================= */}
          {/* <li className="md:hidden">
            <button
              onClick={() => {
                toggleLanguage();
                setOpen(false);
              }}
              className="mt-4 border px-4 py-2 rounded-md text-sm font-semibold text-gray-700 hover:bg-yellow-400 hover:text-white transition"
            >
              {translations[language].langBtn}
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

