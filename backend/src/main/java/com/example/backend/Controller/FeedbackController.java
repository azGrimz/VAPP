package com.example.backend.Controller;


import com.example.backend.DTO.FeedbackDTO;
import com.example.backend.Model.Feedback;
import com.example.backend.Model.User;
import com.example.backend.Repository.FeedbackRepository;
import com.example.backend.Repository.UserRepository;
import com.example.backend.Service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("feedbackAPI/")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("createFeedback/{userId}")
    public ResponseEntity<Feedback> createFeedback(@PathVariable String userId, @RequestBody FeedbackDTO feedbackDTO){
        Optional<User> userExist = userRepository.findById(userId);

        if(userExist.isPresent()){
            feedbackDTO.setUserId(userId);
            return feedbackService.insertFeedback(feedbackDTO);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Se o usuário não for encontrado
        }

    }

}
