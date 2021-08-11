import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    transactions: [
        {
            id: 1, transactionText: 'Transaction1', transactionAmount: 30,
        }, {
            id: 2, transactionText: 'Transaction2', transactionAmount: 20
        }, {
            id: 3, transactionText: 'Transaction3', transactionAmount: 10
        }
        , {
            id: 4, transactionText: 'Transaction4', transactionAmount: -50
        }
    ]
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (<GlobalContext.Provider value={{ 
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>{children}</GlobalContext.Provider>)
}