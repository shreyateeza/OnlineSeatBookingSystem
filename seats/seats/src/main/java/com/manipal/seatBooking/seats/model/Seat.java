package com.manipal.seatBooking.seats.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
@Document(collection = "seats")
public class Seat {

	@Id
	private String id;

	private int seatNo;
	private int floor;
	private String office; 
	private List<BookingInfo> bookingInfo;
	
	public Seat(int seatNo, int floor, String office, List<BookingInfo> bookingInfo) {
		this.seatNo = seatNo;
		this.floor = floor;
		this.office = office;
		this.bookingInfo = bookingInfo;
	}

	public Seat() {
	}

	public int getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(int seatNo) {
		this.seatNo = seatNo;
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

	public List<BookingInfo> getbookingInfo() {
		return bookingInfo;
	}

	public void setbookingInfo(List<BookingInfo> bookingInfo) {
		this.bookingInfo = bookingInfo;
	}
}
