import React, { createContext, useReducer, useEffect } from 'react'
import { AppReducer } from './AppReducer';
import axios from 'axios'
//Initial State
const initialState = {
    transactions: [],
    error: null,
    loading: true,
    monthlyGoalAmount: 700
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    useEffect(()=>{
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // Actions
    async function getTransactions() {
        try {
            const res = await axios('/api/v1/transactions');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response
            })
        }
    }

    function deleteTransaction(id) {
        id.forEach(id => {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        });
    }
    async function addTransaction(transaction) {
        try {
            const res = await axios.post('/api/v1/transactions', transaction);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response
            })
        }
    }
    function setGoal(monthlyGoalAmount) {
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
        setGoal,
        getTransactions,
        error: state.error,
        loading: state.loading
    }}>{children}</GlobalContext.Provider>)
}