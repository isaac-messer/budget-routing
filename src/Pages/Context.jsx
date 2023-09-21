import { createContext, useReducer } from 'react';



const BudgetReducer = (state, action) => {
    
    
    switch (action.type) {

// Settings Value Actions
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

// Transaction History Actions
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

// Default Value
        default:
            return state;
    };
};

const GetInitialState = () => {
    
    let state = []

    if  (
        JSON.parse(localStorage.getItem('transactions')) == null 
        || JSON.parse(localStorage.getItem('budget')) == null 
        || JSON.parse(localStorage.getItem('title')) == null 
        || JSON.parse(localStorage.getItem('user')) == null
    ){

        localStorage.setItem('budget', JSON.stringify(0));
        localStorage.setItem('title', JSON.stringify('Enter Title'));
        localStorage.setItem('user', JSON.stringify('Enter User'));
        localStorage.setItem('transactions', JSON.stringify([]))

        let defaultState = {
            budget: 0,
            title: 'Enter Title',
            user: 'Enter User',
            transactions: [],
        };

        console.log(`Using Default`)

        state = defaultState;

    } else if (
        JSON.parse(localStorage.getItem('transactions')) != null 
        && JSON.parse(localStorage.getItem('budget')) != null 
        && JSON.parse(localStorage.getItem('title')) != null 
        && JSON.parse(localStorage.getItem('user')) != null
    ){

        let localstorageState = {
            budget: JSON.parse(localStorage.getItem('budget')),
            title: JSON.parse(localStorage.getItem('title')),
            user: JSON.parse(localStorage.getItem('user')),
            transactions: JSON.parse(localStorage.getItem('transactions')),
        };

        console.log(`Using Local`)

        state = localstorageState

    } else {
        alert ('ERROR: Application State Could Not Be Determined')
    };

    return state
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