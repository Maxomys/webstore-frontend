import axios from "axios";
import Constants from "./Constants";
import TokenService from "./TokenService";

const LOGIN_URL = Constants.BASE_URL + Constants.LOGIN_URL;
const NEW_USER_URL = Constants.BASE_URL + Constants.NEW_USER_URL;

async function login(credentials) {
  
  try {
    const response = await axios.post(LOGIN_URL, credentials);

    if (response.data.accessToken && response.data.refreshToken) {
      TokenService.setAccessToken(response.data.accessToken);
      TokenService.setRefreshToken(response.data.refreshToken);
    }
  
  } catch (error) {
    return error;
  }
}

async function register(credentials) {
  try {
    const response = await axios.post(NEW_USER_URL, credentials);
    if (response.status != 201) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
}

function logout() {
  TokenService.removeTokens();
}

const AuthService = {
  login,
  logout,
  register
}

export default AuthService;
