package com.example.demo.model.service;

import com.example.demo.model.entity.Booking;
import com.example.demo.model.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getUserBookings(Long userId) {
        return bookingRepository.findByUserId(userId);
    }

    public Booking createBooking(Booking booking) {
        // Logic check số phòng trống sẽ được implement thêm tại đây!
        return bookingRepository.save(booking);
    }

    public void cancelBooking(Long id) {
        bookingRepository.findById(id).ifPresent(booking -> {
            booking.setStatus(com.example.demo.model.entity.BookingStatus.CANCELLED);
            bookingRepository.save(booking);
        });
    }
}
