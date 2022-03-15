import Api from './Api';

const ITEM_URL = '/product';
const ALL_ITEMS_URL = ITEM_URL + '/all';

async function getAllItems() {
  let itemArray = [];

  await Api.get(ALL_ITEMS_URL)
    .then(response => {
      itemArray = response.data;
    }).catch(error => {
      console.log(error);
    });

  return itemArray;
}

async function getItemById(itemId) {
  let item;

  Api.get(ITEM_URL + '/' + itemId)
    .then(response => {
      item = response.data;
    }).catch(error => {
      console.log(error);
    });

  return item;
}

async function deleteItemById(itemId) {
  Api.delete(ITEM_URL + '/' + itemId)
    .catch(error => {
      console.log(error);
    });
}

const ItemService = {
  getAllItems,
  getItemById,
  deleteItemById
}

export default ItemService;
