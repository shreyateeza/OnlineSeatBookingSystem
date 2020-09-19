package com.manipal.seatBooking.controller;

import java.util.ArrayList;
import java.util.List;

import com.manipal.seatBooking.model.AuthenticationResponse;
import com.manipal.seatBooking.model.User;
import com.manipal.seatBooking.service.JwtUtil;
import com.manipal.seatBooking.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
	private AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public String registerUser(@RequestBody final User user) 
    {
        final User existingUser = service.findByName(user.getUsername());
        if(existingUser==null)
        {
            service.registerUser(user);
            return "User Registered";
        }
        else 
        {
            return "Username already exists";
        }
    }    

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody User user) throws Exception {

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
			);
		}
		catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}


		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(user.getUsername());

		final String jwt = jwtUtil.generateToken(userDetails);

		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}

    @PutMapping("details-change")
    public String changePassword(@RequestBody User user, @RequestHeader("Authorization") String jwt)
    {
        jwt = jwt.substring(7);
        String username = jwtUtil.extractUsername(jwt);
        User existingUser = service.findByName(username); 
        if (existingUser == null){
            return "Invalid Request";
        }
        existingUser.setPassword(user.getPassword());
        existingUser.setAddress(user.getAddress());
        existingUser.setMobile(user.getMobile());
        service.updateProfile(existingUser);

        return "Updated";
    }
}
