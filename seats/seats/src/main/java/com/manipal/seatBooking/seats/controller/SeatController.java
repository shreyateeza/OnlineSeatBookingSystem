package com.manipal.seatBooking.seats.controller;

import com.manipal.seatBooking.seats.service.SeatService;
import com.manipal.seatBooking.seats.model.Seat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class SeatController {
    @Autowired
    private SeatService service; 
    //two services
    //user seat search and user seat booking
    
    //can be extended to dates and seatNo also
    @GetMapping("seat-microservice/get-seat/from-time/{startDateTime}/to-time/{endDateTime}/") List<Seat> getSeatsByTime(@PathVariable Date startDateTime, @PathVariable Date endDateTime) {
    	return service.getSeatsByTime(startDateTime, endDateTime);
    }
    
    @PutMapping("seat-microservice/book-seat/user/{username}/seat/{seatId}/from-time/{startDateTime}/to-time/{endDateTime}/") boolean bookAppointment(@PathVariable String username, @PathVariable String seatId,@PathVariable Date startDateTime, @PathVariable Date endDateTime) {
    	return service.bookAppointment(username, seatId, startDateTime, endDateTime);
    }
    
}
