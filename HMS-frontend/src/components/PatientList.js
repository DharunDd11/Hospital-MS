import React, { useEffect, useState } from "react";
import api from "../api";

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    api.get("/patients").then((res) => setPatients(res.data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">👥 Patient List</h2>
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-blue-100 text-blue-800 text-left">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Age</th>
            <th className="py-2 px-4">Gender</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-t hover:bg-gray-50">
              <td className="py-2 px-4">{p.id}</td>
              <td className="py-2 px-4">{p.name}</td>
              <td className="py-2 px-4">{p.age}</td>
              <td className="py-2 px-4">{p.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
