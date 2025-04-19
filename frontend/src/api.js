import axios from 'axios';
import { ACCESS_TOKEN } from './constants';


const apiURL="https://4800b1fc-ba30-4d51-9d1e-d4ac122c6f03-dev.e1-us-east-azure.choreoapis.dev/notes-app/backend/v1"
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiURL,
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

export default api;