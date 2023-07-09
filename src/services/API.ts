import axios, { AxiosInstance } from 'axios';

const API: AxiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
});

export default API;