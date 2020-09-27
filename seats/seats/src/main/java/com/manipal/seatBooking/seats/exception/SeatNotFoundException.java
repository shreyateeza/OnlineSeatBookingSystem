package com.manipal.seatBooking.seats.exception;

@SuppressWarnings("serial")
public class SeatNotFoundException extends RuntimeException  {
	public SeatNotFoundException (int seatId) {
	    super("Could not find user" + seatId);
	  }
}
