import { PhotographIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Constants from 'services/Constants';

function ItemCard({ item }) {

  const navigate = useNavigate();

  const [imageLink, setImageLink] = useState();

  useEffect(() => {
    if (item.imageIds[0]){
      setImageLink(Constants.BASE_URL + Constants.IMAGE_URL + '/' + item.imageIds[0]);
    }
  }, []);
  
  return (
    <div className='w-72 flex flex-col justify-between gap-2 bg-white hover:bg-slate-50 rounded-xl shadow-md p-5' onClick={() => navigate('/item/' + item.id)}>
      <div className='flex flex-col justify-start gap-2'>
        <div className='w-56 mb-4 mx-auto bg-neutral-400 rounded-xl shadow-xl'>
          {imageLink ?
            <img className='rounded-xl' src={imageLink} alt='' />
            : <PhotographIcon/>
          }
        </div>
        <p className='text-xl font-medium'>{item.name}</p>
        <p className='text-sm font-extralight max-h-56 overflow-clip'>
          {item.description}
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col items-start'>
            <p className='text-xs font-light'>Price</p>
            <p className='text-base font-bold'>{item.price} PLN</p>
          </div>
          <button className='bg-teal-500 rounded-lg p-2 text-base text-white shadow-lg hover:brightness-110'>Details</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
