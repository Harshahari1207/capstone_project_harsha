import React, { useState } from 'react';

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [transaction, setTransaction] = useState({
    frmAccountId: '',
    toAccountId: '',
    amount: '',
    transactionType: '',
  });

  const [accountForm, setAccountForm] = useState({
    accountName: '',
    accountType: '',
    accountNumber: '',
    balance: '',
  });

  // Handler for adding a bank account
  const handleAddAccount = (e) => {
    e.preventDefault();
    setAccounts([...accounts, accountForm]);
    setAccountForm({ accountName: '', accountType: '', accountNumber: '', balance: '' });
  };

  // Handler for adding a transaction
  const handleTransactionChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    console.log('Transaction added:', transaction);
    setTransaction({
      frmAccountId: '',
      toAccountId: '',
      amount: '',
      transactionType: '',
    });
  };

  return (
    <div className='home'>
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
                onChange={(e) => setAccountForm({ ...accountForm, accountName: e.target.value })}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label>Account Type</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter account type"
                value={accountForm.accountType}
                onChange={(e) => setAccountForm({ ...accountForm, accountType: e.target.value })}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Account Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter account number"
                value={accountForm.accountNumber}
                onChange={(e) => setAccountForm({ ...accountForm, accountNumber: e.target.value })}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label>Balance</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter balance"
                value={accountForm.balance}
                onChange={(e) => setAccountForm({ ...accountForm, balance: e.target.value })}
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
              <input
                type="number"
                className="form-control"
                placeholder="Enter from account ID"
                name="frmAccountId"
                value={transaction.frmAccountId}
                onChange={handleTransactionChange}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label>To Account ID</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter to account ID"
                name="toAccountId"
                value={transaction.toAccountId}
                onChange={handleTransactionChange}
                required
              />
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
    </div>
    </div>
  );
};

export default Dashboard;
