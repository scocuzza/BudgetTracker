import React, { useContext } from 'react'
import './SavingsGoal.scss'
import { GlobalContext } from '../../context/GlobalState'
import { PieChart } from 'react-minimal-pie-chart';
import { Card, CardHeader, Grid, Typography } from '@material-ui/core'

export const Balance = () => {
    const { transactions, user } = useContext(GlobalContext);
    const monthlyGoalAmount = user.monthlyGoalAmount;
    const transactionAmounts = transactions.map((transaction) => transaction.amount)
    const savings = transactionAmounts.reduce((acc, item) => (acc += item), 0)
    let percentAchieved;
    if (savings < 0) {
        percentAchieved = 0
    } else if (savings < monthlyGoalAmount) {
        percentAchieved = (savings / monthlyGoalAmount) * 100
    } else {
        percentAchieved = 100
    }
    const percentRemaining = 100 - percentAchieved
    const pieData = [
        { title: '', value: percentRemaining, color: '#a0a3a8' },
        { title: '', value: percentAchieved, color: '#64dd17' }
    ]
    return (
        <Card className="react-budget__balance">
            <CardHeader title="Extra Cash" className="react-budget__balance-text"></CardHeader>
            <Grid container>
                <Grid item xs>
                    <Typography component={'span'} gutterBottom variant="h6">
                        {"Balance: " + savings}
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography component={'span'} gutterBottom variant="h6">
                        {"My Goal: " + monthlyGoalAmount}
                    </Typography>
                </Grid>
            </Grid>
            <PieChart
                label={({ dataEntry }) => '$' + (savings - monthlyGoalAmount)}
                lineWidth={10}
                labelStyle={{
                    fontSize: '25px',
                    fontFamily: 'sans-serif'
                }}
                center={[50, 30]}
                radius={60}
                labelPosition={0}
                startAngle={0}
                lengthAngle={180}
                totalValue={100}
                data={pieData} />
        </Card>
    )
}
