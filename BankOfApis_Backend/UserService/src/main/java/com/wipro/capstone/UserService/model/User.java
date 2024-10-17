package com.wipro.capstone.UserService.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	// Properties for the User class
	private Long userId; // Primary key
	private String username; // Username of the user
	private String password; // Password for the user
	private String address; // Address of the user

	// Constructor
	public User(Long userId, String username, String password, String address) {
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.address = address;
	}

	// Default constructor
	public User() {
	}

	// Getters and Setters
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	// toString method for displaying user information
	@Override
	public String toString() {
		return "User{" + "userId=" + userId + ", username='" + username + '\'' + ", address='" + address + '\'' + '}';
	}
}
