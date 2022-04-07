function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function setAccessToken(token) {
  localStorage.setItem('accessToken', token);
  localStorage.setItem('username', getUsernameFromToken(token));
}

function getRefreshToken() {
  return localStorage.getItem('refreshToken');
}

function setRefreshToken(token) {
  localStorage.setItem('refreshToken', token);
}

function removeTokens() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('username');
}

function getUsernameFromToken(token) {
	let base64 = token.split('.')[1];
  let jsonString = decodeURIComponent(atob(base64));
  let jsonData = JSON.parse(jsonString);
  return jsonData.sub;
}

const TokenService = {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
  removeTokens
}

export default TokenService;
