import '../styles/main.css';
import React from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';
import Items from './Items';
import Messages from './Messages';
import { Route, Routes } from 'react-router-dom';
import AddItem from './AddItem';


function Admin() {

  return (
    <div>
      <TopBar/>
      <SideBar/>
      <Routes>
        <Route path='items' element={<Items/>}/>
        <Route path='messages' element={<Messages/>}/>
        <Route path='addItem' element={<AddItem/>}/>
      </Routes>
    </div>
  )

}

export default Admin;
