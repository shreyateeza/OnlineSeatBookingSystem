package com.manipal.seatBooking.controller;

import com.manipal.seatBooking.model.BookingInfo;
import com.manipal.seatBooking.model.Seat;
import com.manipal.seatBooking.model.User;
import com.manipal.seatBooking.model.UserSeat;
import com.manipal.seatBooking.service.UserService;
import com.netflix.discovery.converters.Auto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    UserService service;

    @Autowired
    RestTemplate restTemplate;
    
    @PostMapping("/seat")
    public String addSeat(@RequestBody Seat seat)
    {
        return restTemplate.postForObject("http://seat-microservice/seat", seat, String.class);
    }

    @DeleteMapping("/seat/{seatNumber}")
    public String deleteSeat(@PathVariable int seatNumber)
    {
        restTemplate.delete("http://seat-microservice/seat/"+seatNumber);
        return "Deleted";
    }

    @PutMapping("/seat")
    public String updateStatus(@RequestBody Seat seat)
    {
        User user = null;
        for(BookingInfo bookingInfo: seat.getBookingInfo())
        {
            String username = bookingInfo.getUsername();
            user = service.findByName(username);
            for (UserSeat userSeat: user.getSeats())
            {
                if(userSeat.getStartDate().equals(bookingInfo.getStartDate()) && seat.getSeatNumber() == userSeat.getSeatNumber())
                    userSeat.setStatus(bookingInfo.getStatus()); 
            }
        }
        service.updateProfile(user);
        restTemplate.put("http://seat-microservice/admin/seat",seat);
        return "Updated";
    }

}
