import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid'

function SortDropdown({ sort, sortDir, onSortChange, onDirectionChange }) {
  
  return ( 
    <Menu>
      <div className='relative'>
        <Menu.Button className='flex items-center gap-2 font-semibold text-black/70 p-1'>Sort
          <ChevronDownIcon className='h-5 w-5 opacity-50'/>
        </Menu.Button>
        <Menu.Items className='bg-white w-64 rounded-md shadow-md p-2 divide-y-2 absolute top-8'>
          <div className='p-1 grid grid-cols-2'>
            <div className='flex flex-col justify-start items-start'>
              <p className='font-medium'>Sort By</p>
              <div>
                <div>
                  <input className='mx-1' type="radio" name="category" value='category' id='category' 
                    onChange={e => onSortChange(e.target.value)} checked={sort === 'category'}/>
                  <label htmlFor='category'>Category</label>
                </div>
                <div>
                  <input className='mx-1' type="radio" name="category" value='name' id='name' 
                    onChange={e => onSortChange(e.target.value)} checked={sort === 'name'}/>
                  <label htmlFor='name'>Name</label>
                </div>
                <div>
                  <input className='mx-1' type="radio" name="category" value='createdAt' id='createdAt' 
                    onChange={e => onSortChange(e.target.value)} checked={sort === 'createdAt'}/>
                  <label htmlFor='createdAt'>Time created</label>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-start items-start'>
              <p className='font-medium'>Order</p>
              <div>
                <input className='mx-1' type="radio" name="order" value='asc' id="asc" 
                  onChange={e => onDirectionChange(e.target.value)} checked={sortDir === 'asc'}/>
                <label htmlFor="asc">Ascending</label>
              </div>
              <div>
                <input className='mx-1' type="radio" name="order" value='desc' id="desc" 
                  onChange={e => onDirectionChange(e.target.value)} checked={sortDir === 'desc'}/>
                <label htmlFor="desc">Descending</label>
              </div>
            </div>
          </div>
        </Menu.Items>
      </div>
    </Menu>
  );
}

export default SortDropdown;
