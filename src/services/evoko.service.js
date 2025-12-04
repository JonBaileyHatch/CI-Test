import axios from 'axios';
import evokoConfig from '../config/evoko.config.js';

let cachedToken = null;
let tokenExpiry = null;

async function getAccessToken() {
  const now = Date.now();

  if (cachedToken && tokenExpiry && now < tokenExpiry) {
    return cachedToken;
  }

  const url = `${evokoConfig.baseUrl}${evokoConfig.tokenEndpoint}`;

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', evokoConfig.clientId);
  params.append('client_secret', evokoConfig.clientSecret);

  const response = await axios.post(url, params);

  cachedToken = response.data.access_token;
  tokenExpiry = now + response.data.expires_in * 1000 - 30000; // refresh 30s early

  return cachedToken;
}

async function evokoRequest(method, endpoint, data = {}) {
  const token = await getAccessToken();

  const url = `${evokoConfig.baseUrl}${endpoint}`;

  const config = {
    method,
    url,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };

  const response = await axios(config);
  return response.data;
}

export default {
  getAccessToken,
  evokoRequest
};
