package com.manipal.seatBooking.seats.controller;

import java.util.ArrayList;
import java.util.List;

import com.manipal.seatBooking.seats.model.BookingInfo;
import com.manipal.seatBooking.seats.model.Seat;
import com.manipal.seatBooking.seats.service.SeatService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SeatController {
    @Autowired
    private SeatService service; 

    @PutMapping("/seat")
    public void updateSeats(@RequestBody List<Seat> seats){
        for(Seat seat: seats)
        {
            Seat existingSeat = service.getSeatByNumber(seat.getSeatNumber());
            existingSeat.addBookingInfo(seat.getBookingInfo());
            service.updateSeat(existingSeat);
        }
    }

    @PutMapping("/admin/seat")
    public void adminUpdateSeats(@RequestBody Seat seat){

        Seat existingSeat = null;

        for(BookingInfo bookingInfo: seat.getBookingInfo())
        {
            existingSeat = service.getSeatByNumber(seat.getSeatNumber());
            for(BookingInfo existingBookingInfo: existingSeat.getBookingInfo()){
                if (bookingInfo.getStartDate().equals(existingBookingInfo.getStartDate()))
                    existingBookingInfo.setStatus(bookingInfo.getStatus());
            }
        }
        service.updateSeat(existingSeat); 
    }

    @GetMapping("/seat/{office}")
    public ResponseEntity<List<Seat>> getSeatsByOffice(@PathVariable String office){
        List<Seat> seatList = new ArrayList<Seat>();
        seatList = service.getByOffice(office);
        return new ResponseEntity<List<Seat>>(seatList, HttpStatus.OK);
    }

    @PostMapping("/seat")
    public String addSeat(@RequestBody Seat seat){
        if (service.getSeatByNumber(seat.getSeatNumber()) == null)
        {
            service.addSeat(seat);
            return "Seat added Successfully";
        }
        else 
            return "Seat Number already exists";
    }

    @DeleteMapping("/seat/{seatNumber}")
    public void deleteSeat(@PathVariable int seatNumber)
    {
        service.deleteSeat(seatNumber);
    }
}
