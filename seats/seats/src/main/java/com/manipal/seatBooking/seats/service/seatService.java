package com.manipal.seatBooking.seats.service;

import com.manipal.seatBooking.seats.repository.seatRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class seatService {
    
    @Autowired
    private seatRepository repository;
}
