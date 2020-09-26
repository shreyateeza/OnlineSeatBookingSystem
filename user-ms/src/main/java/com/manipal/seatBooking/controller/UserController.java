package com.manipal.seatBooking.controller;

import java.util.ArrayList;
import java.util.List;

import com.manipal.seatBooking.model.AuthenticationResponse;
import com.manipal.seatBooking.model.Seat;
import com.manipal.seatBooking.model.SeatsWrapper;
import com.manipal.seatBooking.model.User;
import com.manipal.seatBooking.model.UserSeat;
import com.manipal.seatBooking.repository.UserRepository;
import com.manipal.seatBooking.service.JwtUtil;
import com.manipal.seatBooking.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private UserRepository repository;

    private String extractUsername(String jwt) {
        return jwtUtil.extractUsername(jwt.substring(7));
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody final User user) {
        final User existingUser = service.findByName(user.getUsername());
        if (existingUser == null) {
            service.registerUser(user);
            return "User Registered";
        } else {
            return "Username already exists";
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody User user) throws Exception {

        try {
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        final UserDetails userDetails = service.loadUserByUsername(user.getUsername());

        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

    @PutMapping("/profile")
    public String changePassword(@RequestBody User user, @RequestHeader("Authorization") String jwt) {
        String username = extractUsername(jwt);
        User existingUser = service.findByName(username);
        if (existingUser == null) {
            return "Invalid Request";
        }
        existingUser.setPassword(user.getPassword());
        existingUser.setAddress(user.getAddress());
        existingUser.setMobile(user.getMobile());
        service.updateProfile(existingUser);
        return "Updated";
    }

    @GetMapping("/profile")
    public ResponseEntity<User> getUserDetails(@RequestHeader("Authorization") String jwt) {
        String username = extractUsername(jwt);
        User existingUser = service.findByName(username);
        return new ResponseEntity<User>(existingUser, HttpStatus.OK);
    }

    @GetMapping("/seat")
    public ResponseEntity<Seat[]> searchSeats(@RequestParam(name = "office") String office) {
        return restTemplate.getForEntity("http://seat-microservice/seat/" + office, Seat[].class);
    }

    @PutMapping("/seat")
    public ResponseEntity<List<UserSeat>> bookSeat(@RequestBody User seatList,
            @RequestHeader("Authorization") String jwt) {
        String username = extractUsername(jwt);
        User user = service.findByName(username);
        user.addSeats(seatList.getSeats());
        service.updateProfile(user);

        List<Seat> seats = new ArrayList<Seat>();
        for (UserSeat seat : seatList.getSeats()) {
            seats.add(new Seat(seat, username));
        }
        restTemplate.put("http://seat-microservice/seat", seats);
        return new ResponseEntity<List<UserSeat>>(seatList.getSeats(), HttpStatus.OK);
    }
}
