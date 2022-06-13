import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from 'services/AuthService';

function Register() {

  let navigate = useNavigate();
  
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmedPassowrd: ''
  });

  const [passwordError, setPasswordError] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  async function register(event) {
    event.preventDefault();

    if(credentials.confirmedPassowrd !== credentials.password) {
      setPasswordError(true);
      return;
    }

    let error = await AuthService.register(credentials);

    if (error) {
      setRegisterError(true);
      console.log(error);
      return;
    }

    setIsDialogOpen(true);
  }

  function onDialogClose() {
    setIsDialogOpen(false);
    navigate('/login');
  }

  return (
    <>
      <form className='flex flex-col content-start items-center gap-1 py-12 max-w-md mx-auto' onSubmit={register}>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Create account</h2>
        <div className='w-full flex flex-col content-center items-start p-3'>
          <p className='text-sm text-gray-600 font-semibold mb-1'>Username</p>
          <input className='w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm' 
            type="text" name="" id=""
            onChange={e => setCredentials(prev => ({...prev, username: e.target.value}))}/>
        </div>
        <div className='w-full flex flex-col content-center items-start p-3'>
          <p className='text-sm text-gray-600 font-semibold mb-1'>Email address</p>
          <input className='w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm' 
            type="email" name="" id=""
            onChange={e => setCredentials(prev => ({...prev, email: e.target.value}))}/>
        </div>
        <div className='w-full flex flex-col content-center items-start p-3'>
          <p className='text-sm text-gray-600 font-semibold mb-1'>Password</p>
          <input className='w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm' 
            type="password" name="" id=""
            onChange={e => setCredentials(prev => ({...prev, password: e.target.value}))}/>
        </div>
        <div className='w-full flex flex-col content-center items-start p-3'>
          <p className='text-sm text-gray-600 font-semibold mb-1'>Confirm Password</p>
          <input className={'w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:z-10 sm:text-sm border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 '
            + (passwordError && ' border-red-500 focus:ring-red-500 focus:border-red-600')} 
            type="password" name="" id=""
            onChange={e => setCredentials(prev => ({...prev, confirmedPassowrd: e.target.value}))}/>
        </div>
        {registerError && 
          <div className='w-full px-3 py-2'>
            <p className='text-red-500'>Registration error</p>
          </div>
        }
        <div className='w-full flex flex-col content-center p-3'>
          <button className=' bg-teal-500 rounded-md py-2 text-white hover:bg-teal-600 ' type="submit">Register</button>
        </div>
      </form>
      
      <Dialog open={isDialogOpen} onClose={onDialogClose} className='fixed z-10 inset-0 overflow-y-auto'>
        <div className='flex items-center justify-center min-h-screen'>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className='relative p-5 bg-white rounded-xl flex flex-col items-center gap-4'>
            <p className='text-md text-gray-600 font-semibold'>Account created successfully</p>
            <button className='mt-3 bg-teal-500 rounded-lg p-1 px-3 text-lg text-white shadow-sm hover:brightness-110'
              onClick={onDialogClose}
            >Login</button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Register;
