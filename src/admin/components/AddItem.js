import '../styles/additem.css';
import React, { useState, useEffect } from 'react';
import CategoryService from '../services/CategoryService';
import ItemService from '../services/ItemService';

function AddItem() {
  
  const [newItem, setNewItem] = useState({
    'name': '',
    'price': null,
    'description': '',
    'creatorName': '',
    'categoryId': null
  });

  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  
  function addSingleImage(e) {
    setImages([...images, e.target.files[0]])
  }

  async function loadCategories() {
    setCategories(await CategoryService.getAllCategories());
  }

  async function postNewItem() {
    ItemService.postItem(newItem, images);
  }

  function deleteImage(imgIndex) {
    setImages(prev => prev.filter((img, index) => index !== imgIndex));
  }

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    console.log(newItem);
  }, [newItem]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div className='container-main'>
      <p className='AddItem_title'>Dodaj ogłoszenie</p>
      <div className='card AddItem_card'>
        <p className='AddItem_label'>Nazwa</p>
        <input className='AddItem_text-field' type='text' onChange={e => setNewItem(prev => ({...prev, name: e.target.value}))}/>
        <p className='AddItem_label'>Kategoria</p>
        <select className='AddItem_text-field AddItem_category-select' onChange={e => setNewItem(prev => ({...prev, categoryId: e.target.value}))}>
          {categories ? categories.map(category => (
            <option value={category.id} key={category.id}>{category.description}</option>
          )) : <></>}
        </select>
        <p className='AddItem_label'>Cena</p>
        <input className='AddItem_text-field AddItem_price' type='number' step='0.01' onChange={e => setNewItem(prev => ({...prev, price: e.target.value}))}/>
      </div>
      <div className="card AddItem_card AddItem_image-card">
        <p className='AddItem_label'>Zdjęcia</p>
        <div className='AddItem_image-list'>
          {images ? images.map((image, index) => (
            <div className="AddItem_thumbnail" key={index} onClick={() => deleteImage(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="AddItem_remove-icon h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <img src={URL.createObjectURL(image)} alt=''/>
            </div>
          )) : <></>}
          <div className="AddItem_add-image">
            <label for='image-upload'>
              <svg className='AddItem_add-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </label>
            <input id='image-upload' type='file' onChange={e => addSingleImage(e)}/>
          </div>
        </div>
      </div>
      <div className="card AddItem_card">
        <p className='AddItem_label'>Opis</p>
        <textarea className='AddItem_text-field AddItem_description' type="text" onChange={e => setNewItem(prev => ({...prev, description: e.target.value}))}/>
      </div>
      <div className="btn AddItem_btn-add" onClick={postNewItem}>Dodaj</div>
    </div>
  );
}

export default AddItem;
