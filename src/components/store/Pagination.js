/* eslint-disable jsx-a11y/anchor-is-valid */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

function Pagination({ currentPage, totalPages, onPageChange }) {
  
  function handlePrev() {
    onPageChange(currentPage - 1);
  }

  function handleNext() {
    onPageChange(currentPage + 1);
  }

  function pageButtons() {
    let elems = [];
    for (let i = 1; i <= totalPages; i++) {
      //Different style for current page button
      if (i === currentPage + 1) {
        elems.push(
          <a
            className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer'
          >{i}</a>
        )
        continue;
      }
      elems.push(
        <a
          className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer'
          onClick={() => onPageChange(i - 1)}
        >{i}</a>
      )
    }
    return elems;
  }
  
  return ( 
    <div className='px-4 py-3 flex items-center justify-around sm:px-6'>
      <div className='flex-1 flex justify-between sm:hidden'>
        <a onClick={handlePrev}
          className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer'
        >Previous</a>
        <a onClick={handleNext}
          className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer'
        >Next</a>
      </div>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-around'>
        <div>
          <nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
            <a onClick={handlePrev}
              className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer'
            >
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </a>
            {pageButtons()}
            <a onClick={handleNext}
              className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer'
            >
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </a>
          </nav>
        </div>
      </div>
    </div>
   );
}

export default Pagination;
