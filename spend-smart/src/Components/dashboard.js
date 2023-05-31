import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BudgetTrackerDashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('API_ENDPOINT/transactions'); // Replace 'API_ENDPOINT' with the actual API endpoint for fetching transactions
      setTransactions(response.data);
    } catch (error) {
      console.log('Error fetching transactions:', error);
    }
  };

  const getTransactionColor = (type) => {
    return type === 'expense' ? 'text-danger' : 'text-success';
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Budget Tracker Dashboard</h1>
      <div className="row">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="col-md-6 col-lg-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{transaction.name}</h5>
                <h6 className={`card-subtitle mb-2 ${getTransactionColor(transaction.type)}`}>
                  {transaction.type === 'expense' ? 'Expense' : 'Savings'}
                </h6>
                <p className="card-text">Amount: {transaction.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetTrackerDashboard;
