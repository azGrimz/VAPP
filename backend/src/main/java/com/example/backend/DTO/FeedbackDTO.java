package com.example.backend.DTO;


import lombok.Data;

@Data
public class FeedbackDTO {
    private String id;
    private String modulo;
    private double porcentagem;
    private String status;
    private String userId;  // Referência ao ID do usuário

    // Getters e Setters
    // Construtores
}