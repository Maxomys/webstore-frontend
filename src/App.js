import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Login from "./components/admin/Login";
import AllItems from 'components/store/AllItems';
import ItemOverview from 'components/store/ItemOverview';
import Register from 'components/store/Register';
import Test from 'components/store/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate replace to="/all"/>}/>
        <Route path='/all' element={<AllItems/>}/>
        <Route path='/all/:categoryId' element={<AllItems/>}/>
        <Route path='/item/:itemId' element={<ItemOverview/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<Navigate replace to="/admin/items"/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
