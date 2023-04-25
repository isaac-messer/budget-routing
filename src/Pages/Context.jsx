import { createContext, useReducer } from 'react';



const BudgetReducer = (state, action) => {
    
    
    switch (action.type) {
        case 'ADD_TRANSACTION':
            
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            };
            
        case 'DELETE_TRANSACTION':
            return {
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                ),
            };
        case 'UPDATE_BUDGET': localStorage.setItem('budget', JSON.stringify(action.payload.budget));
            return {
                ...state,
                budget: action.payload.income,
            }
        default:
            return state;
    };
};



const InitialState = {
    budget: 100,
    month: '',
    transactions: [],  
};

const GetInitialState = () => {
    let state = {
        budget: JSON.parse(localStorage.getItem('budget')),
        month: '',
        transactions: [],
    };
    
    return state ? state : InitialState;
}

export const BudgetContext = createContext();

export const BudgetProvider = (prop) => {
    const [state, dispatch] = useReducer(BudgetReducer, InitialState);

    return (
        <BudgetContext.Provider
            value={{
                transactions: state.transactions,
                budget: state.budget,
                dispatch,
            }}
        >   {prop.children}    
        </BudgetContext.Provider>
    )
}