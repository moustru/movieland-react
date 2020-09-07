import axios from 'axios';
import { API_KEY } from './constants';

export default class FilmsController {
  static getFilms() {
    return axios.get('movie', {
      params: {
        page: 1,
        sort_by: 'popularity.desc',
        api_key: API_KEY,
        language: 'ru-RU',
      },
    });
  }
}
