import React, { useState } from "react";
import api from "../api";

function PatientForm() {
  const [form, setForm] = useState({ name: "", age: "", gender: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/patients", form)
      .then(() => alert("✅ Patient added"))
      .catch(() => alert("❌ Failed to add patient"));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">➕ Add Patient</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Patient Name"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          name="gender"
          value={form.gender}
          onChange={handleChange}
          placeholder="Gender"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Patient
        </button>
      </form>
    </div>
  );
}

export default PatientForm;
