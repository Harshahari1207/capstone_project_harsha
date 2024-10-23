import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [transaction, setTransaction] = useState({
    frmAccountId: "",
    toAccountId: "",
    amount: "",
    transactionType: "",
  });

  const [accountForm, setAccountForm] = useState({
    accountName: "",
    accountType: "",
    balance: "",
    secretePassword: "",
  });

  const getAccounts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8082/accounts/user/" +
          localStorage.getItem("userId")
      );
      console.log(response.data);
      setAccounts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getTransactions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8082/transactions/user/" +
          localStorage.getItem("userId")
      );
      console.log(response);
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  // Onload get all Accounts
  useEffect(() => {
    getAccounts();
    getTransactions();
  }, []);

  // Handler for adding a bank account
  const handleAddAccount = async (e) => {
    e.preventDefault();
    console.log("Account added:", accountForm);
    try {
      console.log(accountForm);
      const data = {
        accountName: accountForm.accountName,
        accountType: accountForm.accountType,
        balance: accountForm.balance,
        userId: localStorage.getItem("userId"),
        secretPassword: accountForm.secretePassword,
      };
      const response = await axios.post(
        "http://localhost:8082/accounts/register",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // Add the new account to the state and reset the form
    setAccounts([...accounts, accountForm]);
    setAccountForm({
      accountName: "",
      accountType: "",
      balance: "",
      secretePassword: "",
    });
  };

  // Handler for adding a transaction
  const handleTransactionChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleAddTransaction = async(e) => {
    e.preventDefault();
    console.log("Transaction added:", transaction);
    // if(transaction.amount > accounts[transaction.frmAccountId - 1].balance){
    //   alert("Insufficient Balance");
    //   return; 
    // }
    if(transaction.frmAccountId === transaction.toAccountId){
      alert("Cannot transfer to same account");
      return; 
    }
   try {
    const data = {
      frmAccountId: transaction.frmAccountId,
      toAccountId: transaction.toAccountId,
      amount: transaction.amount,
      transactionType: transaction.transactionType,
      userId: localStorage.getItem("userId"),
    }
    const response = await axios.post(
      "http://localhost:8082/transactions/transfer",
      data
    );
    console.log(response);
    getAccounts()
   } catch (error) {
    console.log(error);
   }
    setTransaction({
      frmAccountId: "",
      toAccountId: "",
      amount: "",
      transactionType: "",
    });
  };

  return (
    <div className="home">
      <div className="container">
        <div className="row p-3 justify-content-around">
          <div className="card col-md-5">
            {/* Add Bank Account Form */}
            <h4>Add Bank Account</h4>
            <form onSubmit={handleAddAccount} className="mb-4">
              <div className="form-group mb-3">
                <label>Account Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter account name"
                  value={accountForm.accountName}
                  onChange={(e) =>
                    setAccountForm({
                      ...accountForm,
                      accountName: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label>Account Type</label>
                <select
                  className="form-control"
                  value={accountForm.accountType}
                  onChange={(e) =>
                    setAccountForm({
                      ...accountForm,
                      accountType: e.target.value,
                    })
                  }
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
                  className="form-control"
                  placeholder="Enter balance"
                  value={accountForm.balance}
                  onChange={(e) =>
                    setAccountForm({
                      ...accountForm,
                      balance: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label>Secret Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter secret password"
                  value={accountForm.secretePassword}
                  onChange={(e) =>
                    setAccountForm({
                      ...accountForm,
                      secretePassword: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Add Account
              </button>
            </form>
          </div>

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
        </div>

        <div className="row mt-4">
          {/* Display Bank Cards */}
          <h4>Bank Accounts</h4>
          {accounts.length === 0 ? (
            <p>No accounts available. Add a new account to display here.</p>
          ) : (
            accounts.map((account, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{account.accountName}</h5>
                    <p className="card-text">Type: {account.accountType}</p>
                    <p className="card-text">Balance: ${account.balance}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="row mt-4">
          {/* Display Transaction Cards */}
          <h4>Transactions</h4>
          {transactions.length === 0 ? (
            <p>No Transaction available. Make Transaction to display here.</p>
          ) : (
            transactions.map((transaction, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Transaction ID: {transaction.transactionId}</h5>
                    <p className="card-text">From Account: {transaction.frmAccountId}</p>
                    <p className="card-text">To Account: {transaction.toAccountId}</p>
                    <p className="card-text">Transaction Type: {transaction.transactionType}</p>
                    <p className="card-text">Amount: ${transaction.amount}</p>
                    <p className="card-text">Date: {transaction.dateTransaction}</p>
                  </div>
                </div>
              </div>         
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
