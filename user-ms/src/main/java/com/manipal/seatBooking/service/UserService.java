package com.manipal.seatBooking.service;

import java.util.List;

import com.manipal.seatBooking.model.User;
import com.manipal.seatBooking.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<User> findByName(String name) {
        return repository.findAll();
    }

    public void registerUser(User user) {
        repository.save(user);
    }
}
