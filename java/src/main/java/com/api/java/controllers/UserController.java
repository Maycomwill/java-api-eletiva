package com.api.java.controllers;

import com.api.java.DTO.LoginDTO;
import com.api.java.DTO.UserRegisterDTO;
import com.api.java.models.User;
import com.api.java.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired // Injeção de dependêcia, permite que o Spring controle as instância da classe AlunoRepository
    private UserRepository userRepository;
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity<User> register(@RequestBody UserRegisterDTO body){
        User user = new User();
        user.setName(body.name());
        user.setEmail(body.email());
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginDTO body){
        User user = null;
        try{
            user = userRepository.getUserByEmail(body.email());
        }catch (SecurityException e){
            throw new RuntimeException(e);
        }


        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @GetMapping
    public ResponseEntity<String> buscaNome(@RequestBody String id){
        User user = userRepository.getReferenceById(id);

        return ResponseEntity.status(HttpStatus.OK).body(user.getName());
    }
}
