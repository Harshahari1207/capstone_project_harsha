package com.wipro.capstone.UserService.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.capstone.UserService.model.User;
import com.wipro.capstone.UserService.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = userService.getAllUsers();
		return ResponseEntity.ok(users);
	}

	@CrossOrigin(origins = "http://localhost:5173")
	@PostMapping("/register")
	public ResponseEntity<User> register(@RequestBody User user) {
		return new ResponseEntity<>(userService.registerUser(user), HttpStatus.CREATED);
	}

	@CrossOrigin(origins = "http://localhost:5173")
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {
		User foundUser = userService.findUserByUsername(user.getUsername());
		if (foundUser != null) {
			String token = "abc"; // Placeholder for JWT or session token generation
			return ResponseEntity.ok(Collections.singletonMap("token", token));
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}

	@CrossOrigin(origins = "http://localhost:5173")
	@GetMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User user = userService.getUserById(id);
		return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
	}

	@CrossOrigin(origins = "http://localhost:5173")
	@PutMapping("/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
		return ResponseEntity.ok(userService.updateUser(id, userDetails));
	}
}
