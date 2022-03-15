function SideBar({onLinkClick, active}) {
  
  return (
    <div className='sidebar'>
      <svg className='' width='90' height='90' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <div className='btn btn-add-item' onClick={() => onLinkClick('AddItem')}>
        <svg className='icon-add h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4' />
        </svg>
        <p>Dodaj Przedmiot</p>
      </div>
      
      <ul className='sidebar-list'>
        <li className={`sidebar-list-item ${active === 'Items' ? 'sidebar-active' : ''}`} onClick={() => onLinkClick('Items')}>
          <svg className='sidebar-list-icon h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
          </svg>
          Przedmioty
        </li>
        <li className={`sidebar-list-item ${active === 'Messages' ? 'sidebar-active' : ''}`} onClick={() => onLinkClick('Messages')}>
          <svg className='sidebar-list-icon h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20' />
          </svg>
          Wiadomości
        </li>
        <li className={`sidebar-list-item ${active === 'Categories' ? 'sidebar-active' : ''}`} onClick={() => onLinkClick('Categories')}>
          <svg className='sidebar-list-icon h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
          </svg>
          Kategorie
        </li>
        <li className={`sidebar-list-item ${active === 'Users' ? 'sidebar-active' : ''}`} onClick={() => onLinkClick('Users')}>
          <svg className='sidebar-list-icon h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' />
          </svg>
          Użytkownicy
        </li>
      </ul>

    </div>
  );
}

export default SideBar;
