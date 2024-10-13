package com.example.backend.DTO;

import com.example.backend.Model.UserRoles;

public record RegisterDTO(String email, String password, UserRoles role, String name, String lastname, String number) {
}
