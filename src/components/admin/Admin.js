import '../styles/main.css';
import React, { useState } from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';
import Items from './Items';
import Messages from './Messages';
import Categories from './Categories';
import Users from './Users';
import AddItem from './AddItem';


const components = {
  'Items': Items,
  'Messages': Messages,
  'Categories': Categories,
  'Users': Users,
  'AddItem': AddItem
};

function Admin() {

  const [content, setContent] = useState('Items');

  function sideBarOnClick(name) {
    setContent(name);
  }

  let View = components[content];

  return (
    <div>
      <View/>
      <TopBar/>
      <SideBar onLinkClick={sideBarOnClick} active={content}/>
    </div>
  )

}

export default Admin;
