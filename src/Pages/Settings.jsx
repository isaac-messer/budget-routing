import AddSettingsForm from './Components/AddSettingsForm';
import { BudgetProvider } from './Context';

export const Settings = () => {
    return(
        <BudgetProvider>
            <div id="box">
                <div id="container">
                    <div id='header'>
                            <h1>Settings</h1>
                        </div>
                        <div>
                            <AddSettingsForm/>
                        </div>
                    </div> 
                </div>
            
        </BudgetProvider>
    )
}