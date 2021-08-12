import './App.scss';
import React, { useContext } from 'react';
import { HeaderTitle } from './components/HeaderTitle/HeaderTitle'
import { Balance } from './components/Balance/Balance'
import { IncomeExpense } from './components/IncomeExpense/IncomeExpense'
import { Transaction } from './components/AddTransaction/AddTransaction'
import { TransactionHistory  } from './components/TransactionHistory/TransactionHistory';
import { Goal } from './components/Goal/Goal'
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <HeaderTitle />
      <IncomeExpense />
      <div className="react-budget__balance-goal-flexbox">
        <Balance />
        <Goal />
      </div>
      <TransactionHistory />
      <Transaction />
    </GlobalProvider>
  );
}

export default App;
