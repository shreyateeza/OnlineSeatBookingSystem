package com.manipal.seatBooking.seats.repository;

import java.util.List;

import com.manipal.seatBooking.seats.model.Seat;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatRepository extends MongoRepository<Seat, String> {
    public Seat findBySeatNumber(int seatNumber);
    public List<Seat> findByOffice(String office);
    public void deleteBySeatNumber(int seatNumber);

    @Query("{'bookingInfo.status':?0}")
    public List<Seat> findByStatus(String status);
}
