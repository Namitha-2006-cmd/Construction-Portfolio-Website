import { useState } from "react";

const Quote2 = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      type: e.target.type.value,
      timeline: e.target.timeline.value,
      budget: e.target.budget.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("https://formspree.io/f/xwvqlabk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Quote request submitted successfully!");
        e.target.reset();
      } else {
        alert("Submission failed");
      }
    } catch {
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-50 text-lg">
      

       <section className="py-10 px-2" style={{fontFamily: "'Dancing Script', cursive"}}>
            <h2 className="text-4xl text-center font-bold mb-4">
                Get your Quotation <span className="text-yellow-500">by Contacting Us</span>
            </h2>
        </section>
    
     

      {/* Quote Section */}
      <section className="pb-16 px-4"  style={{
          fontFamily: "'Dancing Script', cursive",
        }}>
        <div className="max-w-7xl mx-auto bg-white rounded-5xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="bg-yellow-500 text-black p-10 lg:p-14">
              <h2 className="text-4xl text-center font-bold mb-4">
                Transform Your Vision Into Reality
              </h2>
              <p className="text-gray-200 text-lg mb-8">
                Precision, innovation, and uncompromising quality in every
                project we build.
              </p>

              <div className="space-y-6 text-2xl font-normal    mb-8">
                <Benefit 
                  title="Expert Planning"
                  text= "Comprehensive project analysis and strategic planning"
                />
                <hr/>
                <Benefit
                  title="Quality Assurance"
                  text="Rigorous quality control at every construction phase"
                />
                <hr/>
                <Benefit
                  title="Timely Delivery"
                  text="Efficient project execution with deadlines met"
                />
                <hr/>
              </div>

              <div className="mt-10 text-2xl space-y-3 text-gray-200">
                <p>📞 +91 98765 43210</p>
                <p className="text-gray-800">✉️ sbconstruction@gmail.com</p>
                <p>📍  Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Right Form */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-2">
                Get Your Custom Quote
              </h3>
              <p className="text-gray-600 mb-8">
                Share your project details and receive a personalized estimate.
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <Input label="Full Name" name="name" />
                <Input label="Email Address" name="email" type="email" />
                <Input label="Phone Number" name="phone" />
                <Select label="Project Category" name="type">
                  <option value="">Select</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Renovation</option>
                  <option>Industrial</option>
                </Select>

                <Select label="Expected Timeline" name="timeline">
                  <option value="">Select</option>
                  <option>Immediate</option>
                  <option>1–3 Months</option>
                  <option>3–6 Months</option>
                  <option>Flexible</option>
                </Select>

                <Input
                  label="Project Budget"
                  name="budget"
                  placeholder="Optional"
                />

                <div className="md:col-span-2">
                  <label className="block mb-2 font-medium">
                    Project Description
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg transition"
                  >
                    {loading ? "Submitting..." : "Request Detailed Quote"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

/* Reusable Components */
const Benefit = ({ title, text }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 flex items-center justify-center bg-yellow-600 rounded-full">
      ✔
    </div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-lg text-gray-200">{text}</p>
    </div>
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block mb-2 font-medium">{label}</label>
    <input
      {...props}
      required
      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 outline-none"
    />
  </div>
);

const Select = ({ label, children, ...props }) => (
  <div>
    <label className="block mb-2 font-medium">{label}</label>
    <select
      {...props}
      required
      className="w-full border rounded-lg p-3 bg-white focus:ring-2 focus:ring-yellow-500 outline-none"
    >
      {children}
    </select>
  </div>
);

export default Quote2;
