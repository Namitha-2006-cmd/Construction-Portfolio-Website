import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <>
      <a
        href="https://wa.me/9876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
      {/* Hero Section */}
      <section
        className="relative py-24 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/project-11.webp')",
          fontFamily: "'Dancing Script', cursive",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About SB Construction
          </h1>
          <p className="text-gray-200 max-w-2xl text-xl mx-auto">
            Building trust, quality, and excellence for every project we deliver.
          </p>
        </div>
      </section>


      {/* About Content */}
      <section
        className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Built on Excellence, Driven by Vision
          </h2>

          <p className="text-gray-600 mb-6">
            SB Construction is a trusted name in the construction industry,
            delivering residential, commercial, and industrial projects with
            unmatched quality and precision.
          </p>

          <p className="text-gray-600 mb-8">
            With decades of experience, we focus on innovation, safety, and
            client satisfaction while transforming ideas into strong,
            sustainable structures.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center mb-8">
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

          <Link
            to="/contact"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 transition text-white px-8 py-3 rounded"
          >
            Contact Us
          </Link>
        </div>

        {/* Right Image */}
        <img
          src="/Images/project-10.webp"
          alt="Construction Project"
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Mission Section */}
      <section
        className="bg-gray-50 py-20 px-6"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side – Image */}
          <div>
            <img
              src="/Images/mission.jfif"
              alt="Our Mission"
              className="w-full  object-cover rounded-2xl shadow-lg shadow-gray-900"
            />
          </div>

          {/* Right Side – Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-yellow-500">
              Our Mission
            </h2>

            <p className="text-gray-900 leading-relaxed space-y-3">
              <span className="block">
                Our mission is to deliver world-class construction solutions defined by excellence, integrity, and precision.
              </span>
              <span className="block">
                We unite expert craftsmanship with advanced technologies to create structures of lasting value.
              </span>
              <span className="block">
                Every project is guided by meticulous planning, superior quality standards, and attention to detail.
              </span>
              <span className="block">
                Transparent communication and professional accountability remain central to our process.
              </span>
              <span className="block">
                We are dedicated to safety, sustainability, and on-time delivery across every engagement.
              </span>
              <span className="block">
                Through innovation and commitment, we strive to exceed expectations and build enduring partnerships.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* Goal Section */}
      <section
        className="py-20 px-6 bg-white"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side – Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              Our Goal
            </h2>

            <p className="text-gray-800 leading-relaxed space-y-3">
              <span className="block text-xl text-yellow-500 mb-4 font-sans">
                Customer satisfaction is our highest priority.
                SB Construction was founded after carefully understanding the challenges and concerns faced by our customers.
                We set out with a clear purpose—to address these pain points with practical solutions and reliable execution.
                Our commitment is to deliver consistent quality, transparent service, and dependable results on every project.
              </span>
              <span className="block">
                We are committed to delivering well-planned projects that respect our clients budgets while maintaining high construction standards.
              </span>

              <span className="block">
                We focus on durability, safety, and long-term performance to minimize future maintenance costs.
              </span>
              <span className="block ">
                Above all, our goal is to earn trust by delivering reliable results and exceeding client expectations at every stage.
              </span>
              <span className="block">
                Sustainability, safety, and long-term value guide every decision we make.
              </span>
            </p>
          </div>

          {/* Right Side – Image */}
          <div>
            <img
              src="/Images/goal.jfif"
              alt="Our Goal"
              className="w-full object-cover rounded-2xl shadow-lg shadow-gray-900"
            />
          </div>

        </div>
      </section>


    </>
  );
};

export default About;
