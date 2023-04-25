import react, { useContext, useState } from 'react';
import { BudgetContext } from '../Context';

const AddSettingsForm = () => {
    const { budget, month, dispatch } = useContext(BudgetContext);
    
    const [ income, setIncome ] = useState('');

    const UpdateInfo = (event) => {
        event.preventDefault();
        console.log(income);

        const information = {
            income: Number(income)
        };

        dispatch({
            type: 'UPDATE_BUDGET',
            payload: information,
        })
        // localStorage.setItem('income', JSON.stringify(budget));
        setIncome('');
    }

    return (
        <>
            <form>
                <label htmlFor="month">Month:</label>
                <select name="monthValue" id="month" placeholder='test'>
                    {/* <option label={month}></option> */}
                    <option value="0">January</option>
                    <option value="1">Febuary</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6">July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                </select>
                <button>Save</button>
            </form>
            <form onSubmit={UpdateInfo}>
                <label htmlFor="budget">Budget:</label>
                <input 
                    type="text"
                    id="budget" 
                    placeholder={`$${(budget)}`} 
                    value={income}
                    onChange={(event) => setIncome(event.target.value)}
                 />
                <button>Update</button>
            </form>
        </>
    );
};

export default AddSettingsForm;