import AddSettingsForm from './Components/AddSettingsForm';
import { BudgetProvider } from './Context';

export const Settings = () => {
    
    const UpdateInfo = (event) => {

    };

    return(
        <BudgetProvider>
            <div>
                <h1>Settings:</h1>
            </div>
            <div>
                <AddSettingsForm/>
            </div>
        </BudgetProvider>
    )
}