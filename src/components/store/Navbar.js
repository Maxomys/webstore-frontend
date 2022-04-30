import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, ShoppingBagIcon, XIcon, UserCircleIcon } from '@heroicons/react/outline'
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from 'services/AuthService';

const navigation = [
  {name: 'Home', href: '/'},
  {name: 'Items', href: '/all'},
  {name: 'Admin', href: '/admin'}
];


function Navbar({ currentTab }) {
  
  const navigate = useNavigate();
  
  const [username, setUsername] = useState(undefined);

  function checkUsername() {
    const username = localStorage.getItem('username');
    if (username) {
      setUsername(username);
    }
  }

  function logout() {
    AuthService.logout();
    navigate('/');
  }

  useEffect(() => {
    checkUsername();
  }, []);

  return ( 

    <Disclosure as='nav' className=''>
      {({open}) => (
        <>
          <div className={'flex items-center justify-between h-14 max-w-screen-2xl mx-auto md:mt-3 bg-gradient-to-r from-cyan-500 to-emerald-500 p-4 rounded-xl shadow-md' 
            + (open && ' rounded-b-none')}>
            <div className='flex items-center gap-3'>
              <ShoppingBagIcon className='h-7 w-7 text-white'/>
              <p className='text-white'>Store</p>
              <div className='ml-10 hidden md:block'>
                {navigation.map(item => (
                  <button key={item.name} className={'hover:bg-black hover:bg-opacity-30 rounded-xl px-5 mx-1 py-2 transition-opacity text-white '
                    + (item.name === currentTab && 'bg-opacity-20 bg-black')}
                    onClick={() => navigate(item.href)}
                  >{item.name}
                  </button>
                ))}
              </div>
            </div>
            {username ? 
              <Menu>
                <div className='relative'>
                  <Menu.Button className='hidden md:flex md:flex-row md:items-center gap-2'>
                    <UserCircleIcon className='h-8 w-8 text-white'/>
                    <p className='font-normal text-white'>{username}</p>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className='absolute bg-white rounded-lg p-3 top-10'>
                      <Menu.Item>
                        <button onClick={logout}>Logout</button>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </div>
              </Menu>
            : <div className='hidden md:flex divide-x-2 divide-black divide-opacity-10'>
                <button className='bg-black bg-opacity-20 rounded-l-xl px-5 py-2 transition-opacity hover:bg-opacity-30' 
                  onClick={() => navigate('/login')}
                >Login</button>
                <button className='bg-black bg-opacity-20 rounded-r-xl px-5 py-2 transition-opacity hover:bg-opacity-30'>Register</button>
              </div>
            }
            <div className='md:hidden self-center flex items-center'>
              <Disclosure.Button>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true"/>
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                )}
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel>
            <div className='md:hidden flex flex-col items-start space-y-1 px-3 pt-2 pb-3 rounded-b-xl bg-gradient-to-r from-cyan-500 to-emerald-500 p-4 shadow-md'>
              {navigation.map(item => (
                <button key={item.name} className={'hover:bg-black hover:bg-opacity-30 w-full rounded-xl px-4 py-2 transition-opacity text-left text-white '
                  + (item.name === currentTab && ' bg-opacity-20 bg-black')}
                  onClick={() => navigate(item.href)}
                >{item.name}</button>
              ))}
              {username ? 
                <div className='flex flex-row items-center gap-2 ml-2 pt-3'>
                  <UserCircleIcon className='h-8 w-8 text-white'/>
                  <p className='font-normal text-white'>{username}</p>
                </div>
              : <div className='w-full border-t border-white'>
                  <button className='hover:bg-black hover:bg-opacity-30 w-full rounded-xl px-4 py-2 transition-opacity text-left text-white'
                    onClick={() => navigate('/login')}
                  >Login</button>
                  <button className='hover:bg-black hover:bg-opacity-30 w-full rounded-xl px-4 py-2 transition-opacity text-left text-white'>Register</button>
                </div>
              }
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
