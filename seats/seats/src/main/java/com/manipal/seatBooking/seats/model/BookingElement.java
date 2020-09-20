package com.manipal.seatBooking.seats.model;

import java.util.Date;

public class BookingElement {
	private Date start;
	private Date end;
	private int user_id;
	private String status;
	
	public BookingElement() {}
		
	public BookingElement(String status) {
		super();
		this.status = status;
	}

	public BookingElement(Date start, Date end, int user_id) {
		super();
		this.start = start;
		this.end = end;
		this.user_id = user_id;
	}
	
	
	
	public BookingElement(Date start, Date end, int user_id, String status) {
		super();
		this.start = start;
		this.end = end;
		this.user_id = user_id;
		this.status = status;
	}
	public Date getStart() {
		return start;
	}
	public void setStart(Date start) {
		this.start = start;
	}
	public Date getEnd() {
		return end;
	}
	public void setEnd(Date end) {
		this.end = end;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}
	
}
