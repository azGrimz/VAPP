package com.example.backend.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "feedback")
public class Feedback {


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String descricao;

    private Date data;

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
