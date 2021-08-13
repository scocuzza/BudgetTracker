import React, { useContext} from 'react'
import { Button, TextField, Card, CardHeader, CardContent } from '@material-ui/core'
import './Goal.scss'
import { GlobalContext } from '../../context/GlobalState'

export const Goal = () => {
    const { monthlyGoalAmount, setGoal } = useContext(GlobalContext)
    const handleChange = (e) => {
        setGoal(e.target.value)
    }
    const handleMinus = () => {
        setGoal(+monthlyGoalAmount - 10)
    }
    const handleAdd = () => {
        setGoal(+monthlyGoalAmount + 10)
    }
    return (
            <Card className="react-budget__goal">
                <CardHeader title="Set Your Monthly Goal"></CardHeader>
                <CardContent>
                    <Button className="react-budget__goal-decreaseButton" onClick={handleMinus} color="secondary" variant="contained">-</Button>
                    <TextField className="react-budget__goal-textField" variant="outlined"  onChange={handleChange} value={monthlyGoalAmount}>{monthlyGoalAmount}</TextField>
                    <Button className="react-budget__goal-increaseButton" onClick={handleAdd} color="primary" variant="contained">+</Button>
                </CardContent>
            </Card>
    )
}
