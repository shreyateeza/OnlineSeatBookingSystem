package com.manipal.seatBooking.model;

import java.util.List;

public class Seat {
    private int seatNo; 
    private int floor;
    private String office; 
    private List<BookingInfo> bookingInfo;

    public Seat() {}

    public int getSeatNo() {
        return seatNo;
    }

    public void setSeatNo(int seatNo) {
        this.seatNo = seatNo;
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
        this.bookingInfo = bookingInfo;
    }
}
