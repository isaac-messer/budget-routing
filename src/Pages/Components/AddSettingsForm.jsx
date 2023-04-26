import react, { useContext, useState } from 'react';
import { BudgetContext } from '../Context';

const AddSettingsForm = () => {
    const { budget, title, dispatch } = useContext(BudgetContext);
    
    const [ newTitle, setNewTitle ] = useState('');
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
            <form id='settingsForm' onSubmit={UpdateInfo}>
                <div id="titleInput">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        id="title" 
                        placeholder={`${(title)}`} 
                        value={newTitle}
                        onChange={(event) => setNewTitle(event.target.value)}
                    />   
                </div>
                <div id="budgetInput">
                    <label htmlFor="budget">Budget</label>
                    <input 
                        type="text"
                        id="budget" 
                        placeholder={`$${(budget)}`} 
                        value={income}
                        onChange={(event) => setIncome(event.target.value)}
                    />    
                </div>
                <div id="settingsUpdateButton">
                    <button>Update</button>    
                </div>
            </form>
        </>
    );
};

export default AddSettingsForm;