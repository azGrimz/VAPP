package com.example.backend.DTO;


import lombok.Data;

import java.util.Date;

@Data
public class FeedbackDTO {
    private String id;
    private String descricao;
    private Date  data;
    private String userId;
    // Getters e Setters
    // Construtores
}