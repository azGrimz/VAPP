package com.example.backend.Repository;

import com.example.backend.Model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, String > {
}
