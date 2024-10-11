import axios from 'axios';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://192.168.2.131:3000/api',
  timeout: 2000,
});

export default client;
