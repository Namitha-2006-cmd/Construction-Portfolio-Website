import {
  FaHardHat,
  FaBuilding,
  FaTools,
  FaPaintRoller,
  FaHome,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    icon: <FaBuilding />,
    title: "Commercial Construction",
    image: "/Images/project-5.webp",
    description:
      "We deliver high-quality commercial buildings with strong structural integrity and modern design.",
  },
  {
    icon: <FaHome />,
    title: "Residential Construction",
    image: "/Images/project-3.webp",
    description:
      "From planning to execution, we build beautiful and durable homes tailored to your needs.",
  },
  {
    icon: <FaTools />,
    title: "Renovation & Remodeling",
    image: "/Images/Services/Renovation",
    description:
      "Upgrade your space with our expert renovation and remodeling services.",
  },
  {
    icon: <FaPaintRoller />,
    title: "Interior & Exterior Works",
    image: "/Images/Services/Interior.jfif",
    description:
      "Professional finishing, painting, flooring, and complete interior & exterior solutions.",
  },
  {
    icon: <FaHardHat />,
    title: "Project Management",
    image: "/Images/Services/Project.jfif",
    description:
      "We manage projects efficiently to ensure timely delivery and cost control.",
  },
];

const Service = () => {
  return (

    
    <section
      className="py-5 bg-gray-50"
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
          {/* Hero Section */}
      <section
        className="relative py-24 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/project-5.webp')",
          fontFamily: "'Dancing Script', cursive",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-gray-200 max-w-2xl text-2xl mx-auto">
            We provide end-to-end construction solutions with quality,
            safety, and customer satisfaction as our top priorities.
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          {/* <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2> */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            {/* We provide end-to-end construction solutions with quality,
            safety, and customer satisfaction as our top priorities. */}
          </p>
        </div>


     


        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 py-15">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md shadow-yellow-500 hover:shadow-xl transition duration-300 overflow-hidden">


              {/* Content */}
              <div className="p-8">
                <div className="text-4xl text-yellow-500 mb-5">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                </div>

                {/* Image */}
                <img src={service.image} alt={service.title} className="w-full h-44 object-cover" />
                <p className="text-gray-600 text-sm"> {service.description} </p>
              </div>

            </div>

          ))}




        </div>

      </div>
      <section
        className="w-full bg-white px-20 py-24 text-center flex flex-col items-center justify-center "
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
    </section>
  );
};

export default Service;
