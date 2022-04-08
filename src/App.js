import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './admin/components/Admin';
import Login from "./admin/components/Login";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
