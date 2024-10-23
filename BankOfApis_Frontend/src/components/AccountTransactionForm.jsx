import React, { useState } from "react";

const AccountTransactionForm = ({
  accounts,
  handleAddAccount,
  accountForm,
  handleAddTransaction,
  transaction,
  handleTransactionChange,
  handleAddAccountChange,
}) => {
  const [activeForm, setActiveForm] = useState("account");
  console.log(transaction);
  return (
    <div className="container pt-5 bg-light rounded bg-body-secondary">
      {/* Toggle buttons */}
      <div className="row p-3 justify-content-around mb-3">
        <button
          className={`btn ${
            activeForm === "account" ? "btn-primary" : "btn-outline-primary"
          } col-md-3`}
          onClick={() => setActiveForm("account")}
        >
          Add Bank Account
        </button>
        <button
          className={`btn ${
            activeForm === "transaction" ? "btn-primary" : "btn-outline-primary"
          } col-md-3`}
          onClick={() => setActiveForm("transaction")}
        >
          Place Transaction
        </button>
      </div>

      {/* Form Box */}
      <div className="row p-3 justify-content-around ">
        {activeForm === "account" && (
          <div className="card col-md-5 shadow">
            {/* Add Bank Account Form */}
            <h4>Add Bank Account</h4>
            <form onSubmit={handleAddAccount} className="mb-4">
              <div className="form-group mb-3">
                <label>Account Name</label>
                <input
                  type="text"
                  name="accountName"
                  className="form-control"
                  placeholder="Enter account name"
                  value={accountForm.accountName}
                  onChange={handleAddAccountChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label>Account Type</label>
                <select
                  className="form-control"
                  name="accountType"
                  value={accountForm.accountType}
                  onChange={handleAddAccountChange}
                  required
                >
                  <option value="">Select account type</option>
                  <option value="savings">Savings</option>
                  <option value="current">Current</option>
                  <option value="business">Business</option>
                  <option value="investment">Investment</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label>Balance</label>
                <input
                  type="number"
                  name="balance"
                  className="form-control"
                  placeholder="Enter balance"
                  value={accountForm.balance}
                  onChange={handleAddAccountChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label>Secret Password</label>
                <input
                  type="password"
                  name="secretePassword"
                  className="form-control"
                  placeholder="Enter secret password"
                  value={accountForm.secretePassword}
                  onChange={handleAddAccountChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Add Account
              </button>
            </form>
          </div>
        )}

        {activeForm === "transaction" && (
          <div className="card col-md-5">
            {/* Add Transaction Form */}
            <h4>Place Transaction</h4>
            <form onSubmit={handleAddTransaction} className="mb-4">
              <div className="form-group mb-3">
                <label>From Account ID</label>
                <select
                  className="form-control"
                  name="frmAccountId"
                  value={transaction.frmAccountId}
                  onChange={handleTransactionChange}
                  required
                >
                  <option value="">Select from account</option>
                  {accounts.map((account) => (
                    <option key={account.accountId} value={account.accountId}>
                      {account.accountId} - {account.accountType}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group mb-3">
                <label>To Account ID</label>
                <select
                  className="form-control"
                  name="toAccountId"
                  value={transaction.toAccountId}
                  onChange={handleTransactionChange}
                  required
                >
                  <option value="">Select to account</option>
                  {accounts.map((account) => (
                    <option key={account.accountId} value={account.accountId}>
                      {account.accountId} - {account.accountType}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group mb-3">
                <label>Amount</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter amount"
                  name="amount"
                  value={transaction.amount}
                  onChange={handleTransactionChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label>Transaction Type</label>
                <select
                  className="form-control"
                  name="transactionType"
                  value={transaction.transactionType}
                  onChange={handleTransactionChange}
                  required
                >
                  <option value="">Choose...</option>
                  <option value="Transfer">Transfer</option>
                  <option value="Deposit">Deposit</option>
                  <option value="Withdrawal">Withdrawal</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Place Transaction
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountTransactionForm;
