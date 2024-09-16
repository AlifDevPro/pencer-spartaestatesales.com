// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5starapi.nfshost.com/api', 
  withCredentials: true, 
});

export default api;
