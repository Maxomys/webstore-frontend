import '../styles/main.css';
import React, { useState } from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';
import Items from './Items';
import Messages from './Messages';
import Categories from './Categories';
import Users from './Users';
import AddItem from './AddItem';
import Login from './Login';


const components = {
  'Items': Items,
  'Messages': Messages,
  'Categories': Categories,
  'Users': Users,
  'AddItem': AddItem,
  'Login': Login
};

function Admin() {

  const [content, setContent] = useState('Items');

  function sideBarOnClick(name) {
    setContent(name);
  }

  let View = components[content];

  return (
    <div>
      <TopBar/>
      <SideBar onLinkClick={sideBarOnClick} active={content}/>
      <View/>
    </div>
  )

}

export default Admin;
