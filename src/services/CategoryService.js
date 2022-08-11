import Api from './Api'
import Constants from './Constants';

const CATEGORY_URL = Constants.CATEGORY_URL;

async function getAllCategories() {
  let categories = [];

  const res = await Api.get(CATEGORY_URL + '/all')
    .catch(error => console.log(error));

  categories = res.data;

  return categories;
}

async function postNewCategory(category) {
  await Api.post(CATEGORY_URL, category)
    .catch(error => {
      console.log(error);
    });
}

async function deleteCategoryById(id) {
  await Api.delete(CATEGORY_URL + '/' + id)
    .catch(error => {
      console.log(error);
    })
}

const CategoryService = {
  getAllCategories,
  postNewCategory,
  deleteCategoryById
}

export default CategoryService;
