package com.manipal.seatBooking.seats.service;

import java.util.List;

import com.manipal.seatBooking.seats.model.BookingElement;
import com.manipal.seatBooking.seats.model.Seat;

public interface ISeatService {
	String AddSeat(Seat seat);
	
	List<Seat> showAllSeats();
	
	String bookSeat(Seat seat);
	
	Seat getById(String id);
	
	void deleteSeatById(String id);
	
	//List<Seat> showBookingHistorySeat(String id);
	
	List<Seat> showPendingRequests();
	
	List<Seat> showBookedRequests();
	
	List<Seat> showUnBookedRequests();
	

}
