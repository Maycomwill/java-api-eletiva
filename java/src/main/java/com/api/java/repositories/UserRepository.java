package com.api.java.repositories;


import com.api.java.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    public User getUserByEmail(String email);
}
