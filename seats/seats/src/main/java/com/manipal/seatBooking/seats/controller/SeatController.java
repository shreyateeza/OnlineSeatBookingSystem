package com.manipal.seatBooking.seats.controller;

import com.manipal.seatBooking.seats.service.SeatService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SeatController {
    @Autowired
    private SeatService service; 
    
}
