import react, { useContext, useState } from 'react';
import { BudgetContext } from '../Context';

const AddSettingsForm = () => {
    const { budget, title, user, dispatch } = useContext(BudgetContext);
    
    const [ newUser, setUser] = useState('');
    const [ newTitle, setTitle ] = useState('');
    const [ newBudget, setBudget ] = useState('');

    const UpdateInfo = (event) => {
        event.preventDefault();

        const information = {
            budget: Number(newBudget),
            title: newTitle,
            user: newUser,
        };

        if (newUser !== ''){
            dispatch({
                type: 'UPDATE_SETTINGS_USER',
                payload: information,
            });

            console.log(newUser);
            setUser('');
            window.location.reload();
        };
        if (newTitle !== ''){
            dispatch({
                type: 'UPDATE_SETTINGS_TITLE',
                payload: information,
            });

            console.log(newTitle);
            setTitle('');
            window.location.reload();
        };
        if (newBudget !== ''){
            dispatch({
                type: 'UPDATE_SETTINGS_BUDGET',
                payload: information,
            });

            console.log(newBudget);
            setBudget('');
        };
    };

    return (
        <>
            <form id='settingsForm' onSubmit={UpdateInfo}>
                <div id="userInput">
                    <label htmlFor="user">User</label>
                    <input 
                        type="text"
                        id="user" 
                        placeholder={`${(user)}`} 
                        value={newUser}
                        onChange={(event) => setUser(event.target.value)}
                    />   
                </div>
                <div id="titleInput">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        id="title" 
                        placeholder={`${(title)}`} 
                        value={newTitle}
                        onChange={(event) => setTitle(event.target.value)}
                    />   
                </div>
                <div id="budgetInput">
                    <label htmlFor="budget">Budget</label>
                    <input 
                        type="text"
                        id="budget" 
                        placeholder={`$${(budget).toFixed(2)}`} 
                        value={newBudget}
                        onChange={(event) => setBudget(event.target.value)}
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