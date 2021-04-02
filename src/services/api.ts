import {PUBLIC_KEY, PRIVATE_KEY} from 'react-native-dotenv';

import axios from 'axios';
import {getTime} from 'date-fns';
import md5 from 'md5';

const baseURL = 'https://gateway.marvel.com/';

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

  const ts = getTime(new Date());

  newConfig.params = {
    ...newConfig.params,
    apikey: PUBLIC_KEY || '',
    ts,
    hash: md5(ts + PRIVATE_KEY + PUBLIC_KEY),
  };
  return newConfig;
});

export default api;
