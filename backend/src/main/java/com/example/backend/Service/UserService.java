package com.example.backend.Service;

import com.example.backend.DTO.UserDTO;
import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private PasswordEncoder passwordEncoder;

    public User editUser(UserDTO userDTO) {
        Optional<User> userOptional = userRepository.findById(userDTO.getId());

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            // Verificar se o email precisa ser alterado
            if (userDTO.getEmail() != null && !userDTO.getEmail().equals(user.getEmail())) {
                // Verifique se já existe outro usuário com o email fornecido
                Optional<User> userWithEmail = userRepository.findUserByEmail(userDTO.getEmail());
                if (userWithEmail.isPresent() && !userWithEmail.get().getId().equals(userDTO.getId())) {
                    throw new EmailAlreadyExistsException("Email already in use by another account");
                } else {
                    user.setEmail(userDTO.getEmail());  // Atualize o email
                }
            }

            // Atualize os outros campos permitidos
            if (userDTO.getName() != null) user.setName(userDTO.getName());
            if (userDTO.getLastname() != null) user.setLastname(userDTO.getLastname());
            if (userDTO.getNumber() != null) user.setNumber(userDTO.getNumber());

            // Atualizar senha, se fornecida
            if (userDTO.getPassword() != null) {
                // Certifique-se de criptografar a senha antes de salvar
                String encryptedPassword = passwordEncoder.encode(userDTO.getPassword());
                user.setPassword(encryptedPassword);
            }

            // Persistir a atualização
            return userRepository.save(user);
        } else {
            throw new UsernameNotFoundException("User not found with id: " + userDTO.getId());
        }
    }

    public class EmailAlreadyExistsException extends RuntimeException {
        public EmailAlreadyExistsException(String message) {
            super(message);
        }
    }
}
