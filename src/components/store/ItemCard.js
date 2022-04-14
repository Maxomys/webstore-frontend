import { PhotographIcon } from '@heroicons/react/solid'

function ItemCard({ item }) {
  return (
    <div className='w-72 flex flex-col gap-2 bg-white rounded-xl shadow-md p-5'>
      <div className='w-56 mb-4 mx-auto bg-neutral-400 rounded-xl shadow-xl'>
        <PhotographIcon/>
      </div>
      <p className='text-xl font-medium'>{item.name}</p>
      <p className='text-sm font-extralight text-clip'>
        {item.description}
      </p>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col items-start'>
          <p className='text-xs font-light'>Price</p>
          <p className='text-base font-bold'>{item.price} PLN</p>
        </div>
        <button className='bg-teal-500 rounded-lg p-2 text-base text-white shadow-lg'>Message</button>
      </div>
    </div>
  );
}

export default ItemCard;
