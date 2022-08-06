import axios from 'axios';
import {API_TOKEN, API_URL} from '@env';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'x-api-key': API_TOKEN,
  },
});

export default api;
