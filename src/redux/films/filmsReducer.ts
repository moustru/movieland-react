import { GET_FILMS } from './filmsTypes';

const initialState = {
  films: []
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.data.sort((a, b) => b.popularity - a.popularity)
      };
    default:
      return state;
  }
};
