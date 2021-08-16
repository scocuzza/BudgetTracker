import { Typography } from '@material-ui/core'
import React from 'react'
import './Legend.scss'
import { expenseCategory } from '../../constants/constants'

export const Legend = (props) => {
    
    return (
        <div className="react-budget__legend">
            {expenseCategory.map((expense) => {
                return <div className="react-budget__legend-box">
                    <div style={{backgroundColor: expense.color}} className="react-budget__legend-color-box"></div>
                    <Typography component={'span'} variant="body2">{expense.category}</Typography>
                    </div>
            })}
        </div>
    )
}
