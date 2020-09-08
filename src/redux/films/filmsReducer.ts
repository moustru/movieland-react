import {
  GET_POPULAR_FILMS,
  GET_TOP_RATED_FILMS,
  GET_RELATED_FILM,
  GET_FILM_VIDEOS,
  GET_UPCOMING_FILMS
} from './filmsTypes';
import { FilmsStore } from '../../interfaces/Store';
import { Film } from '../../interfaces/Film';

const initialState: FilmsStore = {
  films: [],
  relatedFilm: {},
  videos: {}
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_FILMS:
    case GET_TOP_RATED_FILMS:
    case GET_UPCOMING_FILMS:
      return {
        ...state,
        films: action.data.sort((a: Film, b: Film) => b.vote_average - a.vote_average)
      };
    case GET_RELATED_FILM:
      return {
        ...state,
        relatedFilm: action.data
      };
    case GET_FILM_VIDEOS:
      return {
        ...state,
        videos: action.data
      };
    default:
      return state;
  }
};
