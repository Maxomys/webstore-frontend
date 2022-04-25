import '../styles/items.css';
import ItemService from 'services/ItemService';
import React, { useState, useEffect } from 'react';
import Constants from 'services/Constants';

function Items() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    setItems(await ItemService.getAllItems());
    setLoading(false);
  }
  
  function deleteItemById(itemId) {
    setItems(items.filter(item => item.id !== itemId));
    ItemService.deleteItemById(itemId);
  }

  if (loading) {
    return (
      <div className='container-main'>
        <img src='loading.svg' width='70' height='70' alt=''/>
      </div>
    )
  }
  
  return (
    <>
      <div className='container-main'>
        <p className='Items_info'>{items.length} przedmioty</p>

        {items && items.map(item => (
          <div className='card Items_card-item' key={item.id}>
            <img className='Items_item-img' src={`${Constants.BASE_URL}/image/${item.imageIds[0]}`} alt='img'/>
            <div className='Items_card-text'>
              <p className='Items_title'>{item.name}</p>
              <p className='Items_category'>{item.categoryName}</p>
              <p className='Items_created-at'>{item.createdAt}</p>
            </div>
            <div className='Items_stats'>
              <p>Statystyki</p>
              <svg className='Items_stats-icon h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
              </svg>
              <p>{item.uniqueAddresses.length}</p>
              <svg className='Items_stats-icon h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
              </svg>
              <p>{item.inquiryIds.length}</p>
            </div>
            <div className='Items_card-buttons'>
              <div className='btn Items_btn-edit'>Edycja</div>
              <div className='btn Items_btn-remove' onClick={() => deleteItemById(item.id)}>Usuń</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Items;
