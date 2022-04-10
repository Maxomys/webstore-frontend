function Navbar() {
  return ( 
  <nav className='flex items-center justify-between h-14 w-11/12 mx-auto mt-3 bg-gradient-to-r from-cyan-500 to-emerald-500 p-4 rounded-xl shadow-md'>
    <div className='flex items-center gap-3'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <p className='text-white'>Store</p>
    </div>
    <div className='flex divide-x-2 divide-black divide-opacity-10'>
      <button className='bg-black bg-opacity-20 rounded-l-xl px-5 py-2 transition-opacity hover:bg-opacity-30'>Login</button>
      <button className='bg-black bg-opacity-20 rounded-r-xl px-5 py-2 transition-opacity hover:bg-opacity-30'>Register</button>
    </div>
  </nav>
  );
}

export default Navbar;
