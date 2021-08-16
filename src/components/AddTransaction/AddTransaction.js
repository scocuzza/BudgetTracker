import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './AddTransaction.scss'
import { Typography } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { expenseCategory } from '../../constants/constants'
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 160,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const AddTransaction = () => {
    const [transaction, setTransaction] = useState({ amount: 0, text: '', category: '' })
    const { addTransaction } = useContext(GlobalContext)
    const [category, setCategory] = useState('');
    const classes = useStyles();
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: transaction.text,
            amount: +transaction.amount,
            category: transaction.category
        }
        addTransaction(newTransaction);
    }

    return (
        <form noValidate className="react-budget__transaction">
            <div className="react-budget__transaction-input">
                <TextField className="react-budget__transaction-input__amount" variant="outlined" onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })} type="number" name="transaction-amount" id="transaction-amount" placeholder="Enter an Amount">
                </TextField>
                <TextField className="react-budget__transaction-input__text" variant="outlined" onChange={(e) => setTransaction({ ...transaction, text: e.target.value })} type="text" name="transaction-name" id="transaction-name" placeholder="Enter Description">
                </TextField>
                <FormControl className={classes.formControl} disabled={transaction.amount >= 0 ? true : false}>
                    <InputLabel id="react-budget__transaction-input__category">Expense Category</InputLabel>
                    <Select
                        labelId="react-budget__transaction-input__category"
                        id="transaction-input__category"
                        onChange={(e) => setTransaction({ ...transaction, category: e.target.value })}
                        value={transaction.category}
                    >
                        {expenseCategory.map((expense) => { return <MenuItem value={expense.category}>{expense.category}</MenuItem> })}
                    </Select>
                </FormControl>
                <Button onClick={onSubmit} variant="contained" color="primary">Add</Button>
            </div>
        </form>
    )
}
