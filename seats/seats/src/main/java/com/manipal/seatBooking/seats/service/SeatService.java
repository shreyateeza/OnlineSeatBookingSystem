package com.manipal.seatBooking.seats.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.manipal.seatBooking.seats.exception.SeatNotFoundException;
import com.manipal.seatBooking.seats.model.BookingInfo;
import com.manipal.seatBooking.seats.model.Seat;
import com.manipal.seatBooking.seats.repository.SeatRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeatService {
    
    @Autowired
    private SeatRepository repository;

    public Seat getSeatByNumber(int seatNumber){
		Seat s = repository.findBySeatNumber(seatNumber);
		if(s==null)
			throw new SeatNotFoundException(seatNumber);
		return s;
	}

    public void updateSeat(Seat seat){
        repository.save(seat);
    }

    public List<Seat> getByOffice(String office){
        return repository.findByOffice(office);
    }

    public void addSeat(Seat seat){
        repository.save(seat);
    }

    public void deleteSeat(int seatNumber){
        repository.deleteBySeatNumber(seatNumber);
    }

    public List<Seat> getByStatus(String status){
        List<Seat> seatList = new ArrayList<Seat>();
        seatList = repository.findByStatus(status);
        for (Seat seat:seatList)
        {
            Iterator<BookingInfo> itr = seat.getBookingInfo().iterator();
            while (itr.hasNext())
            {
                BookingInfo bookingInfo = itr.next();
                if (bookingInfo.getStatus().equals(status))
                    continue;
                else
                    seat.getBookingInfo().remove(bookingInfo);
            }
        }

        return seatList;
    }

    public List<Seat> getAllSeats(){
        return repository.findAll();
    }


}
