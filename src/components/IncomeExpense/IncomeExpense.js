import React, { useContext } from 'react'
import './IncomeExpense.scss'
import { GlobalContext } from '../../context/GlobalState'
import { Card, Grid, Typography } from '@material-ui/core';

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map((transaction) => transaction.amount)
    const incomeAmounts = amounts.filter((amount) => amount > 0)
        .reduce((acc, item) => (acc += item), 0)
    const expenseAmounts = amounts.filter((amount) => amount < 0)
        .reduce((acc, item) => (acc += item), 0)

    return (
        <div className="react-budget__income-expense">
                <Card className="react-budget__income-expense__income">
                    <div className="react-budget__income-expense__income-color">
                    </div>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography component={'span'} gutterBottom variant="h4">
                                ${incomeAmounts}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography component={'span'} gutterBottom variant="h6">
                                Total Income
                            </Typography>
                        </Grid>
                        <Typography component={'span'} color="textSecondary" variant="body2">
                            This is the sum of all your positive transactions.
                        </Typography>
                    </Grid>
                </Card>
                <Card className="react-budget__income-expense__expense">
                    <div className="react-budget__income-expense__expense-color">
                    </div>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography component={'span'} gutterBottom variant="h4">
                                ${Math.abs(expenseAmounts)}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography component={'span'} gutterBottom variant="h6">
                                Total Expenses
                            </Typography>
                        </Grid>
                        <Typography component={'span'} color="textSecondary" variant="body2">
                            This is the sum of all your negative transactions.
                        </Typography>
                    </Grid>

                </Card>
            </div>
    )
}
