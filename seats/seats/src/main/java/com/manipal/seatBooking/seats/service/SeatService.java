package com.manipal.seatBooking.seats.service;

import java.util.List;

import com.manipal.seatBooking.seats.model.Seat;
import com.manipal.seatBooking.seats.repository.SeatRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeatService {
    
    @Autowired
    private SeatRepository repository;

    public Seat getSeatByNumber(int seatNumber){
        return repository.findBySeatNumber(seatNumber);
    }

    public void updateSeat(Seat seat){
        repository.save(seat);
    }

    public List<Seat> getByOffice(String office){
        return repository.findByOffice(office);
    }

    public void addSeat(Seat seat){
        repository.save(seat);
    }

    public void deleteSeat(int seatNumber){
        repository.deleteBySeatNumber(seatNumber);
    }


}
