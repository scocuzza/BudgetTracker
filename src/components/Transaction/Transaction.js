import React from 'react'

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount > 0 ? '+' : '-';
    return (
        <>
            <li>
                {transaction.text} <span>${transaction.amount}</span>
            </li>
        </>
    )
}
