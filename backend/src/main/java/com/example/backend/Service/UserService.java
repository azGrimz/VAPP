package com.example.backend.Service;

import com.example.backend.DTO.UserDTO;
import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    @Autowired
    private PasswordEncoder passwordEncoder;

    public ResponseEntity<User> editUser(String userId,UserDTO userDTO) {
        Optional<User> optionalUserDetails = userRepository.findById(userId);

        if(optionalUserDetails.isPresent()){
            User userExisting = optionalUserDetails.get();
            if(userDTO.name() != null && userDTO.name().isEmpty()){
                userExisting.setName(userDTO.name());
                System.out.println(userDTO.name());
            }
            if(userDTO.lastname() != null && userDTO.lastname().isEmpty()){
                userExisting.setLastname(userDTO.lastname());
            }
            if(userDTO.number() != null && userDTO.number().isEmpty()){
                userExisting.setNumber(userDTO.lastname());
            }
            if(userDTO.password() != null && userDTO.password().isEmpty()){
                userExisting.setPassword(passwordEncoder.encode(userDTO.password()));
            }
            if(userDTO.email() != null && userDTO.email().isEmpty()){
                userExisting.setEmail(userDTO.email());
            }
            User updateUser = userRepository.save(userExisting);
            return ResponseEntity.status(HttpStatus.CREATED).body(updateUser);
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }


    }

}
