import {
  all,
  put,
  call,
  takeEvery
} from 'redux-saga/effects';
import { REQUEST_POPULAR_FILMS } from './filmsTypes';
import FilmsController from '../../controllers/FilmsController';
import { fetchPopularFilms } from './filmsActions';

function* workerGetPopularFilms() {
  const data = call(FilmsController.getPopularFilms);

  yield put(fetchPopularFilms(data));
}

function* watchGetPopularFilms() {
  yield takeEvery(REQUEST_POPULAR_FILMS, workerGetPopularFilms);
}

export function* filmsSagas() {
  yield all([
    watchGetPopularFilms
  ]);
}
