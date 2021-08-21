import React, { createContext, useReducer, useEffect } from 'react'
import { AppReducer } from './AppReducer';
import axios from 'axios'
//Initial State
const initialState = {
    user: {},
    error: null,
    loading: true
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // Actions
    async function getUser() {
        try {
            const res = await axios('/api/v1/users/4');
            dispatch({
                type: 'GET_USER',
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err.response
            })
        }
    }
    async function deleteTransaction(id) {
        try {
            id.forEach(async id => {
                const res = await axios.delete('/api/v1/transactions/' + id)
                dispatch({
                    type: 'DELETE_TRANSACTION',
                    payload: id
                })
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response
            })
        }
    }
    async function addTransaction(transaction) {
        try {
            const res = await axios.post('/api/v1/user/transactions/4', transaction);
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
    function setMonthlyGoal(monthlyGoalAmount) {
        dispatch({
            type:'SET_MONTHLYGOAL',
            payload:{ ...state.user, monthlyGoalAmount: monthlyGoalAmount }
        })
    }

    return (<GlobalContext.Provider value={{
        deleteTransaction,
        addTransaction,
        setMonthlyGoal,
        getUser,
        error: state.error,
        loading: state.loading,
        user: state.user
    }}>{children}</GlobalContext.Provider>)
}