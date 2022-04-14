import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid'

function SortDropdown() {
  return ( 
    <Menu>
      <Menu.Button className='flex items-center gap-2 font-semibold text-black/70 p-1'>Sort
        <ChevronDownIcon className='h-5 w-5 opacity-50'/>
      </Menu.Button>
      <Menu.Items className='bg-white w-48 rounded-md shadow-md p-2 divide-y-2'>
        <div className='p-1'>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-teal-500 text-white' : 'text-gray-900'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              
            </button>
          )}
        </Menu.Item>
      </div>
      </Menu.Items>
    </Menu>
   );
}

export default SortDropdown;