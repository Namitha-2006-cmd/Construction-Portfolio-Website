import Hero from "../Hero/Hero.jsx";
import { Link } from "react-router-dom";
import ClientFeedback from "../ClientFeedback/ClientFeedback";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Hero />

      {/* About Preview */}
      <section
        className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Built on Excellence, Driven by Vision
          </h2>

          <p className="text-gray-600 mb-8">
            We specialize in delivering high-quality construction projects with
            precision and integrity.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-yellow-600">25+</h3>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-600">500+</h3>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-600">98%</h3>
              <p className="text-gray-600 text-sm">Client Satisfaction</p>
            </div>
          </div>

          <Link to="/about" className="text-yellow-600 font-semibold">
            Learn More →
          </Link>
        </div>

        {/* Right Image */}
        <img
          src="/Images/project-4.webp"
          alt="Project"
          className="rounded shadow"
        />
      </section>

      {/* Services Preview */}
      <section className="bg-gray-100 py-20" style={{ fontFamily: "'Dancing Script', cursive" }}>
        <h2 className="text-center text-3xl font-bold mb-12">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl max-h-7xl mx-auto px-6">
          {[
            {
              title: "Commercial Construction",
              image: "/Images/Services/Commercial Construction.jfif",
            },
            {
              title: "Residential Projects",
              image: "/Images/Services/Residential Projects.jfif",
            },
            {
              title: "Design Build Services",
              image: "/Images/Services/Design Build Services.jfif",
            },
            {
              title: "Project Consulting",
              image: "/Images/Services/Project Consulting",
            },
            {
              title: "Renovation",
              image: "/Images/Services/Renovation",
            },
            {
              title: "Site Development",
              image: "/Images/Services/Site Development.jfif",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
              {/* Image */}
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              {/* Text */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>
                <Link to="/service" className="text-yellow-500 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Feedback */}
      <ClientFeedback />

      {/* CTA */}
      <section
        className="w-full bg-yellow-500 py-24 text-center flex flex-col items-center justify-center"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        <h2 className="text-black text-4xl md:text-5xl mb-10">
          Contact Us For Your Free Consultation
        </h2>

        <Link
          to="/Quote"
          className="bg-orange-500 hover:bg-orange-600 transition text-white text-lg px-10 py-4 rounded-md mb-16"
        >
          Get a Free Quote
        </Link>

        <p className="text-black text-3xl md:text-4xl">
          Or Give Us a Call{" "}
          <a href="tel:+919876543210" className="font-semibold">
            +91 98765 43210
          </a>
        </p>
        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/9876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
      </section>

      <section className="bg-gray-100 py-24 px-6" style={{ fontFamily: "'Dancing Script', cursive" }}>
        <h2 className="text-center text-4xl text-black font-bold mb-12 ">
          Our Projects
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Project 1 */}
          <div>
            <img
              src="/Images/project-3.webp"
              alt="General Contracting"
              className="rounded-2xl w-full  object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">
              General Contracting
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Full-scale construction management from planning to completion.
              We coordinate all aspects of your project, ensuring seamless
              execution and superior quality throughout every phase of construction.
            </p>

            <Link to="/projects" className="text-yellow-500 font-semibold hover:underline">
              Learn More →
            </Link>
          </div>

          {/* Project 2 */}
          <div>
            <img
              src="/Images/project-7.webp"
              alt="Residential Renovation"
              className="rounded-2xl w-full  object-cover mb-6"
            />

            <h3 className="text-2xl font-semibold mb-4">
              Residential Renovation
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Transform your home with our expert renovation services.
              From kitchen remodels to complete home makeovers, we deliver
              exceptional craftsmanship that enhances your living experience.
            </p>

            <Link
              to="/projects"
              className="text-yellow-500 font-semibold hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* Project 3 */}
          <div>
            <img
              src="/Images/project-11.webp"
              alt="Commercial Construction"
              className="rounded-2xl w-full  object-cover mb-6"
            />

            <h3 className="text-2xl font-semibold mb-4">
              Commercial Construction
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Build your business success with our commercial construction expertise.
              We specialize in office buildings, retail spaces, and industrial
              facilities that meet your operational needs.
            </p>

            <Link
              to="/projects"
              className="text-yellow-500 font-semibold hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* Project 4 */}
          <div>
            <img
              src="/Images/project-5.webp"
              alt="Project Management"
              className="rounded-2xl w-full  object-cover mb-6"
            />

            <h3 className="text-2xl font-semibold mb-4">
              Project Management
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Professional oversight ensuring your project stays on schedule
              and within budget. Our experienced managers coordinate all
              stakeholders while maintaining high quality standards.
            </p>

            <Link
              to="/projects"
              className="text-yellow-500 font-semibold hover:underline"
            >
              Learn More →
            </Link>
          </div>

        </div>
      </section>



    </>
  );
};

export default Home;
