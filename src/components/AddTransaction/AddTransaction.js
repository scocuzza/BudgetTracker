import React, { useState } from 'react'
import './AddTransaction.scss'

export const Transaction = () => {
    const [transaction, setTransaction ] = useState({transactionAmount: 0, transactionText: ''})

    return (
            <form className="react-budget__transaction">
                <label htmlFor="transaction-amount">Record a Transaction</label>
                <input onChange={(e) => setTransaction({...transaction, transactionAmount: e.target.value})} type="number" name="transaction-amount" id="transaction-amount" placeholder="Enter an Amount (+ income , - expense)">
                </input>
                <input  onChange={(e) => setTransaction({...transaction, transactionText: e.target.value})} type="text" name="transaction-name" id="transaction-name" placeholder="Enter Description">
                </input>
                <button>Add</button>
            </form>
    )
}
