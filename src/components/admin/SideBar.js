import '../styles/sidebar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useEffect } from 'react';

function SideBar({ open }) {

  useEffect(() => {
  }, [open]);

  return (
    <div className={'Sidebar_sidebar ' + (!open && 'Sidebar_hidden')}>
      <Link to='/'>
        <svg className='Sidebar_logo h-11 w-11' width='90' height='90' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </Link>
      <Link to='/admin/addItem' className='btn Sidebar_btn-add-item'>
        <svg className='Sidebar_icon-add h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4' />
        </svg>
        <p>Dodaj Przedmiot</p>
      </Link>
      
      <ul className='Sidebar_list'>
        <SidebarLink to='/admin/items' >
          <svg className='Sidebar_list-icon h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
          </svg>
          Przedmioty
        </SidebarLink>
        <SidebarLink to='/admin/messages' >
          <svg className='Sidebar_list-icon h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20' />
          </svg>
          Wiadomości
        </SidebarLink>
        <SidebarLink to='/admin/categories'>
          <svg className='Sidebar_list-icon h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
          </svg>
          Kategorie
        </SidebarLink>
        <SidebarLink to='/'>
          <svg className='Sidebar_list-icon h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' />
          </svg>
          Użytkownicy
        </SidebarLink>
      </ul>

    </div>
  );
}

function SidebarLink({ children, to }) {

  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} className={'Sidebar_list-item ' + (match && 'Sidebar_active')}>
      {children}
    </Link>
  );
}


export default SideBar;
