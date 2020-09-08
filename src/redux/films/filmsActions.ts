import FilmsController from '../../controllers/FilmsController';
import {
  GET_FILMS,
  GET_RELATED_FILM,
  GET_FILM_VIDEOS
} from './filmsTypes';

export const getFilms = () => async (dispatch) => {
  const { data } = await FilmsController.getFilms();

  dispatch({
    type: GET_FILMS,
    data: data.results
  });
};

export const getRelatedFilm = (id: string) => async (dispatch) => {
  const { data } = await FilmsController.getRelatedFilm(id);

  dispatch({
    type: GET_RELATED_FILM,
    data
  });
};

export const getFilmVideos = (id: string) => async (dispatch) => {
  const { data } = await FilmsController.getFilmVideos(id);

  dispatch({
    type: GET_FILM_VIDEOS,
    data
  });
};
