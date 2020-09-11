import {
  GET_POPULAR_FILMS,
  GET_TOP_RATED_FILMS,
  GET_RELATED_FILM,
  CLEAR_FILM_DATA,
  GET_UPCOMING_FILMS
} from './filmsTypes';
import { FilmsStore } from '../../interfaces/Store';
import { Film } from '../../interfaces/Film';

const initialState: FilmsStore = {
  films: [],
  relatedFilm: {}
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_FILMS:
    case GET_TOP_RATED_FILMS:
    case GET_UPCOMING_FILMS:
      return {
        ...state,
        films: action.payload.sort((a: Film, b: Film) => b.vote_average - a.vote_average)
      };
    case GET_RELATED_FILM:
      return {
        ...state,
        relatedFilm: action.payload
      };
    case CLEAR_FILM_DATA:
      return {
        ...state,
        relatedFilm: {}
      };
    default:
      return state;
  }
};
