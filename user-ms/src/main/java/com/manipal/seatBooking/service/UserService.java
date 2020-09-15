package com.manipal.seatBooking.service;

import com.manipal.seatBooking.model.User;
import com.manipal.seatBooking.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User findByName(String name) {
        return repository.findByUsername(name);
    }

    public void registerUser(User user) {
        repository.save(user);
    }
}
