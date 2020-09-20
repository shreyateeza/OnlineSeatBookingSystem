package com.manipal.seatBooking.seats.model;

import java.util.List;

public class Office {
	List<Floor> floors;
	private String Location;
	public Office() {}
	public Office(List<Floor> floors, String location) {
		super();
		this.floors = floors;
		Location = location;
	}
	public List<Floor> getFloors() {
		return floors;
	}
	public void setFloors(List<Floor> floors) {
		this.floors = floors;
	}
	public String getLocation() {
		return Location;
	}
	public void setLocation(String location) {
		Location = location;
	}

	
	
}
