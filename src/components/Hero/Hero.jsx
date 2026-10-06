import "./Hero.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: 500, label: "Projects Completed" },
  { value: 25, label: "Years Experience" },
  { value: 98, label: "% Client Satisfaction" },
  { value: 50, label: "Expert Team Members" },
];

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const navigate = useNavigate();

  return (
    <section className="hero relative min-h-screen text-white pt-24">

      {/* ================= Background Video ================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src="/Images/video-1.mp4" type="video/mp4" />
      </video>

      {/* ================= Overlay ================= */}
      <div className="hero-overlay"></div>

      {/* ================= Hero Content ================= */}
      <div className="hero-content">

        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sans">
          Your Vision. Our Expertise. Delivering Solid Results.
        </h1>

        <p className="text-lg md:text-xl mb-10 text-gray-200 font-dancing">
          We deliver comprehensive construction solutions with an unwavering
          commitment to quality, safety, and timely completion.
        </p>

        {/* ================= Buttons ================= */}
        <div className="hero-buttons mb-16">
          <button
            className="btn-primary"
            onClick={() => navigate("/quote")}
          >
            Request Quote
          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate("/projects")}
          >
            View Projects
          </button>
        </div>

        {/* ================= Stats ================= */}
        <div
          ref={ref}
          className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
            >
              <h2 className="text-4xl font-bold mb-2">
                {inView ? <CountUp end={stat.value} duration={2} /> : 0}
              </h2>
              <p className="uppercase tracking-widest text-gray-300 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
