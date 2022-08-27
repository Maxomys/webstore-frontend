import { Dialog } from '@headlessui/react';
import { PhotographIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Constants from 'services/Constants';
import ItemService from 'services/ItemService';
import MessageService from 'services/MessageService';
import Navbar from './Navbar';

function ItemOverview( {} ) {

  const navigate = useNavigate();
  
  let params = useParams();
  
  const [item, setItem] = useState();
  const [imageLinks, setImageLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState({
    email: '',
    messageBody: ''
  });

  async function loadItem() {
    const itemId = parseInt(params.itemId);

    let item = await ItemService.getItemById(itemId);
    setItem(item);
    
    if (item.imageIds) {
      let links = [];
      for (const id of item.imageIds) {
        links.push({
          id: id,
          thumbnail: Constants.BASE_URL + Constants.IMAGE_URL + '/' + id + '/thumbnail', 
          fullSize: Constants.BASE_URL + Constants.IMAGE_URL + '/' + id
        });
      }
      setImageLinks(links);
    }

    setLoading(false);
  }

  function sendMessage(event) {
    event.preventDefault();
    
    message.productId = item.id;

    MessageService.postMessage(message);
    setIsOpen(false);
  }

  useEffect(() => {
    loadItem();
  }, []);
  
  if (loading) {
    return (
      <p>loading</p>
    );
  }

  return (
    <>
      <Navbar/>
      <div className='flex flex-col justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mt-12 p-4'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 w-xl justify-items-center'>
            {imageLinks.length > 0 ? 
              imageLinks.map(link => (
                <a key={link.id} href={link.fullSize} target='_blank' className='m-auto rounded-xl shadow-xl cursor-pointer'>
                  <img className='rounded-xl  object-cover' src={link.thumbnail} alt='' />
                </a>
              ))
            : <div className='w-52 h-52 bg-neutral-400 rounded-xl shadow-xl'>
                <PhotographIcon/>
              </div>
            }
          </div>
          <div className='flex flex-col justify-start items-start w-xl mt-8 md:mt-0'>
            <p className='text-4xl font-semibold'>{item.name}</p>
            <p className='text-l font-semibold mt-4'>{item.price} PLN</p>
            <p className='text-sm text-gray-500'>{item.inStock} Avaliable</p>
            <button className='mt-3 bg-teal-500 rounded-lg p-2 text-xl text-white shadow-lg hover:brightness-110' onClick={() => setIsOpen(true)}>Contact Seller</button>
            <p className='mt-4 text-sm font-semibold '>Description</p>
            <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='fixed z-10 inset-0 overflow-y-auto'>
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className='relative p-5 bg-white rounded-xl'>
            <form action='post' className='flex flex-col justify-start items-start gap-4' onSubmit={sendMessage}>
              <div>
                <label htmlFor="email"
                  className='block text-sm font-medium text-gray-700'
                >
                  Your email adress
                </label>
                <input type="email" name="email" id="email" placeholder='example@domain.com'
                  className='focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300'
                  onChange={e => setMessage(prev => ({...prev, email: e.target.value}))}
                />
              </div>
              <div>
                <label htmlFor="message"
                  className='block text-sm font-medium text-gray-700'
                >
                  Message body
                </label>
                <textarea name="message" id="message" rows='4' 
                  className='focus:ring-teal-500 focus:border-teal-500 flex-1 block w-96 rounded-md sm:text-sm border-gray-300'
                  onChange={e => setMessage(prev => ({...prev, messageBody: e.target.value}))}
                />
              </div>
              <button type="submit" className='mt-3 bg-teal-500 rounded-lg p-1 px-3 text-lg text-white shadow-lg hover:brightness-110 self-center'>
                Send
              </button>
            </form>
          </div>
        </div>
      </Dialog>
    </>
  );
}



export default ItemOverview;
