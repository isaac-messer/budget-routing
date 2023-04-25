import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Settings } from './Pages/Settings';
import { NavBar } from './Pages/Components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
    </>
    
  );
}

export default App;
