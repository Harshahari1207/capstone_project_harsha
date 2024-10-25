package com.wipro.capstone.UserService.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.capstone.UserService.model.User;
import com.wipro.capstone.UserService.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User registerUser(User user) {
		Optional<User> foundUser = userRepository.findByUsername(user.getUsername());
		if (foundUser.isPresent()) {
			throw new RuntimeException("Username already exists. Please choose a different username.");
		}
		return userRepository.save(user);
	}

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User findUserByUsername(String username) {
		return userRepository.findByUsername(username).orElse(null);
	}

	public User getUserById(Long id) {
		return userRepository.findById(id).orElse(null);
	}

	public User updateUser(Long id, User userDetails) {
		User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
		user.setUsername(userDetails.getUsername());
		user.setAddress(userDetails.getAddress());
		user.setPassword(userDetails.getPassword());
		return userRepository.save(user);
	}
}
