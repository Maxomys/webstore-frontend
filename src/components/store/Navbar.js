import { ShoppingBagIcon } from '@heroicons/react/outline'

const navigation = [
  {name: 'Home', href: '/', current: false},
  {name: 'Items', href: '/all', current: false},
  {name: 'Admin', href: '/admin', current: false}
]

function Navbar() {
  return ( 
  <nav className='flex items-center justify-between h-14 max-w-screen-2xl mx-auto mt-3 bg-gradient-to-r from-cyan-500 to-emerald-500 p-4 rounded-xl shadow-md'>
    <div className='flex items-center gap-3'>
      <ShoppingBagIcon className='h-7 w-7 text-white'/>
      <p className='text-white'>Store</p>
    </div>
    <div>
      {navigation.map(item => (
        <a className='text-gray-300 hover:bg-gray-700 hover:text-white 
          px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>{item.name}</a>
      ))}
    </div>
    <div className='flex divide-x-2 divide-black divide-opacity-10'>
      <button className='bg-black bg-opacity-20 rounded-l-xl px-5 py-2 transition-opacity hover:bg-opacity-30'>Login</button>
      <button className='bg-black bg-opacity-20 rounded-r-xl px-5 py-2 transition-opacity hover:bg-opacity-30'>Register</button>
    </div>
  </nav>
  );
}

export default Navbar;
