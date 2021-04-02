import {PUBLIC_KEY} from 'react-native-dotenv';

import axios from 'axios';

const baseURL = 'https://gateway.marvel.com:443/';

const api = axios.create({
  baseURL,
  timeout: 7 * 1000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const newConfig = {...config};

  newConfig.params = {
    ...newConfig.params,
    apikey: PUBLIC_KEY || '',
  };
  return newConfig;
});

export default api;
