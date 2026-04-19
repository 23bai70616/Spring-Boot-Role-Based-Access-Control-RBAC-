import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081/api',
});


// Add a request interceptor to add the auth header
api.interceptors.request.use(
  (config) => {
    const auth = sessionStorage.getItem('auth');
    if (auth) {
      config.headers.Authorization = `Basic ${auth}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
