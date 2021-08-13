import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './AddTransaction.scss'

export const AddTransaction = () => {
    const [transaction, setTransaction ] = useState({amount: 0, text: ''})
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: transaction.text,
            amount: +transaction.amount
        }
        addTransaction(newTransaction);
    }

    return (
            <form noValidate className="react-budget__transaction">
                <h3>Record a Transaction</h3>
                <div className="react-budget__transaction-input">
                    <TextField className="react-budget__transaction-input__amount" variant="outlined" onChange={(e) => setTransaction({...transaction, amount: e.target.value})} type="number" name="transaction-amount" id="transaction-amount" placeholder="Enter an Amount">
                    </TextField>
                    <TextField className="react-budget__transaction-input__text" variant="outlined" onChange={(e) => setTransaction({...transaction, text: e.target.value})} type="text" name="transaction-name" id="transaction-name" placeholder="Enter Description">
                    </TextField>
                    <Button onClick={onSubmit} variant="contained" color="primary">Add</Button>
                </div>
            </form>
    )
}
