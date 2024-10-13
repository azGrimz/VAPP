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

import java.util.List;
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


    @GetMapping("getAllFeedbacks")
    public ResponseEntity<List<Feedback>> getAllFeedbacks() {
        List<Feedback> feedbacks = feedbackService.getAllFeedbacks();
        return ResponseEntity.ok(feedbacks); // Retorna HTTP 200 OK com a lista de feedbacks
    }

    // Novo endpoint para buscar feedbacks de um usuário específico
    @GetMapping("getFeedbacksByUser/{userId}")
    public ResponseEntity<List<Feedback>> getFeedbacksByUserId(@PathVariable String userId) {
        List<Feedback> feedbacks = feedbackService.getFeedbacksByUserId(userId);
        if (feedbacks.isEmpty()) {
            return ResponseEntity.noContent().build(); // Retorna HTTP 204 se não houver feedbacks
        }
        return ResponseEntity.ok(feedbacks);
    }

    @DeleteMapping(value = "deleteFeedback/{id}")
    public ResponseEntity<Boolean> deleteFeedback(@PathVariable String id ){
        return feedbackService.deleteFeedback(id);
    }

}
