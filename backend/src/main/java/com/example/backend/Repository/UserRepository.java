package com.example.backend.Repository;

import com.example.backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserRepository extends JpaRepository<User,String> {
    UserDetails findByEmail(String email);
}
