package com.manipal.seatBooking.seats.service;


import com.manipal.seatBooking.seats.model.BookingElement;
import com.manipal.seatBooking.seats.model.Seat;
import com.manipal.seatBooking.seats.repository.SeatRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeatService implements ISeatService {
    
    @Autowired
    private SeatRepository repo;
    
    public String AddSeat(Seat seat) {
    	repo.save(seat);
    	return "Seat added";
    }
    
    public List<Seat> showAllSeats(){
    	return repo.findAll();
    }
    
   public String bookSeat(Seat seat) {
    	Seat existingSeat = repo.findById(seat.getId()).orElse(null);
    	
    	try{
    		List<BookingElement> bookingList =  existingSeat.getBookingList();
    		BookingElement b = bookingList.get(bookingList.size()-1); 
    		
    		if(b.getStatus().equals("unbooked")) {
    			existingSeat.setBookingList(seat.getBookingList());
        		repo.save(existingSeat);
        		return "Booking Requested";
    		}
    		
    	}
    	catch(Exception e){
    		e.getMessage();
    	}
    	
    	return "Not Available";
    }

	@Override
	public void deleteSeatById(String id) {
		repo.deleteById(id);
		
	}

	/*@Override
	public List<Seat> showBookingHistorySeat(String id) {
		Seat seat = repo.findById(id).orElse(null);
		return seat.getBookingList();
	}*/

	@Override
	public List<Seat> showPendingRequests() {
		List <Seat> seats=repo.findAll();
		List <Seat> newList = new ArrayList<Seat>();
		for(Seat seat:seats) {
			List <BookingElement> bookings = seat.getBookingList();
			BookingElement b= bookings.get(bookings.size()-1);
			if(b.getStatus().equals("pending")) {
				newList.add(seat);
			}
		}
		return newList;
		
	}


	@Override
	public Seat getById(String id) {
		return repo.findById(id).orElse(null);
	}

	@Override
	public List<Seat> showBookedRequests() {
		List <Seat> seats=repo.findAll();
		List <Seat> newList = new ArrayList<Seat>();
		for(Seat seat:seats) {
			List <BookingElement> bookings = seat.getBookingList();
			BookingElement b= bookings.get(bookings.size()-1);
			if(b.getStatus().equals("booked")) {
				newList.add(seat);
			}
		}
		return newList;
	}

	@Override
	public List<Seat> showUnBookedRequests() {
		List <Seat> seats=repo.findAll();
		List <Seat> newList = new ArrayList<Seat>();
		for(Seat seat:seats) {
			List <BookingElement> bookings = seat.getBookingList();
			BookingElement b= bookings.get(bookings.size()-1);
			if(b.getStatus().equals("unbooked")) {
				newList.add(seat);
			}
		}
		return newList;
	}
}
