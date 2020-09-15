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
public class userController {

    @Autowired
    private UserService service;

    @GetMapping("mapping")
    public ResponseEntity<List<User>> find(){
        List<User> user = new ArrayList<User>();
        user = service.findByName("bb");
        final ResponseEntity<List<User>> response = new ResponseEntity<List<User>>(user, HttpStatus.OK);
        return response;
    }

    @PostMapping("post")
    public void post(@RequestBody User user){
        service.registerUser(user);
    }
}
