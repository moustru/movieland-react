import {
  all,
  put,
  call,
  takeEvery
} from 'redux-saga/effects';

import {
  REQUEST_POPULAR_FILMS,
  REQUEST_RELATED_FILM,
  REQUEST_TOP_RATED_FILMS,
  REQUEST_UPCOMING_FILMS
} from './filmsTypes';

import FilmsController from '../../controllers/FilmsController';
import {
  fetchPopularFilms,
  fetchRelatedFilm,
  fetchTopRatedFilms,
  fetchUpcomingFilms
} from './filmsActions';

/**
 * GET POPULAR
 */
function* workerGetPopularFilms() {
  const data = yield call(FilmsController.getPopularFilms);
  yield put(fetchPopularFilms(data.data));
}

function* watchGetPopularFilms() {
  yield takeEvery(REQUEST_POPULAR_FILMS, workerGetPopularFilms);
}

/**
 * GET RELATED
 */
function* workerGetRelatedFilm(action) {
  const data = yield call(FilmsController.getRelatedFilm, action.payload);
  yield put(fetchRelatedFilm(data.data));
}

function* watchGetRelatedFilm() {
  yield takeEvery(REQUEST_RELATED_FILM, workerGetRelatedFilm);
}

/**
 * GET TOP RATED
 */
function* workerGetTopRatedFilm() {
  const data = yield call(FilmsController.getTopRatedFilms);
  yield put(fetchTopRatedFilms(data.data));
}

function* watchGetTopRatedFilm() {
  yield takeEvery(REQUEST_TOP_RATED_FILMS, workerGetTopRatedFilm);
}

/**
 * GET UPCOMING
 */
function* workerGetUpcomingFilm() {
  const data = yield call(FilmsController.getUpcomingFilms);
  yield put(fetchUpcomingFilms(data.data));
}

function* watchGetUpcomingFilm() {
  yield takeEvery(REQUEST_UPCOMING_FILMS, workerGetUpcomingFilm);
}

export function* filmsSagas() {
  yield all([
    watchGetPopularFilms(),
    watchGetRelatedFilm(),
    watchGetTopRatedFilm(),
    watchGetUpcomingFilm()
  ]);
}
