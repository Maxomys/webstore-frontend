// const Constants = {
//   BASE_URL: 'http://localhost:8080/api',
//   LOGIN_URL: '/login',
//   REFRESH_TOKEN_URL: '/token/refresh',
//   IMAGE_URL: '/image'
// }

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
}

const Constants = new constants();

export default Constants;
