import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    transactions: [
        {
            id: 1, text: 'Transaction1', amount: 30,
        }, {
            id: 2, text: 'Transaction2', amount: 20
        }, {
            id: 3, text: 'Transaction3', amount: 10
        }
        , {
            id: 4, text: 'Transaction4', amount: -50
        }
    ],
    monthlyGoalAmount: 100
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    // Actions
    function deleteTransaction(id) {
        id.forEach(id => {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    function setGoal(monthlyGoalAmount) {
        console.log('setting goal ' + monthlyGoalAmount )
        dispatch({
            type: 'SET_GOAL',
            payload: monthlyGoalAmount
        })
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        monthlyGoalAmount: state.monthlyGoalAmount,
        deleteTransaction,
        addTransaction,
        setGoal
    }}>{children}</GlobalContext.Provider>)
}