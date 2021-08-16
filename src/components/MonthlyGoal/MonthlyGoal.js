import React, { useContext} from 'react'
import { Button, TextField, Card, CardHeader, CardContent } from '@material-ui/core'
import './MonthlyGoal.scss'
import { GlobalContext } from '../../context/GlobalState'

export const Goal = () => {
    const { monthlyGoalAmount, setGoal } = useContext(GlobalContext)
    function handleChange(e) {
        setGoal( e.target.value)
    }
    function handleMinus() {
        setGoal(+monthlyGoalAmount - 10)
    }
    function handleAdd() {
        setGoal(+monthlyGoalAmount + 10)
    }
    return (
            <Card className="react-budget__goal">
                <CardHeader title="Set Your Monthly Goal"></CardHeader>
                <CardContent className="react-budget__goal-content">
                    <Button className="react-budget__goal-decreaseButton" onClick={handleMinus} color="secondary" variant="contained">-</Button>
                    <TextField className="react-budget__goal-textField" variant="outlined"  onChange={handleChange} value={monthlyGoalAmount}>{monthlyGoalAmount}</TextField>
                    <Button className="react-budget__goal-increaseButton" onClick={handleAdd} color="primary" variant="contained">+</Button>
                </CardContent>
            </Card>
    )
}
