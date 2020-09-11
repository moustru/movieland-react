// import FilmsController from '../../controllers/FilmsController';
import {
  GET_POPULAR_FILMS,
  REQUEST_POPULAR_FILMS,
  GET_TOP_RATED_FILMS,
  GET_UPCOMING_FILMS,
  CLEAR_FILM_DATA,
  GET_RELATED_FILM,
  REQUEST_RELATED_FILM,
  REQUEST_TOP_RATED_FILMS,
  REQUEST_UPCOMING_FILMS
} from './filmsTypes';

export const getPopularFilms = () => (
  {
    type: REQUEST_POPULAR_FILMS
  }
);

export const fetchPopularFilms = (data) => (
  {
    type: GET_POPULAR_FILMS,
    payload: data.results
  }
);

export const getRelatedFilm = (id: string) => (
  {
    type: REQUEST_RELATED_FILM,
    payload: id
  }
);

export const fetchRelatedFilm = (data) => (
  {
    type: GET_RELATED_FILM,
    payload: data
  }
);

export const getTopRatedFilms = () => (
  {
    type: REQUEST_TOP_RATED_FILMS
  }
);

export const fetchTopRatedFilms = (data) => (
  {
    type: GET_TOP_RATED_FILMS,
    payload: data.results
  }
);

export const getUpcomingFilms = () => (
  {
    type: REQUEST_UPCOMING_FILMS
  }
);

export const fetchUpcomingFilms = (data) => (
  {
    type: GET_UPCOMING_FILMS,
    payload: data.results
  }
);

export const clearFilmData = () => (
  {
    type: CLEAR_FILM_DATA
  }
);
