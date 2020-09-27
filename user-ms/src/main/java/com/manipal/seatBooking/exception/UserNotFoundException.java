package com.manipal.seatBooking.exception;

@SuppressWarnings("serial")
public class UserNotFoundException extends RuntimeException  {
	public UserNotFoundException (String username) {
	    super("Could not find user" + username);
	  }
}