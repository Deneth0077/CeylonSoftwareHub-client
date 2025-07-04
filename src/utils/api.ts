import axios from 'axios';

// IMPORTANT: Set VITE_API_URL in your frontend environment variables to the deployed backend URL (e.g., https://your-backend.onrender.com)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    // Only add Authorization header for non-Cloudinary requests
    if (token && !(config.url && config.url.includes('cloudinary.com'))) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    } else if (config.url && config.url.includes('cloudinary.com')) {
      // Remove Authorization header if present
      if (config.headers && config.headers.Authorization) {
        delete config.headers.Authorization;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
