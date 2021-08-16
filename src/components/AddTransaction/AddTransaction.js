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
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const AddTransaction = () => {
    const [transaction, setTransaction] = useState({ amount: 0, text: '' })
    const { addTransaction } = useContext(GlobalContext)
    const [category, setCategory] = useState('');
    const classes = useStyles();
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: transaction.text,
            amount: +transaction.amount
        }
        addTransaction(newTransaction);
    }

    const handleChange = (event) => {
        setCategory(event.target.value);
    };


    return (
        <form noValidate className="react-budget__transaction">
            <Typography variant="h5">Record a Transaction</Typography>
            <div className="react-budget__transaction-input">
                <TextField className="react-budget__transaction-input__amount" variant="outlined" onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })} type="number" name="transaction-amount" id="transaction-amount" placeholder="Enter an Amount">
                </TextField>
                <TextField className="react-budget__transaction-input__text" variant="outlined" onChange={(e) => setTransaction({ ...transaction, text: e.target.value })} type="text" name="transaction-name" id="transaction-name" placeholder="Enter Description">
                </TextField>
                <FormControl className={classes.formControl}>
                    <InputLabel id="react-budget__transaction-input__category">Category</InputLabel>
                    <Select
                        labelId="react-budget__transaction-input__category"
                        id="transaction-input__category"
                        value={category}
                        onChange={handleChange}
                    >
                        {expenseCategory.map((expense) => { return <MenuItem value={expense.category}>{expense.category}</MenuItem> })}
                    </Select>
                </FormControl>
                <Button onClick={onSubmit} variant="contained" color="primary">Add</Button>
            </div>
        </form>
    )
}
