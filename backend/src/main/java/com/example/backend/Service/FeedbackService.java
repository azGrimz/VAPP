package com.example.backend.Service;

import com.example.backend.DTO.FeedbackDTO;
import com.example.backend.DTO.ModuleDTO;
import com.example.backend.Model.Feedback;
import com.example.backend.Model.Module;
import com.example.backend.Model.User;
import com.example.backend.Repository.FeedbackRepository;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FeedbackService {

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private FeedbackRepository feedbackRepository;

    public ResponseEntity<Feedback> insertFeedback(FeedbackDTO feedbackDTO){
        Optional<User> existUser = userRepository.findById(feedbackDTO.getUserId());
        User user = existUser.get();
        Feedback feedback = new Feedback();
        feedback.setDescricao(feedbackDTO.getDescricao());
        feedback.setData(feedbackDTO.getData());
        feedback.setUser(user);

        Feedback createFeedback = feedbackRepository.save(feedback);

        return ResponseEntity.status(HttpStatus.CREATED).body(createFeedback);
    }
}
