package com.example.backend.Controller;


import com.example.backend.DTO.UserDTO;
import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepository;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Controller
@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;


    @PutMapping("editUser/{userId}")
    public ResponseEntity<User> editUser(@PathVariable String userId, UserDTO userDTO){
        Optional<User> userOptional =userRepository.findById(userId);
        if(userOptional.isPresent()){
            User user = userOptional.get();
            return userService.editUser(userId,userDTO);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
