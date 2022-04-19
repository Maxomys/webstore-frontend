import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function PageSizeDropdown({ pageSize, onPageSizeChange }) {
  
  return ( 
    <Menu>
      <div className='relative'>
        <Menu.Button className='flex items-center gap-2 font-semibold text-black/70 p-1'>Page Size
          <ChevronDownIcon className='h-5 w-5 opacity-50'/>
        </Menu.Button>
        <Menu.Items className='bg-white w-24 rounded-md shadow-md p-2 divide-y-2 absolute top-8'>
          <div className='p-1 '>
            <p className="font-medium">Page Size</p>
            <div>
              <input className='mx-1' type="radio" name="page-size" value={2} id='size-2' 
                onChange={e => onPageSizeChange(parseInt(e.target.value))} checked={pageSize === 2}/>
              <label htmlFor='size-2'>2</label>
            </div>
            <div>
              <input className='mx-1' type="radio" name="page-size" value={4} id='size-4' 
                onChange={e => onPageSizeChange(parseInt(e.target.value))} checked={pageSize === 4}/>
              <label htmlFor='size-4'>4</label>
            </div>
            <div>
              <input className='mx-1' type="radio" name="page-size" value={8} id='size-8' 
                onChange={e => onPageSizeChange(parseInt(e.target.value))} checked={pageSize === 8}/>
              <label htmlFor='size-8'>8</label>
            </div>
          </div>
        </Menu.Items>
      </div>
    </Menu>
  );
}

export default PageSizeDropdown;
