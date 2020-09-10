import FilmsController from '../../controllers/FilmsController';
import {
  GET_POPULAR_FILMS,
  REQUEST_POPULAR_FILMS,
  GET_TOP_RATED_FILMS,
  GET_UPCOMING_FILMS,
  CLEAR_FILM_DATA,
  GET_RELATED_FILM,
  GET_FILM_VIDEOS
} from './filmsTypes';

export const getPopularFilms = () => (
  {
    type: REQUEST_POPULAR_FILMS
  }
);

export const fetchPopularFilms = (data) => (
  {
    type: GET_POPULAR_FILMS,
    data: data.results
  }
);

// export const getPopularFilms = () => async (dispatch) => {
//   const { data } = await FilmsController.getPopularFilms();

//   dispatch({
//     type: GET_POPULAR_FILMS,
//     data: data.results
//   });
// };

export const getTopRatedFilms = () => async (dispatch) => {
  const { data } = await FilmsController.getTopRatedFilms();

  dispatch({
    type: GET_TOP_RATED_FILMS,
    data: data.results
  });
};

export const getUpcomingFilms = () => async (dispatch) => {
  const { data } = await FilmsController.getUpcomingFilms();

  dispatch({
    type: GET_UPCOMING_FILMS,
    data: data.results
  });
};

export const clearFilmData = () => (
  {
    type: CLEAR_FILM_DATA
  }
);

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
