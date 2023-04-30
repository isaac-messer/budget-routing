import React, { useContext } from "react";
import { BudgetContext } from "../Context";

const Income = () => {
    const { transactions } = useContext(BudgetContext);
    let budget = JSON.parse(localStorage.getItem('budget'));

    const moreIncome = transactions.reduce((accumulator, current) => {
        
        if (current.amount > 0) {
            return (accumulator += current.amount); 
        } else if (current.amount < 0) {
            return (accumulator)
        };
        
  
    }, 0);

    return (
        <div className="IncomeTracker">
            <span>-Income- <br/> ${ ( budget + moreIncome ).toFixed(2) }</span>
        </div>
    );
};

export default Income;