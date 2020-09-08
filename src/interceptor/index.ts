import axios, { AxiosRequestConfig } from 'axios';

axios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const newConfig: AxiosRequestConfig = config;
    newConfig.baseURL = 'https://api.themoviedb.org/3';

    return newConfig;
  }
);
