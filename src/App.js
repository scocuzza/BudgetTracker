import './App.scss';
import { HeaderTitle } from './components/HeaderTitle/HeaderTitle'
import { Balance } from './components/Balance/Balance'
import { IncomeExpense } from './components/IncomeExpense/IncomeExpense'
import { Transaction } from './components/AddTransaction/AddTransaction'

function App() {
  
  return (
    <div className="react-budget">
      <HeaderTitle />
      <Balance />
      <IncomeExpense />
      <Transaction />
  </div>
  );
}

export default App;
