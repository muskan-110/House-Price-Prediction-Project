import React, { useState } from "react";
import { predictPrice } from "../api";

export default function Home() {
  const [form, setForm] = useState({
    total_sqft: "",
    bhk: "",
    bath: "",
    location: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const payload = {
        total_sqft: parseFloat(form.total_sqft),
        bhk: parseInt(form.bhk),
        bath: parseInt(form.bath),
        location: form.location,
      };

      const res = await predictPrice(payload);
      setResult(res.data.estimated_price);
    } catch (err) {
      console.error("Error predicting price:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          🏠 Bangalore House Price Prediction
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            name="total_sqft"
            placeholder="Total Sqft"
            value={form.total_sqft}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="bhk"
            placeholder="BHK"
            value={form.bhk}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="bath"
            placeholder="Bath"
            value={form.bath}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Predict Price
          </button>
        </form>
        {result && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">
              Estimated Price:{" "}
              <span className="text-green-600">₹ {result} Lakh</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
