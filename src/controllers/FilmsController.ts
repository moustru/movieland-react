import axios from 'axios';
import { API_KEY } from './constants';

const params = {
  api_key: API_KEY,
  language: 'ru-RU'
}

export default class FilmsController {
  static getFilms(): Promise<any> {
    return axios.get('discover/movie', {
      params: {
        ...params,
        page: 1,
        sort_by: 'popularity.desc'
      },
    });
  }

  static getRelatedFilm(id: string): Promise<any> {
    return axios.get(`movie/${id}`, {
      params
    });
  }

  static getFilmVideos(id: string): Promise<any> {
    return axios.get(`movie/${id}/videos`, {
      params
    });
  }
}
