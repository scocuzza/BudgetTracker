import React, { useContext } from 'react'
import './TransactionHistory.scss'
import { GlobalContext  } from '../../context/GlobalState'
import { Transaction } from '../Transaction/Transaction'

export const TransactionHistory = () => {
    const {transactions} = useContext(GlobalContext)
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="react-budget__transaction-list">
                {transactions.map(transaction => 
                    (<Transaction key={transaction.id} transaction={transaction} />))
                }
            </ul>
        </div>
    )
}
