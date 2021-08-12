import React, { useContext } from 'react'
import TransactionHistoryTable from './TransactionHistoryTable'
import { GlobalContext } from '../../context/GlobalState'

export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext)
    const incomeTransactions = transactions.filter((transaction) => transaction.amount > 0)
    const expenseTransactions = transactions.filter((transaction) => transaction.amount < 0)
    return (
        <div className="react-budget__transaction-history-flexbox">
            <TransactionHistoryTable type='Income' transactions={incomeTransactions} />
            <TransactionHistoryTable type='Expenses' transactions={expenseTransactions} />
      </div>
    )
}
