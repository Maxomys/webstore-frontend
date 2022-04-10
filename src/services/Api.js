import axios from "axios";
import TokenService from "./TokenService";
import Constants from "./Constants";


const instance = axios.create({
  baseURL: Constants.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

//set authorization header for each request
instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getAccessToken();
    
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
  }, (error) => {
    return Promise.reject(error);
  }
);

//refresh the token
instance.interceptors.response.use(
  (response) => {
    return response;
  }, 
  async (error) => {
    const originalConfig = error.config;
    
    //
    if (error.response.status !== 401 || originalConfig.url === Constants.LOGIN_URL || originalConfig._retry) {
      return Promise.reject(error);
    }
        
    originalConfig._retry = true;

    try {
      const refreshToken = TokenService.getRefreshToken();
      const res = await axios.get(Constants.BASE_URL + Constants.REFRESH_TOKEN_URL, {
        headers: {
          'Authorization': `Bearer ${refreshToken}`
        }
      });
      
      const freshAccessToken = res.data.accessToken;
      const freshRefreshToken = res.data.refreshToken;

      TokenService.setAccessToken(freshAccessToken);
      TokenService.setRefreshToken(freshRefreshToken);

      return instance(originalConfig);
    } catch (_error) {
      return Promise.reject(_error);
    }
  }
);

export default instance;
