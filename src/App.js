import './App.scss';
import React, { useContext } from 'react';
import { HeaderTitle } from './components/HeaderTitle/HeaderTitle'
import { Balance } from './components/Balance/Balance'
import { IncomeExpense } from './components/IncomeExpense/IncomeExpense'
import TransactionTabs from './components/TransactionTabs/TransactionTabs'
import { AddTransaction } from './components/AddTransaction/AddTransaction'
import { Goal } from './components/Goal/Goal'
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;
