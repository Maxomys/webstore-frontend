import Api from './Api';

const ITEM_URL = '/product';
const ALL_ITEMS_URL = ITEM_URL + '/all';
const ITEMS_PAGE_URL = ITEM_URL + '/page';

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
  }
  
  return data;
}

async function getAllItems() {
  let itemArray = [];

  const res = await Api.get(ALL_ITEMS_URL)
    .catch(error => console.log(error));
  
  itemArray = res.data;
  return itemArray;
}

async function getItemById(itemId) {
  let item; 
  
  const res = await Api.get(ITEM_URL + '/' + itemId)
    .catch(error => console.log(error));

  item = res.data;
  
  return item;
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
  };
}

async function deleteItemById(itemId) {
  await Api.delete(ITEM_URL + '/' + itemId)
    .catch(error => console.log(error));
}

const ItemService = {
  getAllItems,
  getItemById,
  deleteItemById,
  postItem,
  getItemsPage
}

export default ItemService;
