import React, { useEffect, useState } from "react";
import api from "../api";

function AppointmentForm() {
  const [form, setForm] = useState({
    patientId: "",
    doctorId: "",
    appointmentDate: "",
  });

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api.get("/patients").then((res) => setPatients(res.data));
    api.get("/doctors").then((res) => setDoctors(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      patient: { id: parseInt(form.patientId) },
      doctor: { id: parseInt(form.doctorId) },
      appointmentDate: form.appointmentDate,
    };

    api.post("/appointments", appointment)
      .then(() => alert("✅ Appointment booked"))
      .catch(() => alert("❌ Failed to book appointment"));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">📅 Book Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="patientId"
          value={form.patientId}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        >
          <option value="">Select Patient</option>
          {patients.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>

        <select
          name="doctorId"
          value={form.doctorId}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        >
          <option value="">Select Doctor</option>
          {doctors.map((d) => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>

        <input
          type="date"
          name="appointmentDate"
          value={form.appointmentDate}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
