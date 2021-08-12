import React, { useContext } from 'react'
import './IncomeExpense.scss'
import { Header } from 'semantic-ui-react'
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
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            ${incomeAmounts}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h6">
                            Total Income
                        </Typography>
                    </Grid>
                </Grid>
                <Typography color="textSecondary" variant="body2">
                    This is the sum of all your positive transactions.
                </Typography>
            </Card>
            <Card className="react-budget__income-expense__expense">
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            ${Math.abs(expenseAmounts)}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h6">
                            Total Expenses
                        </Typography>
                    </Grid>
                </Grid>
                <Typography color="textSecondary" variant="body2">
                    This is the sum of all your negative transactions.
                </Typography>
            </Card>
        </div>
    )
}
