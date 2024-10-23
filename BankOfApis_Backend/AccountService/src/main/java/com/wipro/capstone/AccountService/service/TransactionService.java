package com.wipro.capstone.AccountService.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.capstone.AccountService.models.Account;
import com.wipro.capstone.AccountService.models.Transaction;
import com.wipro.capstone.AccountService.repository.AccountRepository;
import com.wipro.capstone.AccountService.repository.TransactionRepository;

import jakarta.transaction.Transactional;

@Service
public class TransactionService {

	@Autowired
	private TransactionRepository transactionRepository;

	@Autowired
	private AccountRepository accountRepository;

	@Transactional
	public String transferMoney(Long userId, Long frmAccountId, Long toAccountId, Integer amount,
			String transactionType) {

		Account frmAccount = accountRepository.findById(frmAccountId)
				.orElseThrow(() -> new RuntimeException("From Account not found"));

		Account toAccount = accountRepository.findById(toAccountId)
				.orElseThrow(() -> new RuntimeException("To Account not found"));

		if (frmAccount.getBalance() < amount) {
			throw new RuntimeException("Insufficient balance in the account");
		}

		frmAccount.setBalance(frmAccount.getBalance() - amount);
		toAccount.setBalance(toAccount.getBalance() + amount);

		accountRepository.save(frmAccount);
		accountRepository.save(toAccount);

		Transaction transaction = new Transaction();
		transaction.setFrmAccountId(frmAccountId);
		transaction.setToAccountId(toAccountId);
		transaction.setAmount(amount);
		transaction.setUserId(userId);
		transaction.setTransactionType(transactionType);
		transaction.setDateTransaction(LocalDate.now());

		transactionRepository.save(transaction);

		return "Transaction successful";
	}

	public List<Transaction> getTransactionsByUserId(Long userId) {
		return transactionRepository.findByUserId(userId);
	}
}
