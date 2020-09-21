package com.manipal.seatBooking.service;

import com.manipal.seatBooking.model.User;
import com.manipal.seatBooking.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService{

    @Autowired
    private UserRepository repository;

    public User findByName(String name) {
        return repository.findByUsername(name);
    }

    public void registerUser(User user) {
        repository.save(user);
    }
    
    public void updateProfile(User user) {
    	repository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByUsername(username); 
    }
}
