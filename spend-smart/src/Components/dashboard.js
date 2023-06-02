// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BudgetTrackerDashboard = () => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const response = await axios.get('API_ENDPOINT/transactions'); // Replace 'API_ENDPOINT' with the actual API endpoint for fetching transactions
//       setTransactions(response.data);
//     } catch (error) {
//       console.log('Error fetching transactions:', error);
//     }
//   };

//   const getCardColor = (type) => {
//     return type === 'expense' ? 'bg-danger' : 'bg-success';
//   };

//   return (
//     <div className="container">
//       <h1 className="text-center mb-4">Spend Smart Dashboard</h1>
//       <div className="row">
//         {transactions.map((transaction) => (
//           <div key={transaction.id} className="col-md-6 col-lg-4 mb-3">
//             <div className={`card ${getCardColor(transaction.type)}`}>
//               <div className="card-body">
//                 <h5 className="card-title text-white">{transaction.name}</h5>
//                 <h6 className="card-subtitle mb-2 text-white">
//                   {transaction.type === 'expense' ? 'Expense' : 'Savings'}
//                 </h6>
//                 <p className="card-text text-white">Amount: {transaction.amount}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BudgetTrackerDashboard;
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BudgetTrackerDashboard = () => {
  const transactions = [
    {
      id: 1,
      name: 'Expense 1',
      type: 'expense',
      amount: 50,
    },
    {
      id: 2,
      name: 'Savings 1',
      type: 'savings',
      amount: 100,
    },
    {
      id: 3,
      name: 'Expense 2',
      type: 'expense',
      amount: 30,
    },
    {
      id: 4,
      name: 'Savings 2',
      type: 'savings',
      amount: 80,
    },
    {
      id: 5,
      name: 'Utilties',
      type: 'expense',
      amount: 30,
    },
    {
      id: 6,
      name: 'Savings 2',
      type: 'savings',
      amount: 80,
    },
  ];

  const getCardColor = (type) => {
    return type === 'expense' ? 'bg-danger' : 'bg-success';
  };

  // Calculate total expenses and savings
  const totalExpenses = transactions.reduce((total, transaction) => {
    if (transaction.type === 'expense') {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  const totalSavings = transactions.reduce((total, transaction) => {
    if (transaction.type === 'savings') {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  // Prepare data for the graph
  const graphData = {
    labels: ['Expenses', 'Savings'],
    datasets: [
      {
        label: 'Amount',
        data: [totalExpenses, totalSavings],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Budget Tracker Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <Bar
            data={graphData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    precision: 0,
                  },
                },
              },
            }}
          />
        </div>
        <div className="col-md-6">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="card mb-3">
              <div className={`card-body ${getCardColor(transaction.type)}`}>
                <h5 className="card-title text-white">{transaction.name}</h5>
                <h6 className="card-subtitle mb-2 text-white">
                  {transaction.type === 'expense' ? 'Expense' : 'Savings'}
                </h6>
                <p className="card-text text-white">Amount: {transaction.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetTrackerDashboard;
