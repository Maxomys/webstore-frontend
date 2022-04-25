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
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Navigate replace to="/admin/items"/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
