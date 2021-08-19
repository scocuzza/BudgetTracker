export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'GET_USER':
                return {
                    ...state,
                    loading: false,
                    user: action.payload
        }
        case 'SET_USER':
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
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION': 
         return {
             ...state, 
             transactions: [action.payload, ...state.transactions]
         }
        default:
            return state;
    }
}