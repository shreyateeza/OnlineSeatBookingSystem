package com.manipal.seatBooking.seats.model;

import java.util.Date;

public class BookingElement {
	private Date start;
	private Date end;
	private int user_id;
	public BookingElement() {}
	public BookingElement(Date start, Date end, int user_id) {
		super();
		this.start = start;
		this.end = end;
		this.user_id = user_id;
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
}
