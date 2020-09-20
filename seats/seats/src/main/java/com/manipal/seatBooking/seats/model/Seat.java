package com.manipal.seatBooking.seats.model;



import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "seats")
public class Seat {
	    
	    @Id
	 	private String id;
	    private int floor;
	    private int office;
	    List<BookingElement> bookingList; 
	    
	    public Seat() {}
	    
		public Seat(String id) {
			super();
			this.id = id;
		}
		
		
		

		public Seat(String id, int floor, int office, List<BookingElement> bookingList) {
			super();
			this.id = id;
			this.floor = floor;
			this.office = office;
			this.bookingList = bookingList;
		}

		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}

		public List<BookingElement> getBookingList() {
			return bookingList;
		}

		public void setBookingList(List<BookingElement> bookingList) {
			this.bookingList = bookingList;
		}

		public int getFloor() {
			return floor;
		}

		public void setFloor(int floor) {
			this.floor = floor;
		}

		public int getOffice() {
			return office;
		}

		public void setOffice(int office) {
			this.office = office;
		}
		
		

}
