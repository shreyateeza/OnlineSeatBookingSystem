package com.manipal.seatBooking.seats.model;

import java.util.List;

public class Floor {
	private List<Seats> seats;
	public Floor() {}
	public Floor(List<Seats> seats) {
		super();
		this.seats = seats;
	}

	public List<Seats> getSeats() {
		return seats;
	}

	public void setSeats(List<Seats> seats) {
		this.seats = seats;
	}
	
}
