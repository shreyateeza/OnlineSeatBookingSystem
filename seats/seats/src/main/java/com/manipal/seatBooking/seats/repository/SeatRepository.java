package com.manipal.seatBooking.seats.repository;

import com.manipal.seatBooking.seats.model.Seat;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatRepository extends MongoRepository<Seat, String> {
    
}
