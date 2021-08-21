export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case 'SET_MONTHLYGOAL':
            return {
                ...state,
                user: action.payload
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                user: {...state.user, transactions: state.user.transactions.filter((transaction) => transaction.id !== action.payload)}
            }
        case 'ADD_TRANSACTION':
            return {
                ...state, 
                user: {...state.user, transactions: [...state.user.transactions, action.payload]}
            }
        default:
            return state;
    }
}