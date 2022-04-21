import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Login from "./components/admin/Login";
import AllItems from 'components/store/AllItems';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate replace to="/all"/>}/>
        <Route path='/all' element={<AllItems/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
