import '../styles/login.css'

function Login() {
  
  
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
          <input type='text' className='Login_input-text'/>
        </div>
        <div className='Login_input-container'>
          <p className='Login_input-label'>Password</p>
          <input type='password' className='Login_input-text'/>
        </div>
        <div className='btn Login_btn-login'>Login</div>
      </div>
    </div>
  );
}

export default Login;
