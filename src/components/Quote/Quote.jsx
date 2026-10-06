import { useState } from "react";
import Quote2 from "../Quote/Quote2.jsx";
import { FaWhatsapp } from "react-icons/fa";

const RequestQuote = () => {
  const [form, setForm] = useState({
    area: 0,
    packageType: "Premium",
    parking: 0,
    sump: 0,
    recycleTank: 0,
    compoundWall: 0,
    solar: 0,
    name: "",
    email: "",
    phone: "",
  });

  const rates = {
    Basic: 1800,
    Standard: 2200,
    Premium: 2449,
  };


  // Cost calculations
  const areaCost = form.area * (rates[form.packageType] || 0);
  const parkingCost = form.parking * 1800;
  const sumpCost = form.sump * 25;
  const recycleCost = form.recycleTank * 30000;
  const compoundCost = form.compoundWall * 2000;
  const solarCost = form.solar * 75000;

  const total =
    areaCost +
    parkingCost +
    sumpCost +
    recycleCost +
    compoundCost +
    solarCost;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://formspree.io/f/meezepwn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...form,
        totalCost: total,
      }),
    });

    alert("Quote request submitted!");
  };


  const update = (e) => {
    const { name, value, type } = e.target;
    let val = value;

    // Convert number & range inputs
    if (type === "number" || type === "range") {
      val = value === "" ? 0 : Number(value);
    }

    // Parking min/max enforcement
    if (name === "parking") {
      if (val < 0) val = 0;
      if (val > 100) val = 100;
    }

    // Area limits
    if (name === "area") {
      if (val < 0) val = 0;
      if (val > 10000) val = 10000;
    }

    if (name === "compoundWall") {
      if (val < 0) val = 0;
      if (val > 1000) val = 1000;
    }

    setForm((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

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
          backgroundImage: "url('/Images/project-4.webp')",
          fontFamily: "'Dancing Script', cursive",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get a Quote
          </h1>
          <p className="text-gray-200 max-w-2xl text-xl mx-auto">
            Your vision deserves quality construction.
            Request a quote and build with confidence.
          </p>
        </div>
      </section>






      <section className="py-20 bg-gray-100" style={{
        fontFamily: "'Dancing Script', cursive",
      }}>
        <h1 className="text-4xl md:text-2xl text-yellow-500  text-center py-1 font-bold mb-4">
          CONSTRUCTION COST CALCULATOR
        </h1>

        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">

          {/* LEFT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow space-y-5"
          >
            <h2 className="font-semibold text-lg">
              Construction area in sq.ft
            </h2>
            <input
              type="number"
              name="area"
              min="0"
              max="10000"
              className="w-full border p-2 rounded"
              value={form.area}
              onChange={update}
            />
            <p className="text-sm text-gray-500">Min: 0 – Max: 10000</p>

            <h2 className="font-semibold text-lg">
              Select construction Package
            </h2>
            <select
              name="packageType"
              className="w-full border p-2 rounded"
              value={form.packageType}
              onChange={update}
            >
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>




            {/* PARKING */}
            <h2 className="font-semibold text-lg">
              Car Parking area (optional)
            </h2>
            <input
              type="number"
              name="parking"
              min={0}
              max={100}
              placeholder="Car parking area (sq.ft)"
              className="w-full border p-2 rounded"
              value={form.parking}
              onChange={update}
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e") e.preventDefault();
              }}
            />
            <p className="text-sm text-gray-500">
              Max 100 sq.ft • Car parking charged @  ₹1800/sq.ft
            </p>


            {/* SLIDERS */}
            <h2 className="font-semibold text-lg">
              <label>How many litres of underground sump required ? (optional)</label>
            </h2>


            <input
              type="range"
              name="sump"
              min="0"
              max="20000"
              className="w-full"
              value={form.sump}
              onChange={update}
            />

            <p className="text-sm">{form.sump} litres</p>
            <p className="text-sm text-gray-500">
              An average family of 4 will require minimum of 10,000 litres
            </p>

            <h2 className="font-semibold text-lg">

              <label>How many person waste water recycling tank required?(optional)</label>
            </h2>
            <input
              type="range"
              name="recycleTank"
              min="0"
              max="10"
              className="w-full"
              value={form.recycleTank}
              onChange={update}
            />


            <p className="text-xs">{form.recycleTank} units</p>

            <p className="text-sm text-gray-500">
              Waste water recycling tank is an alternative to septic tank. It recycle the waste water &recharges
              underground water table. It's not required if you have a drainage connection
            </p>

            <h2 className="font-semibold text-lg">

              How much feet length compound wall do you require?(optional)
            </h2>

            <input
              type="number"
              name="compoundWall"
              placeholder="Compound wall length (feet)"
              className="w-full border p-2 rounded"
              value={form.compoundWall}
              onChange={update}
            />
            <p className="text-sm text-gray-500">
              Min: 0 - Max: 1000 <br />
              If plot size is 40x30, compound wall length will be 40+40+30+30=140 feet
            </p>
            <h2 className="font-semibold text-lg">

              <label>How much solar power do you require? (optional)</label>
            </h2>
            <input
              type="range"
              name="solar"
              min="0"
              max="10"
              className="w-full"
              value={form.solar}
              onChange={update}
            />
            <p className="text-xs">{form.solar} KW</p>
            <p className="text-sm text-gray-500">
              A 3BHK home will require 2KW solar power to run fans, lights and television during the daytime

            </p>

            {/* CONTACT INFO */}
            <hr className="text-gray-500"></hr>

            <h3 className="font-semibold text-lg text-yellow-500 mt-6">Your Details</h3>
            <input
              name="name"
              placeholder="Full Name"
              className="w-full border p-2 rounded"
              onChange={update}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
              onChange={update}
              required
            />
            <input
              name="phone"
              placeholder="Phone Number"
              className="w-full border p-2 rounded"
              onChange={update}
              required
            />
          </form>

          {/* RIGHT SUMMARY */}
          <div className=" p-6 rounded-xl shadow">
            <h3 className="text-xl text-center text-yellow-500 font-semibold mb-4">TOTAL SUMMARY</h3>

            <div className="space-y-10 text-lg rounded-4xl">
              <Summary label="Construction area in sq.ft" value={areaCost} />
              <hr className="text-gray-500"></hr>
              <Summary label="Select construction Packagee" value={rates[form.packageType]} />
              <hr className="text-gray-500"></hr>
              <Summary label="Car Parking area in square feet(optional)" value={parkingCost} />
              <hr className="text-gray-500"></hr>
              <Summary label="How many litres of underground sump required ? (optional)" value={sumpCost} />
              <hr className="text-gray-500"></hr>
              <Summary label="How many person waste water recycling tank required?(optional)" value={recycleCost} />
              <hr className="text-gray-500"></hr>
              <Summary label="How much feet length compound wall do you require?(optional)" value={compoundCost} />
              <hr className="text-gray-500"></hr>
              <Summary label="How much solar power do you require? (optional)" value={solarCost} />

              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹ {total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white text-xl py-3 rounded-4xl shadow-yellow-400"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
      <Quote2 />
    </>
  );
};

const Summary = ({ label, value }) => (
  <div className="flex justify-between">
    <span>{label}</span>
    <span>₹ {value.toLocaleString()}</span>
  </div>
);

export default RequestQuote;
