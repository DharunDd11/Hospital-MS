import React, { useEffect, useState } from "react";
import api from "../api";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api.get("/doctors").then((res) => setDoctors(res.data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">👨‍⚕️ Doctor List</h2>
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-blue-100 text-blue-800 text-left">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Specialization</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((d) => (
            <tr key={d.id} className="border-t hover:bg-gray-50">
              <td className="py-2 px-4">{d.id}</td>
              <td className="py-2 px-4">{d.name}</td>
              <td className="py-2 px-4">{d.specialization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorList;
