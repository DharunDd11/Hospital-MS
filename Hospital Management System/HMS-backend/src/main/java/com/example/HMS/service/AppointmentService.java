package com.example.HMS.service;

import com.example.HMS.entity.Appointment;
import com.example.HMS.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    // Book appointment only if doctor is available
    public Appointment bookAppointment(Appointment appointment) {
        LocalDate date = appointment.getAppointmentDate();
        int doctorId = appointment.getDoctor().getId();

        boolean isAvailable = !appointmentRepository.existsByDoctorIdAndAppointmentDate(doctorId, date);
        if (!isAvailable) {
            throw new RuntimeException("Doctor is not available on " + date);
        }

        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }
}
