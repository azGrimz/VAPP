package com.example.backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "module")
public class Module {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String modulo;
    private double porcentagem;
    private String status;

    // Relacionamento muitos para um com a tabela users
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // Aqui usamos o nome da classe User para referenciar a tabela

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}