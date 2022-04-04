import Api from './Api';

const ITEM_URL = '/product';
const ALL_ITEMS_URL = ITEM_URL + '/all';

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
  
}

async function deleteItemById(itemId) {
  await Api.delete(ITEM_URL + '/' + itemId)
    .catch(error => console.log(error));
}

const ItemService = {
  getAllItems,
  getItemById,
  deleteItemById
}

export default ItemService;
