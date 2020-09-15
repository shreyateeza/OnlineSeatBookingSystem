package com.manipal.seatBooking.seats.model;

import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
@Document(collection = "seats")
public class Seats {
    private int id;
    //tuple of Start date and time, End date and time, user_id
    List<BookingElement> bookingList; 
    
    public Seats() {}
    
	public Seats(int id) {
		super();
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<BookingElement> getBookingList() {
		return bookingList;
	}

	public void setBookingList(List<BookingElement> bookingList) {
		this.bookingList = bookingList;
	}
    
}
