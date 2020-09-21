package com.manipal.seatBooking.model;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Document(collection = "user")
public class User implements UserDetails {

	/**
	 *
	 */
	private static final long serialVersionUID = -5006931368163678400L;

	@Id
	private String id;

	private String username;
	private String password;
	private String role; 
	private String mobile;
	private String address;
	private List<UserSeat> seats; 

	public User() {
	}

	
	public User(String username) {
		this.username = username;
	}

	public User(String username, String password, String mobile, String address) {
		this.username = username;
		this.password = password;
		this.mobile = mobile;
		this.address = address;
	}

	@Override
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	@Override
	public String toString() {
		return "User [address=" + address + ", id=" + id + ", mobile=" + mobile + ", password=" + password
				+ ", username=" + username + "]";
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Arrays.asList(new SimpleGrantedAuthority(role));
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public void addSeats(List<UserSeat> seats)
	{
		this.seats.addAll(seats);
	}

	public List<UserSeat> getSeats() {
		return seats;
	}

	public void setSeats(List<UserSeat> seats) {
		this.seats = seats;
	}
}
