package com.manipal.seatBooking.seats.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.manipal.seatBooking.seats.exception.SeatNotFoundException;

public class SeatNotFoundAdvice {
	@ResponseBody
	@ExceptionHandler(SeatNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	String telephoneNotFoundHandler(SeatNotFoundException ex) {
		return ex.getMessage();
	}
}
