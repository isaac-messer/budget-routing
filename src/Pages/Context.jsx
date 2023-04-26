import { createContext, useReducer } from 'react';



const BudgetReducer = (state, action) => {
    
    
    switch (action.type) {
        case 'UPDATE_SETTINGS_BUDGET': localStorage.setItem('budget', JSON.stringify(action.payload.budget));
            return {
                ...state,
                budget: action.payload.budget,
            };
        case 'UPDATE_SETTINGS_TITLE': localStorage.setItem('title', JSON.stringify(action.payload.title));
            return {
                ...state,
                title: action.payload.title
            };
        case 'UPDATE_SETTINGS_USER': localStorage.setItem('user', JSON.stringify(action.payload.user));
            return {
                ...state,
                user: action.payload.user,
            };
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
        default:
            return state;
    };
};



const InitialState = {
    budget: 0,
    title: 'Enter Title',
    user: 'Enter User',
    transactions: [],  
};

const GetInitialState = () => {
    let state = {
        budget: JSON.parse(localStorage.getItem('budget')),
        title: JSON.parse(localStorage.getItem('title')),
        user: JSON.parse(localStorage.getItem('user')),
        transactions: [],
    };
    
    return state ? state : InitialState;
}

export const BudgetContext = createContext();

export const BudgetProvider = (prop) => {
    const [state, dispatch] = useReducer(BudgetReducer, GetInitialState());

    return (
        <BudgetContext.Provider
            value={{
                transactions: state.transactions,
                budget: state.budget,
                title: state.title,
                user: state.user,

                dispatch,
            }}
        >   {prop.children}    
        </BudgetContext.Provider>
    )
}