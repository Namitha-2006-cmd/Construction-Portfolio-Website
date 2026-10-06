import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
    quote: "Request Quote",

    footerText: "Shaping the digital world with style and simplicity.",
    connect: "Let's Connect",
    langBtn: "தமிழ்",
  },
  ta: {
    home: "முகப்பு",
    about: "எங்களை பற்றி",
    services: "சேவைகள்",
    projects: "திட்டங்கள்",
    contact: "தொடர்பு",
    quote: "விலை கோரிக்கை",

    footerText: "எளிமை மற்றும் அழகுடன் டிஜிட்டல் உலகை உருவாக்குகிறோம்.",
    connect: "தொடர்பு கொள்ளுங்கள்",
    langBtn: "English",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ta" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
