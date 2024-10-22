package com.wipro.capstone.AccountService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.capstone.AccountService.models.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
	List<Account> findByUserId(Long userId);
}
