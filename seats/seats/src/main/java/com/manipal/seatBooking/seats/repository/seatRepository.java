package com.manipal.seatBooking.seats.repository;

import com.manipal.seatBooking.seats.model.Seats;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface seatRepository extends MongoRepository<Seats, String> {
    
}
