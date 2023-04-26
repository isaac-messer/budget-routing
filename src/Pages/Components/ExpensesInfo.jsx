import React, { useContext } from "react";
import { BudgetContext } from "../Context";

const Expenses = () => {
    const { transactions } = useContext(BudgetContext);

    const expenses = transactions.reduce((accumulator, current) => {
        
        if (current.amount < 0) {
            return (accumulator += current.amount); 
        } else if (current.amount > 0) {
            return (accumulator)
        };
        
  
    }, 0);

    return (
        <div className="expensesTracker">
            <span>-Expenses- <br/> -${Math.abs(expenses).toFixed(2)}</span>
        </div>
    );
};

export default Expenses;