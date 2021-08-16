import React, { useContext, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { Card, CardHeader } from '@material-ui/core';
import { GlobalContext } from '../../context/GlobalState';
import { Legend } from '../Legend/Legend';
import { expenseCategory } from '../../constants/constants';

export const ExpenseBreakdown = () => {
    const { transactions } = useContext(GlobalContext);
    const expenses = transactions.filter((transactions) => transactions.amount < 0)
    var result = new Map();
    expenses.forEach((element) => {
        if (result.get(element.category))
            result.set(element.category,
                result.get(element.category) + element.amount);
        else result.set(element.category, element.amount);
    });
    let expensesData = []
    result.forEach((val,key)=>{expensesData.push({category: key, value: val})})
    const finalExpenseData = expensesData.map((expense) => (
        {
            title: expense.category,
            value: expense.value,
            color: expenseCategory.filter((expenseCategory) => expenseCategory.category === expense.category)[0].color
        }
    )
    )
    const [selected, setSelected] = useState(0);
    const [hovered, setHovered] = useState(undefined);

    return (
        <Card className="react-budget__balance">
            <CardHeader title="Expense Breakdown" className="react-budget__balance-text"></CardHeader>
            <PieChart
                labelStyle={{
                    fontSize: '8px',
                    fontFamily: 'sans-serif'
                }}
                label={({ dataEntry, dataIndex }) => dataIndex === selected ? Math.round(dataEntry.percentage) + '%' : ''}
                segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                segmentsShift={(index) => (index === selected ? 6 : 1)}
                center={[50, 45]}
                radius={40}
                labelPosition={70}
                startAngle={0}
                lengthAngle={360}
                data={finalExpenseData}
                onClick={(_, index) => {
                    setSelected(index === selected ? undefined : index);
                }}
                onMouseOver={(_, index) => {
                    setHovered(index);
                }}
                onMouseOut={() => {
                    setHovered(undefined);
                }} />
            <Legend />
        </Card>
    )
}
