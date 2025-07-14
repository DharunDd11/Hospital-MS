import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";
import DoctorForm from './components/DoctorForm';
import DoctorList from './components/DoctorList';
import AppointmentForm from './components/AppointmentForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
  <span className="text-2xl">🏥</span>
  <span className="text-xl font-bold text-blue-600">DD-Hospital Management</span>
</div>

            <nav className="hidden md:flex space-x-4">
              <NavLink
                to="/add-patient"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                    : "text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md"
                }
              >
                ➕ Add Patient
              </NavLink>
              <NavLink
                to="/patients"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                    : "text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md"
                }
              >
                👥 View Patients
              </NavLink>
              <NavLink
                to="/add-doctor"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                    : "text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md"
                }
              >
                ➕ Add Doctor
              </NavLink>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                    : "text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md"
                }
              >
                👨‍⚕️ View Doctors
              </NavLink>
              <NavLink
                to="/book-appointment"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                    : "text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md"
                }
              >
                📅 Book Appointment
              </NavLink>
            </nav>
            <div className="md:hidden">
              <details className="relative">
                <summary className="cursor-pointer text-blue-600">☰ Menu</summary>
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2 z-50">
                  <NavLink
                    to="/add-patient"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    ➕ Add Patient
                  </NavLink>
                  <NavLink
                    to="/patients"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    👥 View Patients
                  </NavLink>
                  <NavLink
                    to="/add-doctor"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    ➕ Add Doctor
                  </NavLink>
                  <NavLink
                    to="/doctors"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    👨‍⚕️ View Doctors
                  </NavLink>
                  <NavLink
                    to="/book-appointment"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    📅 Book Appointment
                  </NavLink>
                </div>
              </details>
            </div>
          </div>
        </header>

        <main className="p-4">
          <Routes>
            <Route path="/add-patient" element={<PatientForm />} />
            <Route path="/patients" element={<PatientList />} />
            <Route path="/add-doctor" element={<DoctorForm />} />
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/book-appointment" element={<AppointmentForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
