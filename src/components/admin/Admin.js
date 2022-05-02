import '../styles/main.css';
import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';
import Items from './Items';
import Messages from './Messages';
import { Route, Routes } from 'react-router-dom';
import AddItem from './AddItem';
import Login from './Login';


function Admin() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <Login/>
    )
  }

  return (
    <div>
      <TopBar open={open} onOpenChange={(opn) => setOpen(opn)}/>
      <SideBar open={open}/>
      <Routes>
        <Route path='items' element={<Items/>}/>
        <Route path='messages' element={<Messages/>}/>
        <Route path='addItem' element={<AddItem/>}/>
      </Routes>
    </div>
  )

}

export default Admin;
