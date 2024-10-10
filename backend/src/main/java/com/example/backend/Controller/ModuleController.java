package com.example.backend.Controller;


import com.example.backend.DTO.ModuleDTO;
import com.example.backend.Model.Module;
import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepository;
import com.example.backend.Service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RestController
@RequestMapping("moduleAPI/")
public class ModuleController {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModuleService moduleService;

   @PostMapping("createRating/{userId}")
   private ResponseEntity<Module> createRating(@PathVariable String userId, @RequestBody ModuleDTO moduleDTO){
       Optional<User> userExisting = userRepository.findById(userId);
       if(userExisting.isPresent()){
           moduleDTO.setUserId(userId);
           return moduleService.insertRating(moduleDTO);
       }else{
           return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Se o usuário não for encontrado
       }
   }



}
