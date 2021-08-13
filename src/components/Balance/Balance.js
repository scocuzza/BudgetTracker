import React, { useContext } from 'react'
import './Balance.scss'
import { GlobalContext } from '../../context/GlobalState'
import { PieChart } from 'react-minimal-pie-chart';
import { Card } from '@material-ui/core'

export const Balance = () => {
    const { transactions, monthlyGoalAmount } = useContext(GlobalContext);
    const transactionAmounts = transactions.map((transaction) => transaction.amount)
    const savings = transactionAmounts.reduce((acc, item) => (acc += item), 0)
    const percentAchieved = savings < monthlyGoalAmount ? (savings / monthlyGoalAmount) * 100 : 100
    const percentRemaining = 100 - percentAchieved
    const pieData = [
        { title: '', value: percentRemaining, color: '#a0a3a8' },
        { title: '', value: percentAchieved, color: '#64d17e' }
    ]
    return (
        <Card className="react-budget__balance">
            <h2 className="react-budget__balance-text">Savings Tracker</h2>
            <PieChart 
                label={({dataEntry}) => '$' + savings }
                lineWidth={20} 
                labelStyle={{
                    fontSize: '25px',
                    fontFamily: 'sans-serif',
                    fill: '#2ee010',
                  }}
                labelPosition={0}
                startAngle={0} 
                lengthAngle={180} 
                totalValue={100}
                data={pieData} />
        </Card>
    )
}
