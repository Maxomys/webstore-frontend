import axios from "axios";
import TokenService from "./TokenService";

const LOGIN_URL = 'http://localhost:8080/api/login'

async function login(credentials) {
  
  try {
    const response = await axios.post(LOGIN_URL, credentials);

    if (response.data.accessToken && response.data.refreshToken) {
      TokenService.setAccessToken(response.data.accessToken);
      TokenService.setRefreshToken(response.data.refreshToken);
    }
  
  } catch (error) {
    console.log(error);
  }
}

function logout() {
  TokenService.removeTokens();
}

const AuthService = {
  login,
  logout
}

export default AuthService;
