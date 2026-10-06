// import "./footer.css";
// import { Link } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaXTwitter,
//   FaDribbble,
// } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         {/* Left Section */}
//         <div className="footer-about">
//           <h2>SB Construction</h2>
//           <p>
//             Shaping the digital world with
//             style and simplicity.
//           </p>

//           <div className="social-icons">
//             <a href="#"><FaFacebookF /></a>
//             <a href="#"><FaInstagram /></a>
//             <a href="#"><FaLinkedinIn /></a>
//             <a href="#"><FaXTwitter /></a>
//             <a href="#"><FaDribbble /></a>
//           </div>
//         </div>

//         {/* Page Links */}
//         <div className="footer-links">
//           <h3>Page Links</h3>
//           <Link to="/">Home</Link>
//           <Link to="/about">About Us</Link>
//           <Link to="/services">Services</Link>
//           <Link to="/projects">Projects</Link>
//           <Link to="/quote">Request Quote</Link>
//         </div>

//         {/* CTA */}
//         <div className="footer-cta">
//           <h3>Let's Connect</h3>
//           <Link to="/contact">
//             <button>GET IN TOUCH</button>
//           </Link>
//         </div>

//         {/* Contact */}
//         <div className="footer-links">
//           <h3>Contact</h3>
//           <h5>Location:</h5>
//           <p>123 Main St, City, Country</p>
//         </div>

//       </div>

//       {/* Bottom Bar */}
//       <div className="footer-bottom">
//         <p>
//           &copy; <span>SB Construction</span>. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import "./footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaDribbble,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-about">
          <h2>SB Construction</h2>
          <p>
            Shaping the digital world with
            style and simplicity.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaDribbble /></a>
          </div>
        </div>

        {/* Page Links */}
        <div className="footer-links">
          <h3>Page Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/quote">Request Quote</Link>
        </div>

        {/* CTA */}
        <div className="footer-cta">
          <h3>Let's Connect</h3>
          <Link to="/contact">
            <button>GET IN TOUCH</button>
          </Link>
        </div>

        {/* Contact */}
        <div className="footer-links footer-contact">
          <h3>Contact</h3>

          <div className="contact-item">
            <FaLocationDot className="contact-icon" />
            <span>Chennai, Tamil Nadu, India</span>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+91 98765 43210</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          &copy; <span>SB Construction</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
