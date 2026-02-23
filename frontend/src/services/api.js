import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    // Using the proxy configured in vite.config.js
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to attach the auth token if available
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('booking_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor for handling common errors globally
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // e.g., Token expired, redirect to login or clear token
            // localStorage.removeItem('booking_token');
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
