import Api from './Api';
import Constants from './Constants';

const ITEM_URL = Constants.ITEM_URL;
const ALL_ITEMS_URL = ITEM_URL + '/all';
const ITEMS_PAGE_URL = ITEM_URL + '/page';
const ITEMS_USER_URL = ITEM_URL + '/my';

async function getItemsPage(page, size, sort, sortDir) {
  let data = {};
  try {
    const res = await Api.get(ITEMS_PAGE_URL, {
      params: {
        page,
        size,
        sort,
        sortDir
      }
    })
    data = res.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
  
  return data;
}

async function getItemsInCategoryPage(page, size, sort, sortDir, categoryId) {
  let data = {};
  try {
    const res = await Api.get(ITEM_URL + '/category/' + categoryId + '/page', {
      params: {
        page,
        size,
        sort,
        sortDir
      }
    })
    data = res.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
  
  return data;
}

async function getAllItems() {
  let itemArray = [];

  try {
    const res = await Api.get(ALL_ITEMS_URL);
    itemArray = res.data;
  } catch (error) {
    console.log(error);
  }

  // const res = await Api.get(ALL_ITEMS_URL)
  //   .catch(error => console.log(error));
  
  // itemArray = res.data;
  return itemArray;
}

async function getAllItemsForUser() {
  let itemArray = [];

  try {
    const res = await Api.get(ITEMS_USER_URL);
    itemArray = res.data;
  } catch (error) {
    console.log(error);
  }
  return itemArray;
}

async function getItemById(itemId) {
  let item; 
  
  const res = await Api.get(ITEM_URL + '/' + itemId)
    .catch(error => console.log(error));

  item = res.data;
  
  return item;
}

async function searchItemsByName(name) {
  let itemArray = [];
  
  const res = await Api.get(ITEM_URL + '/search/' + name)
    .catch(error => console.log(error));

  itemArray = res.data;
  return itemArray;
}

async function postItem(item, images) {
  const res = await Api.post(ITEM_URL, item)
    .catch(error => console.log(error));
  
  if (res.status !== 201) {
    console.error("Status: " + res.statusText);
    return;
  }

  const savedItem = res.data;

  //upload images
  for (const img of images) {
    let formData = new FormData();
    formData.append('imagefile', img);

    await Api.post('/product/' + savedItem.id + '/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
    }}).catch(error => console.log(error));
  }
}

async function deleteItemById(itemId) {
  await Api.delete(ITEM_URL + '/' + itemId)
    .catch(error => console.log(error));
}

const ItemService = {
  getAllItems,
  getAllItemsForUser,
  getItemById,
  searchItemsByName,
  deleteItemById,
  postItem,
  getItemsPage,
  getItemsInCategoryPage
}

export default ItemService;
