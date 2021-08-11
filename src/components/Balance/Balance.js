import React, { useContext } from 'react'
import './Balance.scss'
import { GlobalContext } from '../../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const transactionAmounts = transactions.map((transaction) => transaction.transactionAmount)
    const totalAmount = transactionAmounts.reduce((acc, item) => (acc += item),0)
    
    return (
        <div className="react-budget__balance">
            <h2 className="react-budget__balance-text">Remaining Balance</h2>
            <h2 className="react-budget__balance-remaining">${totalAmount}</h2>
        </div>
    )
}
