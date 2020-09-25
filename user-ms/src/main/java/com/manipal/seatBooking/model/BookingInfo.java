package com.manipal.seatBooking.model;

import java.util.Date;

public class BookingInfo {
    private Date startDate;
    private Date endDate; 
    private String username;
    private String status;

    public BookingInfo() {
    }

    public BookingInfo(UserSeat seatInfo, String username){
        this.username = username;
        this.startDate = seatInfo.getStartDate();
        this.endDate = seatInfo.getEndDate();
        this.status = seatInfo.getStatus();
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
