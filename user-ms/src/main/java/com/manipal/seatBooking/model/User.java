package com.manipal.seatBooking.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="user")
public class User {

	@Id
	private String id;

	private String username;
	private String password;
	private long mobile_number;
	private int door_no;
	private String city;
	private String state;
	private String country;

	public User(String username, String password) {
		this.username = username;
		this.password = password;
	}

	public User(String username, String password, long mobile_number, int door_no, String city, String state,
			String country) {
		super();
		this.username = username;
		this.password = password;
		this.mobile_number = mobile_number;
		this.door_no = door_no;
		this.city = city;
		this.state = state;
		this.country = country;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getMobile_number() {
		return mobile_number;
	}

	public void setMobile_number(long mobile_number) {
		this.mobile_number = mobile_number;
	}

	public int getDoor_no() {
		return door_no;
	}

	public void setDoor_no(int door_no) {
		this.door_no = door_no;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", mobile_number="
				+ mobile_number + ", door_no=" + door_no + ", city=" + city + ", state=" + state + ", country="
				+ country + "]";
	}	
	
}
