import React, { useContext } from "react";
import { BudgetContext } from "../Context";

const TransactionItem = (prop) => {
    const { dispatch } = useContext(BudgetContext);

    const deleteTransaction = () => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: prop.id,
        });

    let transactionStateDELETE = JSON.parse(localStorage.getItem('transactions')) ? JSON.parse(localStorage.getItem('transactions')) : [] ;
    console.log(transactionStateDELETE);
    console.log(prop.id);
    let newTransactionState = transactionStateDELETE.filter(
            (transactions) => transactions.id != prop.id
    );
    localStorage.setItem('transactions', JSON.stringify(newTransactionState));
    };

    return (
        <li className="transactionItem">
            {prop.category}
            <div className="transactionItemButton">
                <span>
                    ${(prop.amount).toFixed(2)}  
                </span>
                <button onClick={deleteTransaction}>X</button>
            </div>
        </li>
    );
};

export default TransactionItem;