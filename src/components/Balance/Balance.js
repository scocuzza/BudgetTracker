import React, { useContext } from 'react'
import './Balance.scss'
import { GlobalContext } from '../../context/GlobalState'
import { PieChart } from 'react-minimal-pie-chart';
import { Card, CardHeader, Typography } from '@material-ui/core'

export const Balance = () => {
    const { transactions, monthlyGoalAmount } = useContext(GlobalContext);
    const transactionAmounts = transactions.map((transaction) => transaction.amount)
    const savings = transactionAmounts.reduce((acc, item) => (acc += item), 0)
    let percentAchieved;
    if (savings < 0 ) {
        percentAchieved = 0
    } else if (savings < monthlyGoalAmount) {
        percentAchieved = (savings / monthlyGoalAmount) * 100
    } else {
        percentAchieved = 100
    }
    const percentRemaining = 100 - percentAchieved
    console.log(percentAchieved + ' ' + percentRemaining)

    const pieData = [
        { title: '', value: percentRemaining, color: '#a0a3a8' },
        { title: '', value: percentAchieved, color: '#1e88e5' }
    ]
    return (
        <Card className="react-budget__balance">
            <CardHeader title="Savings Tracker" className="react-budget__balance-text"></CardHeader>
            <PieChart 
                label={({dataEntry}) => '$' + savings }
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
