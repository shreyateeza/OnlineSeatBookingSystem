package com.manipal.seatBooking.seats.controller;

import com.manipal.seatBooking.seats.service.seatService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class seatController {
    @Autowired
    private seatService service; 
    
}
