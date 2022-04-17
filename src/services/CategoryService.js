import Api from './Api'
import Constants from './Constants';

const CATEGORY_URL = Constants.CATEGORY_URL;

async function getAllCategories() {
  let categories = [];

  const res = await Api.get(CATEGORY_URL + "/all")
    .catch(error => console.log(error));

  categories = res.data;

  return categories;
}

async function postNewCategory(category) {
  await Api.post('', category)
    .catch(error => {
      console.log(error);
    });
}

const CategoryService = {
  getAllCategories,
  postNewCategory
}

export default CategoryService;
