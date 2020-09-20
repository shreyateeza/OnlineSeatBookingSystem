package com.manipal.seatBooking.seats.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "seats")
public class Seats {
	int seat_id;
	int floor;
	int office;
	String status;
	LocalDateTime start;
	LocalDateTime end;
	int user_id;
	public Seats() {
		super();
	}
	public Seats(int seat_id, int floor, int office) {
		super();
		this.seat_id = seat_id;
		this.floor = floor;
		this.office = office;
	}
	
	
	public Seats(int seat_id, int floor, int office, String status) {
		super();
		this.seat_id = seat_id;
		this.floor = floor;
		this.office = office;
		this.status = status;
	}	
	
	public Seats(int seat_id, int floor, int office, String status, LocalDateTime start, LocalDateTime end,
			int user_id) {
		super();
		this.seat_id = seat_id;
		this.floor = floor;
		this.office = office;
		this.status = status;
		this.start = start;
		this.end = end;
		this.user_id = user_id;
	}
	
	public Seats(int seat_id, int floor, int office, String status, LocalDateTime start, LocalDateTime end) {
		super();
		this.seat_id = seat_id;
		this.floor = floor;
		this.office = office;
		this.status = status;
		this.start = start;
		this.end = end;
	}
	
	public int getSeat_id() {
		return seat_id;
	}
	public void setSeat_id(int seat_id) {
		this.seat_id = seat_id;
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
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public LocalDateTime getStart() {
		return start;
	}
	public void setStart(LocalDateTime start) {
		this.start = start;
	}
	public LocalDateTime getEnd() {
		return end;
	}
	public void setEnd(LocalDateTime end) {
		this.end = end;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	
	
	
	
}
