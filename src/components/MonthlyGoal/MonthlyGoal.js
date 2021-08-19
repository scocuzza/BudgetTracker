import React, { useContext } from 'react'
import { Button, TextField, Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import './MonthlyGoal.scss'
import { GlobalContext } from '../../context/GlobalState'

export const Goal = () => {
    const { user, setUser } = useContext(GlobalContext)
    const {transactions } = useContext(GlobalContext)
    const transactionAmounts = transactions.map((transaction) => transaction.amount)
    const savings = transactionAmounts.reduce((acc, item) => (acc += item), 0)
    const monthlyGoalAmount = user.monthlyGoalAmount;
    function handleChange(e) {
        setUser({ ...user, monthlyGoalAmount: e.target.value })
    }
    function handleMinus() {
        setUser({ ...user, monthlyGoalAmount: +monthlyGoalAmount - 10 })

    }
    function handleAdd() {
        setUser({ ...user, monthlyGoalAmount: +monthlyGoalAmount + 10 })
    }
    const goalMsg = savings > user.monthlyGoalAmount ? 'You have suprassed your goal by $' + (savings - monthlyGoalAmount) : 'You are $' + (monthlyGoalAmount - savings) + ' away from your goal'
    return (
            <Card className="react-budget__goal">
                <CardHeader title="Set Your Monthly Goal"></CardHeader>
                <CardContent className="react-budget__goal-content">
                    <Button className="react-budget__goal-decreaseButton" onClick={handleMinus} color="secondary" variant="contained">-</Button>
                    <TextField className="react-budget__goal-textField" variant="outlined"  onChange={handleChange} value={monthlyGoalAmount}>{monthlyGoalAmount}</TextField>
                    <Button className="react-budget__goal-increaseButton" onClick={handleAdd} color="primary" variant="contained">+</Button>
                </CardContent>
                <Typography className="react-budget__goal-msg">{goalMsg}</Typography>
            </Card>
    )
}
