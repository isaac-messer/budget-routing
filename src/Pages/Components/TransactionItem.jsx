import React, { useContext } from "react";
import { BudgetContext } from "../Context";

const TransactionItem = (prop) => {
    const { dispatch } = useContext(BudgetContext);

    const deleteTransaction = () => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: prop.id,
        });
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