package com.example.backend.Controller;


import com.example.backend.DTO.AuthDTO;
import com.example.backend.DTO.LoginDTO;
import com.example.backend.DTO.RegisterDTO;
import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepository;
import com.example.backend.Security.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    TokenService tokenService;
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Validated AuthDTO data){
        var userNamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());
        var auth = this.authenticationManager.authenticate(userNamePassword);
        var user = (User) auth.getPrincipal();
        var token = tokenService.generateToken((User) auth.getPrincipal());
        var id = user.getId();
        return  ResponseEntity.ok(new LoginDTO(token,id));
    }

    //@PostMapping("/registerAdmin")
    //public ResponseEntity registerAdmin(@RequestBody @Validated RegisterDTO data) {
    //if(this.userRepository.findByEmail(data.email()) != null )return ResponseEntity.badRequest().build();
    //String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
    //User newUser= new User(data.login(),encryptedPassword,data.role(),data.email());
    //this.userRepository.save(newUser);
    //return ResponseEntity.ok().build();
//
    //}

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Validated RegisterDTO data) {
        if(this.userRepository.findByEmail(data.email()) != null )return ResponseEntity.badRequest().build();
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        User newUser= new User(data.email(),encryptedPassword,data.name(),data.lastname(),data.number());
        this.userRepository.save(newUser);
        return ResponseEntity.ok().build();

    }

}
