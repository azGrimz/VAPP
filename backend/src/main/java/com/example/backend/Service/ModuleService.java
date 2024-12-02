package com.example.backend.Service;

import com.example.backend.DTO.ModuleDTO;
import com.example.backend.Model.Module;
import com.example.backend.Model.User;
import com.example.backend.Repository.ModuleRepository;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ModuleService {

    @Autowired
    private ModuleRepository moduleRepository;

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<Module> insertRating(ModuleDTO moduleDTO){
        Optional<User> existUser = userRepository.findById(moduleDTO.getUserId());
        User user = existUser.get();
        Module module = new Module();
        module.setModule(moduleDTO.getModule());
        module.setPorcentagem(moduleDTO.getPorcentagem());
        module.setStatus(moduleDTO.getStatus());
        module.setUser(user);

        Module createRating = moduleRepository.save(module);

        return ResponseEntity.status(HttpStatus.CREATED).body(createRating);
    }

}
