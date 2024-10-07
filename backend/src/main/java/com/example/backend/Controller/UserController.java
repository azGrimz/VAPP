package com.example.backend.Controller;


import com.example.backend.DTO.UserDTO;
import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepository;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RestController
@RequestMapping("user/")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;


    @PutMapping("/editUser/{userId}")
    public ResponseEntity<User> editUser(@PathVariable String userId, @RequestBody UserDTO userDTO) {
        // Certifique-se que o ID do usuário está sendo atribuído corretamente
        userDTO.setId(userId);  // Atribuindo o ID da URL ao DTO

        Optional<User> userOptional = userRepository.findById(userId);

        if (userOptional.isPresent()) {
            // Chamando o serviço para editar o usuário
            return ResponseEntity.ok(userService.editUser(userDTO));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/deleteUser/{userId}")
    public void deleteUserById(@PathVariable  String userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            userRepository.deleteById(userId);
        } else {
            throw new UserNotFoundException("User not found with id: " + userId);
        }
    }

    public class UserNotFoundException extends RuntimeException {
        public UserNotFoundException(String message) {
            super(message);
        }
    }


}
