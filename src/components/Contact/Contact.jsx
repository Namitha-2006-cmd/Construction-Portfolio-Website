import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("https://formspree.io/f/maqjjwga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Enquiry submitted successfully!");
        e.target.reset();
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-24 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/project-7.webp')",
          fontFamily: "'Dancing Script', cursive",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-2xl">
            Reach out to discuss your project with a team committed to excellence.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-20 px-6 bg-gray-100"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        >
          <FaWhatsapp size={28} />
        </a>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Get In Touch
            </h2>
            <p className="text-black mb-6 text-lg">
              We'd love to discuss your project requirements.
              <br />
              <span className="text-yellow-500">
                We are here to help you turn your vision into reality.
              </span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoCard icon="📍" title="Location">
                Chennai, Tamil Nadu, India
              </InfoCard>

              <InfoCard icon="✉️" title="Email">
                sbconstruction@gmail.com
              </InfoCard>

              <InfoCard icon="📞" title="Call">
                +91 98765 43210
              </InfoCard>

              <InfoCard icon="⏰" title="Open Hours">
                Monday – Friday<br />9AM – 6PM
              </InfoCard>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded"
              required
            />

            <textarea
              rows="2"
              name="subject"
              placeholder="Subject"
              className="w-full border p-3 rounded"
              required
            ></textarea>

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              className="w-full border p-3 rounded"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded font-semibold text-white ${
                loading
                  ? "bg-gray-400"
                  : "bg-yellow-600 hover:bg-yellow-700"
              }`}
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

/* Small reusable info card */
const InfoCard = ({ icon, title, children }) => (
  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
    <div className="bg-orange-100 p-4 rounded-xl text-orange-600 text-xl">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-lg text-yellow-500">{title}</h4>
      <p className="text-gray-600 text-sm">{children}</p>
    </div>
  </div>
);

export default Contact;
