import React from 'react'
import { Header } from 'semantic-ui-react'
export const IncomeExpense = () => {
    return (
        <div className="react-budget__income-expense">
            <div className="react-budget__income">
                <Header size="small">INCOME TOTAL</Header>
                <Header size="small">$1,000</Header>
            </div>
            <div className="react-budget__expense">
                <Header size="small">EXPENSE TOTAL</Header>
                <Header size="small">$500</Header>
            </div>
        </div>
    )
}
