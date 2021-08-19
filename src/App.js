import './App.scss';
import React, { useContext, useEffect, useState } from 'react';
import { Balance } from './components/SavingsGoal/SavingsGoal'
import { IncomeExpense } from './components/IncomeExpense/IncomeExpense'
import TransactionTabs from './components/TransactionTabs/TransactionTabs'
import { AddTransaction } from './components/AddTransaction/AddTransaction'
import { Goal } from './components/MonthlyGoal/MonthlyGoal'
import { GlobalContext, GlobalProvider } from './context/GlobalState'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { ExpenseBreakdown } from './components/ExpenseBreakdown/ExpenseBreakdown';
import Navigation from './components/Navigation/Navigation'

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#1e88e5',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#6ab7ff',
    },
  },
});

function App() {
  return (
    <GlobalProvider>
       <ThemeProvider theme={theme}>
      <Navigation />
      <div className="react-budget__flexbox">
        <IncomeExpense />
        <div className="react-budget__balance-goal-flexbox">
          <Balance />
          <ExpenseBreakdown />
          <Goal />
        </div>
        <AddTransaction />
        <TransactionTabs />
      </div>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
