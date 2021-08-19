import React, { createContext, useReducer, useEffect } from 'react'
import { AppReducer } from './AppReducer';
import axios from 'axios'
//Initial State
const initialState = {
    transactions: [],
    user: {},
    error: null,
    loading: true
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    useEffect(()=>{
        getTransactions();
        getUser();
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
    async function getUser(id) {
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
            const res = await axios.post('/api/v1/transactions', transaction);
            console.log(res.data)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response
            })
        }
    }
    function setUser(user) {
        console.log(user)
        dispatch({
            type:'SET_USER',
            payload: user
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        monthlyGoalAmount: state.monthlyGoalAmount,
        deleteTransaction,
        addTransaction,
        setUser,
        getTransactions,
        error: state.error,
        loading: state.loading,
        user: state.user
    }}>{children}</GlobalContext.Provider>)
}