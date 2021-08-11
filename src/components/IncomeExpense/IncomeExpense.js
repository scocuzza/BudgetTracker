import React, { useContext } from 'react'
import { Header } from 'semantic-ui-react'
import { GlobalContext } from '../../context/GlobalState'

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map((transaction) => transaction.transactionAmount)
    console.log(amounts)
    const incomeAmounts = amounts.filter((amount) => amount > 0)
    .reduce((acc,item) => (acc += item),0)
    const expenseAmounts = amounts.filter((amount) => amount < 0)
    .reduce((acc,item) => (acc += item),0)

    return (
        <div className="react-budget__income-expense">
            <div className="react-budget__income">
                <Header size="small">INCOME TOTAL</Header>
                <Header size="small">${incomeAmounts}</Header>
            </div>
            <div className="react-budget__expense">
                <Header size="small">EXPENSE TOTAL</Header>
                <Header size="small">${expenseAmounts}</Header>
            </div>
        </div>
    )
}
