import { useEffect, useState } from 'react';
import '../styles/login.css'
import UserService from 'services/UserService'
import { useNavigate } from 'react-router-dom';

function Login() {
  
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  async function login() {
    await UserService.login(credentials);
    navigate('/admin');
  }

  return ( 
    <div className='Login_parent'>
      <div className='card Login_card'>
        <div className='Login_icon'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2>Please Sign In</h2>
        <div className='Login_input-container'>
          <p className='Login_input-label'>Login</p>
          <input type='text' className='Login_input-text' onChange={e => setCredentials(prev => ({...prev, username: e.target.value}))}/>
        </div>
        <div className='Login_input-container'>
          <p className='Login_input-label'>Password</p>
          <input type='password' className='Login_input-text' onChange={e => setCredentials(prev => ({...prev, password: e.target.value}))}/>
        </div>
        <div className='btn Login_btn-login' onClick={login}>Login</div>
      </div>
    </div>
  );
}

export default Login;
