import React, { useContext } from "react";
import { BudgetContext } from "../Context";

const Budget = () => {
    const { transactions, budget } = useContext(BudgetContext);
    console.log(budget);
    
    const expenses = transactions.reduce((accumulatorExpense, current) => {    
        if (current.amount < 0) {
            // console.log(`${current.amount} is negative`);
            return (accumulatorExpense += current.amount); 
            
        } else if (current.amount > 0) {
            return (accumulatorExpense)
        };
    }, 0);
    const moreIncome = transactions.reduce((accumulatorIncome, current) => {   
        if (current.amount > 0) {
            // console.log(`${current.amount} is positive`);
            return (accumulatorIncome += current.amount); 
        } else if (current.amount < 0) {
            return (accumulatorIncome)
        };
    }, 0);

    return (
        <div className="balanceTracker">
            <span>-Balance- <br/> ${ ( moreIncome + expenses ).toFixed(2)}</span>
        </div>
    );
};

export default Budget;