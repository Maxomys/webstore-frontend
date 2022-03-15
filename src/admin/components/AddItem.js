import '../styles/additem.css';

function AddItem() {
  
  
  return (
    <div className='container-main'>
      <p className='AddItem_title'>Add </p>
      <div className='card'>
        <p className='AddItem_label'>Nazwa</p>
        <input className='AddItem_text-field AddItem_description' type='text'/>
        <p className='AddItem_label'>Cena</p>
        <input className='AddItem_text-field AddItem_price' type='text'/>
      </div>
      <div className="card AddItem_images">
        <p>Zdjęcia</p>
        <div className="AddItem_thumbnail"></div>
        <div className="AddItem_add-image">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <div className="card">
        <p className='AddItem_label'>Opis</p>
        <input className='AddItem_text-field AddItem_description' type="text"/>
        <p className='AddItem_label'>Cena</p>
        <input className='AddItem_text-field AddItem_price' type="text"/>
      </div>
    </div>
  );
}

export default AddItem;
