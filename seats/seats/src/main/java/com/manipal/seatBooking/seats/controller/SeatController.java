package com.manipal.seatBooking.seats.controller;

import com.manipal.seatBooking.seats.model.BookingElement;
import com.manipal.seatBooking.seats.model.Seat;
import com.manipal.seatBooking.seats.service.ISeatService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SeatController {
    @Autowired
    private ISeatService service; 
    
    @PostMapping("admin/addseat")
    public String add(@RequestBody Seat seat) {
    	return service.AddSeat(seat);
    }
    
    @GetMapping("admin/showseats")
    public List<Seat> showAll(){
    	return service.showAllSeats();
    }

    @GetMapping("admin/pending")
    public List<Seat> showPendingRequests(){
    	return service.showPendingRequests();
    }
    
    @GetMapping("admin/booking")
    public List<Seat> showBookedRequests(){
    	return service.showBookedRequests();
    }
    
    @GetMapping("user/avaliableseats")
    public List<Seat> showUnBookedRequests(){
    	return service.showUnBookedRequests();
    }
    
    @GetMapping("admin/{seatId}")
    public Seat getById(@PathVariable String id) {
    	return service.getById(id);
    }
    
    /*@GetMapping("admin/{seatId}")
    public Seat getPendingRequests(@PathVariable String id) {
    	return service.getById(id);
    }*/
    
    @DeleteMapping("admin/delete/{seatId}")
    public String deleteSeat(@PathVariable String id) {
    	service.deleteSeatById(id);
    	return("Seat successfully deleted!");
    }
}
