import axios from 'axios';
import { API_KEY } from './constants';

const params = {
  api_key: API_KEY,
  language: 'ru-RU'
};

export default class FilmsController {
  static getPopularFilms(): Promise<any> {
    return axios.get('movie/popular', {
      params: {
        ...params,
        page: 1,
        sort_by: 'popularity.desc'
      },
    });
  }

  static getTopRatedFilms(): Promise<any> {
    return axios.get('movie/top_rated', {
      params: {
        ...params,
        page: 1
      }
    });
  }

  static getUpcomingFilms(): Promise<any> {
    return axios.get('movie/upcoming', {
      params: {
        ...params,
        page: 1
      }
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
