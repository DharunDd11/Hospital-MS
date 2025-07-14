package com.example.HMS.repository;

import com.example.HMS.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.time.LocalDate;
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {
    boolean existsByDoctorIdAndAppointmentDate(int doctorId, LocalDate appointmentDate);
}

