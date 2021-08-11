import React from 'react'

export const Transaction = ({transaction}) => {
    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    return (
            <li className="react-budget__transaction-item">{transaction.transactionText} <span>{sign}${Math.abs(transaction.transactionAmount)}</span></li>
    )
}
