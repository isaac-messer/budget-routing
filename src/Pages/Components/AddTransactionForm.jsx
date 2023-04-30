import React, { useContext, useState } from "react";
import { BudgetContext } from "../Context";
import { v4 as uuidv4 } from 'uuid';

const AddTransactionForm = () => {
    const { dispatch } = useContext(BudgetContext);

    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const addTransaction = (event) => {
        event.preventDefault();
        console.log(category, amount);

        const transaction = {
            category: category,
            amount: Number(amount),
            id: uuidv4(),
        };

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });

            let transactionStateADD = JSON.parse(localStorage.getItem('transactions')) ? JSON.parse(localStorage.getItem('transactions')) : [] ;
            transactionStateADD.push(transaction);
            localStorage.setItem('transactions', JSON.stringify(transactionStateADD));

        setCategory('');
        setAmount('');

    };

    return (
        <form onSubmit={addTransaction}>
            <div id='transactionCatagoryInput'>
                <label htmlFor='category'>Category</label>
                <input 
                    required='required'
                    type='text' 
                    id='category'
                    placeholder="Descrition"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
            </div>
            <div id="transactionValueInput">
                <label htmlFor='amount'>Amount</label>
                <input 
                required='required'
                type='text'
                id='amount'
                placeholder="Price (-)"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                />
            </div>
            <div id="transactionSubmitButton">
                <button type="submit">Save</button>
            </div>
        </form>
    );
};

export default AddTransactionForm;