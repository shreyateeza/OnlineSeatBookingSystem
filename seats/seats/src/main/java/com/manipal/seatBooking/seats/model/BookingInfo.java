package com.manipal.seatBooking.seats.model;

import java.util.Date;

public class BookingInfo {
	private Date startDate;
	private Date endDate;
	private String username;
	private String status; 

	public BookingInfo() {
	}

	public BookingInfo(Date startDate, Date endDate, String username, String status) {
		super();
		this.startDate = startDate;
		this.endDate = endDate;
		this.username = username;
		this.status = status;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
