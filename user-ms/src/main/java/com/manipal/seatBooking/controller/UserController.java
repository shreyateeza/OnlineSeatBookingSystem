package com.manipal.seatBooking.controller;

import java.util.ArrayList;
import java.util.List;

import com.manipal.seatBooking.model.User;
import com.manipal.seatBooking.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("register")
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

    @PostMapping("login")
    public String login(@RequestBody final User user)
    {
        final User existingUser = service.findByName(user.getUsername());

        if(existingUser == null)
        {
            return "Invalid Username";
        } 
        else if(user.getPassword().equals(existingUser.getPassword()))
        {
            return "Logged in";
        }
        else 
        {
            return "Wrong Password";
        }

    }

}
