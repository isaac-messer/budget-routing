import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Settings } from './Pages/Settings';
import { NavBar } from './Pages/Components/NavBar';
import { BudgetProvider } from './Pages/Context';

function App() {
  return (
    <>
      <BudgetProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
      </BudgetProvider>
      
    </>
    
  );
}

export default App;
