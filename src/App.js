import './App.scss';
import React from 'react';
import { HeaderTitle } from './components/HeaderTitle/HeaderTitle'
import { Balance } from './components/Balance/Balance'
import { IncomeExpense } from './components/IncomeExpense/IncomeExpense'
import TransactionTabs from './components/TransactionTabs/TransactionTabs'
import { AddTransaction } from './components/AddTransaction/AddTransaction'
import { Goal } from './components/Goal/Goal'
import { GlobalProvider } from './context/GlobalState'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
      <HeaderTitle />
      <div className="react-budget__flexbox">
        <IncomeExpense />
        <div className="react-budget__balance-goal-flexbox">
          <Balance />
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
