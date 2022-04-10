import React from "react";
import Navbar from "./Navbar";
import { Menu } from '@headlessui/react';
import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon'

function AllItems() {
  return ( 
    <React.Fragment>
      <Navbar/>
      <div className='flex-col '>
        <h2 className='text-3xl font-medium text-black/70 font-sans'>All items</h2>
        <hr className='w-11/12'/>
        <div>
          <div>
            <Menu>
              <Menu.Button className='flex items-center gap-2 font-semibold text-black/70 p-1'>Categories
                <ChevronDownIcon className='h-5 w-5 opacity-50'/>
              </Menu.Button>
              <Menu.Items>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && 'bg-blue-500'}`}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </React.Fragment>
   );
}

export default AllItems;