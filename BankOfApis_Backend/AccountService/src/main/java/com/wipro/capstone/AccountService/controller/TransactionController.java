package com.wipro.capstone.AccountService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.capstone.AccountService.models.Transaction;
import com.wipro.capstone.AccountService.service.TransactionService;

@RestController
@RequestMapping("/transactions")
@CrossOrigin(origins = "*")
public class TransactionController {

	@Autowired
	private TransactionService transactionService;

	@PostMapping("/transfer")
	public ResponseEntity<String> transferMoney(@RequestBody Transaction request) {
		String result = transactionService.transferMoney(request.getUserId(), request.getFrmAccountId(),
				request.getToAccountId(), request.getAmount(), request.getTransactionType());
		return ResponseEntity.ok(result);
	}

	@GetMapping("/account/{accountId}")
	public ResponseEntity<List<Transaction>> getTransactions(@PathVariable Long accountId) {
		List<Transaction> transactions = transactionService.getTransactionsByAccount(accountId);
		return ResponseEntity.ok(transactions);
	}
}
