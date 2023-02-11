import axios from 'axios';
import { API_KEY } from '@api/config';

export const weatherClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
    params: {
        appid: API_KEY,
    }
});

export const geoClient = axios.create({
    baseURL: 'http://api.openweathermap.org/geo/1.0/direct',
    params: {
        appid: API_KEY,
        limit: 5,
    }
});

