import React from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div className="App">
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionsList />
        <AddTransaction />
    </div>
  );
}

export default App;
