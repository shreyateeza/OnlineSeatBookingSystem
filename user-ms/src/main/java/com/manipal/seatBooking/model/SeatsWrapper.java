package com.manipal.seatBooking.model;

import java.util.List;

public class SeatsWrapper {
    private List<Seat> seatList;

    public SeatsWrapper(){}

    public SeatsWrapper(List<Seat> seatList) {
        this.seatList = seatList;
    }

    public List<Seat> getSeatList() {
        return seatList;
    }

    public void setSeatList(List<Seat> seatList) {
        this.seatList = seatList;
    }
}
