import React, { useContext } from "react";
import TransactionItem from './TransactionItem'
import { BudgetContext } from "../Context";

const TransactionList = () => {
    const { transactions } = useContext(BudgetContext);

    return (
        <ul className="transactionList">
            {transactions.map((transactions) => (
                <TransactionItem 
                    key={transactions.id}
                    category={transactions.category}
                    amount={transactions.amount}
                    id={transactions.id}
                />
            ))}
        </ul>
    );
};

export default TransactionList;