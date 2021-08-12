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
                <CardHeader title="Set Monthly Goal"></CardHeader>
                <CardContent>
                    <Button onClick={handleMinus} color="primary">-</Button>
                    <TextField onChange={handleChange} value={monthlyGoalAmount}>{monthlyGoalAmount}</TextField>
                    <Button onClick={handleAdd} color="secondary">+</Button>
                </CardContent>
            </Card>
    )
}
