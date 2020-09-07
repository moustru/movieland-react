import FilmsController from '../../controllers/FilmsController';
import { GET_FILMS } from './filmsTypes';

export const getFilms = () => async (dispatch) => {
  const { data } = await FilmsController.getFilms();

  dispatch({
    type: GET_FILMS,
    data: data.results
  });
};
