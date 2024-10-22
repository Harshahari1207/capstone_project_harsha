package com.wipro.capstone.AccountService.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.capstone.AccountService.models.Account;
import com.wipro.capstone.AccountService.repository.AccountRepository;

@Service
public class AccountService {

	@Autowired
	private AccountRepository accountRepository;

	public Account createAccount(Account account) {
		return accountRepository.save(account);
	}

	public List<Account> getAccountsByUserId(Long userId) {
		return accountRepository.findByUserId(userId);
	}
}
