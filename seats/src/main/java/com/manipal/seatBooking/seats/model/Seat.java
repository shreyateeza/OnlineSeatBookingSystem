package com.manipal.seatBooking.seats.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
@Document(collection = "seats")
public class Seat {

	@Id
	private String id;

	private int seatNumber;
	private int floor;
	private String office; 
	private List<BookingInfo> bookingInfo;
	
	public Seat(int seatNo, int floor, String office, List<BookingInfo> bookingInfo) {
		this.seatNumber = seatNo;
		this.floor = floor;
		this.office = office;
		this.bookingInfo = bookingInfo;
	}

	public Seat() {
	}

	public int getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNo(int seatNo) {
		this.seatNumber = seatNo;
	}

	public int getFloor() {
		return floor;
	}

	public void setFloor(int floor) {
		this.floor = floor;
	}

	public String getOffice() {
		return office;
	}

	public void setOffice(String office) {
		this.office = office;
	}

	public List<BookingInfo> getBookingInfo() {
		return bookingInfo;
	}

	public void setBookingInfo(List<BookingInfo> bookingInfo) {
		this.bookingInfo = bookingInfo;
	}

	public void addBookingInfo(List<BookingInfo> bookingInfo) {
		this.bookingInfo.addAll(bookingInfo);
	}
}
