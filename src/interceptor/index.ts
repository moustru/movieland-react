import axios, { AxiosRequestConfig } from 'axios';

axios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const newConfig = config;
    newConfig.baseURL = 'https://api.themoviedb.org/3/discover/';

    return newConfig;
  }
);
