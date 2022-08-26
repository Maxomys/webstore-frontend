import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ItemService from "services/ItemService";

function Searchbar() {

  const navigate = useNavigate();

  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  async function getData() {
    setData(await ItemService.searchItemsByName(query));
  }

  useEffect(() => {
    if (query.length > 0) {
      getData();
    } else {
      setData([]);
    }
  }, [query]);
  
  return (
    <>
    <div className='relative flex flex-col items-center'>
      <input className='border  border-gray-300 rounded-md max-w-sm self-center bg-gray-50 px-4  text-gray-600 text-sm focus:ring-teal-600 focus:border-teal-600' 
        type='text' placeholder='Search' onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}/>
      {data.length > 0 && focused &&
        <div className='md:w-1/3 absolute top-10 mx-auto mt-1 flex flex-col p-3 bg-white border rounded-xl border-gray-300'>
          {data.map(elem => (
            <div key={elem.id} className='px-5 py-2 hover:bg-teal-100 rounded-xl cursor-pointer'
              onMouseDown={() => navigate('/item/' + elem.id)}>
              <p className='text-md font-semibold text-gray-800 '>{elem.name}</p>
              <p className='text-dm font-light text-gray-700'>{elem.categoryName}</p>
            </div>
          ))}
        </div>
      }
    </div>
    </>
  );
}

export default Searchbar;
