import axios from "axios";
import TokenService from "./TokenService";

const LOGIN_URL = 'http://localhost:8080/api/login'

async function login(username, password) {
  
  try {
    const response = await axios.post(LOGIN_URL, {}, {
      params: {
        'username': username,
        'password': password
      }
    });

    if (response.data.accessToken && response.data.refreshToken) {
      TokenService.setAccessToken(response.data.accessToken);
      TokenService.setRefreshToken(response.data.refreshToken);
    }
  
  } catch (error) {
    console.log(error);
  }
}

const AuthService = {
  login
}

export default AuthService;
