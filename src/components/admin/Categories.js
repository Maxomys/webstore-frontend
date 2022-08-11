import '../styles/categories.css';
import React, { useEffect, useState } from 'react';
import CategoryService from 'services/CategoryService';


function Categories() {
  
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newCategory, setNewCategory] = useState({
    description: ''
  });

  async function getCategories() {
    setCategories(await CategoryService.getAllCategories());
    setIsLoading(false);
  }

  async function handleDelete(category) {
    await CategoryService.deleteCategoryById(category.id);
    getCategories();
  }

  async function submitCategory(e) {
    e.preventDefault();
    await CategoryService.postNewCategory(newCategory);
    e.target.reset();
    getCategories();
  }

  useEffect(() => {
    getCategories();
  }, []);
  
  return (
    <div className='container-main'>
      <table className='Categories_table'>
        <thead>
          <tr>
            <th>
              Category
            </th>
            <th>
              Number of products
            </th>
            <th>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {categories && categories.map(category => (
            <tr key={category.id}>
              <td>
                {category.description}
              </td>
              <td>
                {category.productIds.length}
              </td>
              <td>
                <button className='btn Categories_btn-delete' onClick={() => handleDelete(category)}>
                  Delete
                </button>
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
      <form className='Categories_form' action='post' onSubmit={submitCategory}>
        <div className='Categories_category-input'>
          <label className='' htmlFor='category-imput'>Create new category</label>
          <input className='Categories_text-field' id='category-input' type='text' onChange={e => newCategory.description = e.target.value}/>
        </div>
        <button className='btn Categories_btn-submit' type='submit'>Add</button>
      </form>
    </div>
  );
}

export default Categories;
