function constants() {
  this.BASE_URL = function() {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:8080/api';
    } else {
      return process.env.REACT_APP_SERVER_URL;
    }
  };
  this.BASE_URL = this.BASE_URL();
  this.LOGIN_URL = '/login';
  this.REFRESH_TOKEN_URL = '/token/refresh';
  this.IMAGE_URL = '/image';
  this.CATEGORY_URL = '/category';
  this.ITEM_URL = '/product';
  this.MESSAGE_URL = '/inquiry';
  this.NEW_USER_URL = '/user';
  this.DEMO_USERNAME = 'demo';
}

const Constants = new constants();

export default Constants;
