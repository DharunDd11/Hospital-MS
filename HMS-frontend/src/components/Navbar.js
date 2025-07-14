import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserPlus, FaUsers, FaUserMd, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "bg-blue-700 text-white px-4 py-2 rounded font-medium transition flex items-center gap-2"
      : "bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 font-medium transition flex items-center gap-2";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap">
        <h1 className="text-2xl font-bold">🏥 Hospital Management</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-3">
          <NavLink to="/add-patient" className={linkStyle}>
            <FaUserPlus /> Add Patient
          </NavLink>
          <NavLink to="/patients" className={linkStyle}>
            <FaUsers /> View Patients
          </NavLink>
          <NavLink to="/add-doctor" className={linkStyle}>
            <FaUserPlus /> Add Doctor
          </NavLink>
          <NavLink to="/doctors" className={linkStyle}>
            <FaUserMd /> View Doctors
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-2">
          <NavLink to="/add-patient" className={linkStyle} onClick={toggleMenu}>
            <FaUserPlus /> Add Patient
          </NavLink>
          <NavLink to="/patients" className={linkStyle} onClick={toggleMenu}>
            <FaUsers /> View Patients
          </NavLink>
          <NavLink to="/add-doctor" className={linkStyle} onClick={toggleMenu}>
            <FaUserPlus /> Add Doctor
          </NavLink>
          <NavLink to="/doctors" className={linkStyle} onClick={toggleMenu}>
            <FaUserMd /> View Doctors
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
