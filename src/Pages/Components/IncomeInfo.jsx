import React, { useContext } from "react";
import { BudgetContext } from "../Context";

const Income = () => {
    const { budget, transactions } = useContext(BudgetContext);

    const moreIncome = transactions.reduce((accumulator, current) => {
        
        if (current.amount > 0) {
            return (accumulator += current.amount); 
        } else if (current.amount < 0) {
            return (accumulator)
        };
        
  
    }, 0);

    return (
        <div className="IncomeTracker">
            <span>-Income- <br/> ${ ( moreIncome ).toFixed(2) }</span>
        </div>
    );
};

export default Income;