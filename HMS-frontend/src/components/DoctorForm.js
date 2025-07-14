import React, { useState } from "react";
import api from "../api";

function DoctorForm() {
  const [form, setForm] = useState({
    name: "",
    specialization: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitting:", form);

    api
      .post("/doctors", form)
      .then(() => {
        alert("✅ Doctor added successfully!");
        setForm({ name: "", specialization: "" }); // reset form
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Failed to add doctor");
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">➕ Add Doctor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Doctor Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={form.specialization}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
}

export default DoctorForm;
