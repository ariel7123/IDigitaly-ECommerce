// client/src/services/api.ts - Axios instance configuration
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

// Create Axios instance
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Important for cookies!
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add any request modifications here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - could redirect to login
      console.log('Unauthorized request');
    }
    return Promise.reject(error);
  }
);

export default api;
