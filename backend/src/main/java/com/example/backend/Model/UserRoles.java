package com.example.backend.Model;

public enum UserRoles {

    ADMIN("admin"),

    USER("user");



    private String role;
    UserRoles(String role){
        this.role = role;
    }

    public String getRole(){
        return role;
    }

    public String toString(){
        return this.role;
    }

}
