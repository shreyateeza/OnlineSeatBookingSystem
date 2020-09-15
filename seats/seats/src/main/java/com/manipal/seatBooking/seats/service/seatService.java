package com.manipal.seatBooking.seats.service;

import com.manipal.seatBooking.seats.repository.SeatRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeatService {
    
    @Autowired
    private SeatRepository repository;
}
