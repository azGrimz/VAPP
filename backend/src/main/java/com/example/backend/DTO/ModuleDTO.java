package com.example.backend.DTO;

import lombok.Data;

@Data
public class ModuleDTO {

    private String id;
    private String module;
    private Integer porcentagem;
    private String status;
    private String userId;
}
