package com.manipal.spring.mockito.api;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import java.util.ArrayList;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.manipal.seatBooking.seats.model.BookingInfo;
import com.manipal.seatBooking.seats.model.Seat;
import com.manipal.seatBooking.seats.repository.SeatRepository;
import com.manipal.seatBooking.seats.service.SeatService;

class Tests {
	
    @Mock
    private SeatRepository repository;
    
    @InjectMocks
    private SeatService service;
    
    @BeforeEach
    void setUp() throws Exception {
    	MockitoAnnotations.initMocks(this);
    }

    
	@Test
	public void getAllSeatsTest() throws ParseException {
		
		ArrayList<Seat> a1 = new ArrayList<Seat>();
		ArrayList<BookingInfo> a2 = new ArrayList<BookingInfo>();
		
		
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");
		java.util.Date d1 = df.parse("12-10-2011"); 
		java.util.Date d2 = df.parse("01-01-1900"); 
		BookingInfo b1= new BookingInfo(d1,d2,"ajanta","pending");
		BookingInfo b2= new BookingInfo(d1,d2,"shreya","pending");
		a2.add(b1);
		a2.add(b2);
		
		Seat s1 = new Seat(4,5,"Telstra",a2);
		Seat s2 = new Seat(3,7,"Telstra",a2);
		
		a1.add(s1);
		a1.add(s2);
		
		when(repository.findAll()).thenReturn(a1);
		assertEquals(2,service.getAllSeats().size());

	}
	
	@Test
	public void getSeatByOfficeTest() throws ParseException {
		String office = "Telstra";
		
		ArrayList<Seat> a1 = new ArrayList<Seat>();
		ArrayList<BookingInfo> a2 = new ArrayList<BookingInfo>();
		
		
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");
		java.util.Date d1 = df.parse("12-10-2011"); 
		java.util.Date d2 = df.parse("01-01-1900"); 
		BookingInfo b1= new BookingInfo(d1,d2,"ajanta","pending");
		BookingInfo b2= new BookingInfo(d1,d2,"shreya","pending");
		a2.add(b1);
		a2.add(b2);
		
		Seat s1 = new Seat(4,5,"Telstra",a2);
		Seat s2 = new Seat(3,7,"Telstra",a2);
		
		a1.add(s1);
		a1.add(s2);
		
		when(repository.findByOffice(office)).thenReturn(a1);
		assertEquals(2,service.getByOffice(office).size());

	}
	
	@Test
	public void getSeatByStatusTest() throws ParseException {
		String office = "pending";
		
		ArrayList<Seat> a1 = new ArrayList<Seat>();
		
		ArrayList<BookingInfo> a2 = new ArrayList<BookingInfo>();
		ArrayList<BookingInfo> a3 = new ArrayList<BookingInfo>();
		
		
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");
		java.util.Date d1 = df.parse("12-10-2011"); 
		java.util.Date d2 = df.parse("01-01-1900"); 
		
		BookingInfo b1= new BookingInfo(d1,d2,"ajanta","pending");
		BookingInfo b2= new BookingInfo(d1,d2,"shreya","pending");

		a2.add(b1);
		a3.add(b2);
		
		Seat s1 = new Seat(4,5,"Telstra",a2);
		Seat s2 = new Seat(3,7,"Telstra",a3);
		
		a1.add(s1);
		a1.add(s2);
		
		when(repository.findByStatus(office)).thenReturn(a1);
		
		assertEquals(2,service.getByStatus(office).size());

	}
	
	@Test
	public void addSeatTest() throws ParseException {
		
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");
		java.util.Date d1 = df.parse("12-10-2011"); 
		java.util.Date d2 = df.parse("01-01-1900"); 
		
		ArrayList<BookingInfo> a2 = new ArrayList<BookingInfo>();
		BookingInfo b1= new BookingInfo(d1,d2,"ajanta","pending");
		a2.add(b1);
		
		Seat seat = new Seat(4,5,"Telstra",a2);
		service.addSeat(seat);
		
	    verify(repository,times(1)).save(seat);
	}
	
	@Test
	public void updateSeatTest() throws ParseException {
		
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");
		java.util.Date d1 = df.parse("12-10-2011"); 
		java.util.Date d2 = df.parse("01-01-1900"); 
		
		ArrayList<BookingInfo> a2 = new ArrayList<BookingInfo>();
		BookingInfo b1= new BookingInfo(d1,d2,"ajanta","pending");
		a2.add(b1);
		
		Seat seat = new Seat(4,5,"Telstra",a2);
		service.updateSeat(seat);
		
	    verify(repository,times(1)).save(seat);
	}
	
	
	@Test
	public void deleteSeatTest() throws ParseException {
		int seatNumber = 4;
		
		DateFormat df = new SimpleDateFormat("MM-dd-yyyy");
		java.util.Date d1 = df.parse("12-10-2011"); 
		java.util.Date d2 = df.parse("01-01-1900"); 
		
		ArrayList<BookingInfo> a2 = new ArrayList<BookingInfo>();
		BookingInfo b1= new BookingInfo(d1,d2,"ajanta","pending");
		a2.add(b1);
		
		Seat seat = new Seat(4,5,"Telstra",a2);
		repository.save(seat);
		service.deleteSeat(seatNumber);
		
	    verify(repository,times(1)).deleteBySeatNumber(seatNumber);
	}
	


}






