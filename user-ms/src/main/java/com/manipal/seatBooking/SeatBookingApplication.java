package com.manipal.seatBooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SeatBookingApplication {

	public static void main(String[] args) {
		SpringApplication.run(SeatBookingApplication.class, args);
	}

}
