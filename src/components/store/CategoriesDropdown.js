import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

function CategoriesDropdown({ categories }) {

  return ( 
    <Menu>
      <div className='relative'>
        <Menu.Button className='flex items-center gap-2 font-semibold text-black/70 relative'>Categories
          <ChevronDownIcon className='h-5 w-5 opacity-50'/>
        </Menu.Button>
        <Menu.Items className='bg-white w-48 rounded-md shadow-md p-2 divide-y-2 absolute top-8'>
          <div className='p-1 border-b'>
            <Menu.Item>
              {({ active }) => (
                <Link to={'/all'}>
                  <button
                    className={`${
                      active ? 'bg-teal-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    All
                  </button>
                </Link>
              )}
            </Menu.Item>
          </div>
          {categories.map((category, index) => (
            <div key={category.id} className='p-1'>
              <Menu.Item>
                {({ active }) => (
                  <Link to={'/all/' + category.id}>
                    <button
                      className={`${
                        active ? 'bg-teal-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {category.description}
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </div>
    </Menu>
   );
}

export default CategoriesDropdown;
