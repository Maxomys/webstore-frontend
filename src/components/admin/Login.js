import {  useState } from 'react';
import '../styles/login.css'
import AuthService from 'services/AuthService'
import { useNavigate } from 'react-router-dom';
import Constants from 'services/Constants';

function Login() {
  
  let navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  async function login(event) {
    event.preventDefault();

    let error = await AuthService.login(credentials);
    if (error) {
      setLoginError(true);
      return;
    }
    navigate('/admin');
  }

  async function demoLogin(event) {
    let demoCredentials = {
      username: Constants.DEMO_USERNAME,
      password: ''
    } 

    event.preventDefault();

    let error = await AuthService.login(demoCredentials);
    if (error) {
      setLoginError(true);
      return;
    }
    navigate('/admin');
  }

  return ( 
    <div className='Login_parent'>
      <form className='card Login_card' onSubmit={login}>
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
        {loginError &&
          <div className='Login_error-message'>
            <p className=''>Login error</p>
          </div>
        }
        <button className='btn Login_btn-login' type='submit'>Login</button>
        <button className='Login_btn-demo' onClick={demoLogin}>Demo User Login</button>
      </form>
    </div>
  );
}

export default Login;
