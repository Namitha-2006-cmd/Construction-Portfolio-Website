import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Project1 from "/src/components/Projects/Project1.jsx"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa";

const projects = [
  {
    title: "Residential Villa Project",
    image: "/Images/Projects/project1.jfif",
    category: "Residential",
  },
  {
    title: "Commercial Complex",
    image: "/Images/project-5.webp",
    category: "Commercial",
  },
  {
    title: "Apartment Construction",
    image: "/Images/Projects/project3.jfif",
    category: "Residential",
  },
  {
    title: "Office Building",
    image: "/Images/Projects/project4",
    category: "Commercial",
  },
  {
    title: "Interior Renovation",
    image: "/Images/Projects/project5.jfif",
    category: "Renovation",
  },
  {
    title: "Residential Villa Project",
    image: "/Images/Project-1/project-1.webp",
    category: "Residential",
  },
  {
    title: "Residential Villa Project",
    image: "/Images/Project-1/project-3.webp",
    category: "Residential",
  },
  {
    title: "Residential Villa Project",
    image: "/Images/Project-1/project-4.webp",
    category: "Residential",
  },
  {
    title: "Residential Villa Project",
    image: "/Images/Project-1/project-6.webp",
    category: "Residential",
  },
  {
    title: "Residential Villa Project",
    image: "/Images/Project-1/project-7.webp",
    category: "Residential",
  },
  {
    title: "Residential Villa Project",
    image: "/Images/Project-1/project-8.webp",
    category: "Residential",
  },
  {
    title: "Residential Villa Project",
    image: "/Images/Project-1/project-9.webp",
    category: "Residential",
  },
  {
    title: "Residential Villa Project",
    image: "/Images/Project-1/project-10.webp",
    category: "Residential",
  },
  {
    title: "Residential Villa Project",
    image: "/Images/Project-1/project-11.webp",
    category: "Residential",
  },
  {
    title: "Residential Villa Project",
    image: "/Images/Project-1/project-12.webp",
    category: "Residential",
  },
];

const Project = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-24 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/project-3.webp')",
          fontFamily: "'Dancing Script', cursive",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Projects
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-2xl">
            Showcasing our commitment to quality, precision, and excellence.
          </p>
        </div>
      </section>

      <Project1/>

      {/* Projects Slider */}
      <section
        className="py-20 px-6 bg-gray-100"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl">
              Each project reflects our dedication to craftsmanship and quality.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                  
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-90 object-cover group-hover:scale-105 transition duration-300"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <Link
                        to="/contact"
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded"
                      >
                        Enquire Now
                      </Link>

                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    {/* <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {project.category}
                    </p> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
    </>
  );
};

export default Project;
