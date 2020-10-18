import React from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className = "App">
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xs'>
        <Typography component="div" style={{ backgroundColor: '#91e5eb', height: 'auto' }}>
          <Header />
          <Balance />
          <IncomeExpense />
          <TransactionsList />
          <AddTransaction />
        </Typography>
      </Container>
    </React.Fragment>
    </div>
  );
}

export default App;
