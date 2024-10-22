package com.wipro.capstone.AccountService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.capstone.AccountService.models.Account;
import com.wipro.capstone.AccountService.service.AccountService;

@RestController
@RequestMapping("/accounts")
@CrossOrigin(origins = "*")
public class AccountController {

	@Autowired
	private AccountService accountService;

	@PostMapping("/register")
	public ResponseEntity<Account> registerAccount(@RequestBody Account account) {
		Account createdAccount = accountService.createAccount(account);
		return ResponseEntity.status(HttpStatus.CREATED).body(createdAccount);
	}

	@GetMapping("/user/{userId}")
	public ResponseEntity<List<Account>> getAccountsByUserId(@PathVariable Long userId) {
		List<Account> accounts = accountService.getAccountsByUserId(userId);
		if (accounts.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
		return ResponseEntity.ok(accounts);
	}
}
