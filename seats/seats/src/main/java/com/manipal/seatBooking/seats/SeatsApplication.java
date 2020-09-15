package com.manipal.seatBooking.seats;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SeatsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SeatsApplication.class, args);
	}

}
