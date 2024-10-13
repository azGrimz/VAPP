package com.example.backend.Repository;

import com.example.backend.Model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, String > {
    List<Feedback> findByUserId(String userId);
}
