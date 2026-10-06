import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"; // import your footer
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Service/Service.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Quote from "./components/Quote/Quote.jsx";

function App() {
  return (
    <>
      {/* Navbar always on top */}
      <Navbar />

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>

      {/* Footer always at the bottom */}
      <Footer />
    </>
  );
}

export default App;
