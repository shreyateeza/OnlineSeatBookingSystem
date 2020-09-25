package com.manipal.seatBooking.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Seat {
    private int seatNumber; 
    private int floor;
    private String office; 
    private List<BookingInfo> bookingInfo;

    public Seat() {}

    public Seat(UserSeat seat, String username) {
        this.seatNumber = seat.getSeatNumber();
        bookingInfo = new ArrayList<BookingInfo>(Arrays.asList(new BookingInfo(seat, username)));
    }

    public int getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNo(int seatNo) {
        this.seatNumber = seatNo;
    }

    public int getFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public String getOffice() {
        return office;
    }

    public void setOffice(String office) {
        this.office = office;
    }

    public List<BookingInfo> getBookingInfo() {
        return bookingInfo;
    }

    public void setBookingInfo(List<BookingInfo> bookingInfo) {
        this.bookingInfo = new ArrayList<BookingInfo> (bookingInfo);
    }
}
