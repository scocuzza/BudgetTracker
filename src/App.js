import './App.scss';
import React, { useContext, useEffect, useState } from 'react';
import { Balance } from './components/SavingsGoal/SavingsGoal'
import { IncomeExpense } from './components/IncomeExpense/IncomeExpense'
import TransactionTabs from './components/TransactionTabs/TransactionTabs'
import { AddTransaction } from './components/AddTransaction/AddTransaction'
import { Goal } from './components/MonthlyGoal/MonthlyGoal'
import { GlobalProvider } from './context/GlobalState'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { ExpenseBreakdown } from './components/ExpenseBreakdown/ExpenseBreakdown';
import Navigation from './components/Navigation/Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AccountContainer } from './components/AccountContainer/AccountContainer';

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
    <Router>
    <GlobalProvider>
       <ThemeProvider theme={theme}>
      <Navigation />
      <Switch>
      <Route exact path="/">
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
      </Route>
      <Route exact path="/investments">
        <AccountContainer />
      </Route>
      </Switch>
      </ThemeProvider>
    </GlobalProvider>
    </Router>
  );
}

export default App;
