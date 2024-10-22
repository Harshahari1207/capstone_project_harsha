package com.wipro.capstone.AccountService.models;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Transaction {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long transactionId;
	private Long frmAccountId;
	private String transactionType;
	private Long toAccountId;
	private Integer amount;
	private Long userId;
	private LocalDate dateTransaction;

	public Transaction(Long transactionId, Long frmAccountId, String transactionType, Long toAccountId, Integer amount,
			Long userId, LocalDate dateTransaction) {
		this.transactionId = transactionId;
		this.frmAccountId = frmAccountId;
		this.transactionType = transactionType;
		this.toAccountId = toAccountId;
		this.amount = amount;
		this.userId = userId;
		this.dateTransaction = dateTransaction;
	}

	public Transaction() {

	}

	public Long getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(Long transactionId) {
		this.transactionId = transactionId;
	}

	public Long getFrmAccountId() {
		return frmAccountId;
	}

	public void setFrmAccountId(Long frmAccountId) {
		this.frmAccountId = frmAccountId;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public Long getToAccountId() {
		return toAccountId;
	}

	public void setToAccountId(Long toAccountId) {
		this.toAccountId = toAccountId;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public LocalDate getDateTransaction() {
		return dateTransaction;
	}

	public void setDateTransaction(LocalDate dateTransaction) {
		this.dateTransaction = dateTransaction;
	}
}
