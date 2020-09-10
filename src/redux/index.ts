import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { rootReducer } from './rootReducer';
import { filmsSagas } from './films/filmsSagas';

function* rootSaga() {
  yield all([
    filmsSagas
  ]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const action = (type) => store.dispatch({ type });
