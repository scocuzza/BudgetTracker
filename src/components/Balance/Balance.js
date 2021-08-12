import React, { useContext } from 'react'
import './Balance.scss'
import { GlobalContext } from '../../context/GlobalState'
import { PieChart } from 'react-minimal-pie-chart';
import { Card } from '@material-ui/core'

export const Balance = () => {
    const { transactions, monthlyGoalAmount } = useContext(GlobalContext);
    const transactionAmounts = transactions.map((transaction) => transaction.amount)
    const savings = transactionAmounts.reduce((acc, item) => (acc += item), 0)
    const pieData = [
        { title: 'Goal', value: monthlyGoalAmount, color: '#c9c9c9' },
        { title: 'Balance', value: savings, color: '#2ee010' }
    ]
    return (
        <Card className="react-budget__balance">
            <h2 className="react-budget__balance-text">Savings Tracker</h2>
            <PieChart 
                label={({dataEntry}) => dataEntry.title === 'Balance' ? '$' + dataEntry.value : '' }
                lineWidth={20} 
                labelStyle={{
                    fontSize: '25px',
                    fontFamily: 'sans-serif',
                    fill: '#2ee010',
                  }}
                labelPosition={0}
                startAngle={0} 
                lengthAngle={180} 
                data={pieData} />
        </Card>
    )
}
