import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CategoriesDropdown from './CategoriesDropdown';
import SortDropdown from './SortDropdown';
import ItemService from 'services/ItemService';
import Pagination from './Pagination';
import ItemCard from './ItemCard';
import CategoryService from "services/CategoryService";
import PageSizeDropdown from "./PageSizeDropdown";
import { useParams } from 'react-router-dom';

function AllItems() {

  let params = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(4);
  const [sort, setSort] = useState('name');
  const [sortDir, setSortDir] = useState('asc');
  const [categories, setCategories] = useState([]);

  async function getPage(pageNr) {
    setIsLoading(true);
    
    let page1;
    let categoryId;

    if (params.categoryId) {
      categoryId = parseInt(params.categoryId);
    }

    if (categoryId) {
      page1 = await ItemService.getItemsInCategoryPage(pageNr, pageSize, sort, sortDir, categoryId);
    } else {
      page1 = await ItemService.getItemsPage(pageNr, pageSize, sort, sortDir);
    }

    if (page1 === undefined) {
      return;
    }
    setPage(page1);
    setCurrentPage(page1.number);
    
    setIsLoading(false);
  }

  async function getCategories() {
    setCategories(await CategoryService.getAllCategories());
  }

  useEffect(() => {
    getPage(currentPage);
  }, [currentPage, sort, sortDir, pageSize, params]);

  useEffect(() => {
    getCategories();
  }, []);

  function onPageSizeChange(pSize) {
    setCurrentPage(0);
    setPageSize(pSize);
  }

  return ( 
    <React.Fragment>
      <Navbar currentTab={'Items'}/>
      <div className='flex flex-col mx-auto mt-10 md:mt-20 max-w-6xl'>
        <div className='mx-5'>
          <h2 className='text-3xl font-medium text-black/70 font-sans'>
            All items
          </h2>
          <hr className='my-2'/>
          <div className='flex flex-row  md:gap-4 items-center'>
            <CategoriesDropdown categories={categories} onCategoryChange={0}/>
            <SortDropdown sort={sort} sortDir={sortDir} onSortChange={sort => setSort(sort)} onDirectionChange={dir => setSortDir(dir)}/>
            <PageSizeDropdown pageSize={pageSize} onPageSizeChange={pSize => onPageSizeChange(pSize)}/>
          </div>
        </div>
        {isLoading ? 
          <svg className="animate-spin -ml-1 mr-3 self-center mt-6 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="black" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          : 
          <div className='w-max self-center mt-6 grid md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {page && page.content.map(item => (
              <ItemCard key={item.id} item={item}/>
            ))}
          </div>
        }
        <Pagination currentPage={currentPage} totalPages={page.totalPages} onPageChange={p => setCurrentPage(p)}/>
      </div>
    </React.Fragment>
  );
}

export default AllItems;
