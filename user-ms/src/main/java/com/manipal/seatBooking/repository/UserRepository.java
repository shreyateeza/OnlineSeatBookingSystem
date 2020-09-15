package com.manipal.seatBooking.repository;

import java.util.List;

import com.manipal.seatBooking.model.*;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String>{
    public User findByUsername(String username);
}
