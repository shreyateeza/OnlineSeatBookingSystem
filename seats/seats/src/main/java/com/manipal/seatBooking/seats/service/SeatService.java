package com.manipal.seatBooking.seats.service;

import com.manipal.seatBooking.seats.model.BookingInfo;
import com.manipal.seatBooking.seats.model.Seat;
import com.manipal.seatBooking.seats.repository.SeatRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeatService {
    
    @Autowired
    private SeatRepository repository;
    
    public List<Seat> getSeatsByTime(Date startDateTime, Date endDateTime) {
    	List<Seat> all = repository.findAll();
    	List<Seat> result = new ArrayList<Seat>();
    	boolean flag = false;
    	for(Seat s: all) {
    		flag=false;
    		List<BookingInfo> bookingList = s.getbookingInfo();
    		for(BookingInfo b : bookingList) {
    			if(b.getStartDate() == startDateTime && b.getEndDate() ==endDateTime) {
    				if(b.getStatus().equals("booked"))
    					flag=true;
    			}
    		}
    		if(flag==false)
    			result.add(s);
    	}
    	return result;
    }
    
    public boolean bookAppointment(String username, String seatId, Date startDateTime, Date endDateTime){
    	Optional<Seat> seatOptional = repository.findById(seatId);
    	if (seatOptional.isPresent()) {
    		Seat seatReq = seatOptional.get();
			List<BookingInfo> bookingList = seatReq.getbookingInfo();
			for(BookingInfo b : bookingList) {
				if(b.getStartDate() == startDateTime && b.getEndDate() ==endDateTime) {
					if(b.getStatus().equals("booked"))
						return false;
				}
			}
			bookingList.add(new BookingInfo(startDateTime, endDateTime, username,"pending"));
			seatReq.setbookingInfo(bookingList);
			repository.save(seatReq);
			return true;
    	}
    	return false;
    }
}
