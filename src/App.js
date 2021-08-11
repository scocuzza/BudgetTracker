import './App.scss';
import { HeaderTitle } from './components/HeaderTitle/HeaderTitle'
import { Balance } from './components/Balance/Balance'
import { IncomeExpense } from './components/IncomeExpense/IncomeExpense'
import { Transaction } from './components/AddTransaction/AddTransaction'
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import { GlobalProvider } from './context/GlobalState'


function App() {

  return (
    <GlobalProvider>
      <div className="react-budget">
        <HeaderTitle />
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <Transaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
