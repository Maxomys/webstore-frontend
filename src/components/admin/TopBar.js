import '../styles/topbar.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenService from "services/TokenService";
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function TopBar({ open, onOpenChange }) {
  
  const navigate = useNavigate();

  const [username, setUsername] = useState();

  function checkUsername() {
    const lsUsername = localStorage.getItem('username');
    if (lsUsername) {
      setUsername(lsUsername);
    }
  }

  function login() {
    navigate('/login');
  }

  function logout() {
    TokenService.removeTokens();
    navigate('/');
  }
  
  useEffect(() => {
    checkUsername();
  }, []);
  
  return (
    <header>
      {open ? 
        <XIcon className='text-white TopBar_menu-icon' onClick={() => onOpenChange(false)}/> 
      : <MenuIcon className='text-white TopBar_menu-icon' onClick={() => onOpenChange(true)}/>
      }
      <svg className="TobBar_icon-user-avatar" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M54 30C54 36.3652 51.4714 42.4697 46.9706 46.9706C42.4697 51.4714 36.3652 54 30 54C23.6348 54 17.5303 51.4714 13.0294 46.9706C8.52856 42.4697 6 36.3652 6 30C6 23.6348 8.52856 17.5303 13.0294 13.0294C17.5303 8.52856 23.6348 6 30 6C36.3652 6 42.4697 8.52856 46.9706 13.0294C51.4714 17.5303 54 23.6348 54 30ZM36 21C36 22.5913 35.3679 24.1174 34.2426 25.2426C33.1174 26.3679 31.5913 27 30 27C28.4087 27 26.8826 26.3679 25.7574 25.2426C24.6321 24.1174 24 22.5913 24 21C24 19.4087 24.6321 17.8826 25.7574 16.7574C26.8826 15.6321 28.4087 15 30 15C31.5913 15 33.1174 15.6321 34.2426 16.7574C35.3679 17.8826 36 19.4087 36 21ZM30 33C27.1278 32.9994 24.3158 33.8235 21.8982 35.3742C19.4807 36.9249 17.5591 39.1372 16.362 41.748C18.05 43.7118 20.1428 45.2873 22.4968 46.3664C24.8509 47.4456 27.4104 48.0028 30 48C32.5896 48.0028 35.1491 47.4456 37.5032 46.3664C39.8572 45.2873 41.95 43.7118 43.638 41.748C42.4409 39.1372 40.5193 36.9249 38.1018 35.3742C35.6842 33.8235 32.8722 32.9994 30 33Z" fill="#E8F0F2"/>
      </svg>
      {username ? (
        <p className="TopBar_username">{username}</p>
      ) : (
        <p className="TobBar_username"></p>
      )}
      {username ? (
        <div className="btn TobBar_btn-logout" onClick={logout}>Logout</div>
      ) : (
        <div className="btn TobBar_btn-logout" onClick={login}>Login</div>
      )}
    </header>
  );
}

export default TopBar;
