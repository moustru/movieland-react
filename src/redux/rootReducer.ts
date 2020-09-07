import { combineReducers } from 'redux';
import { filmsReducer } from './films/filmsReducer';
import { playlistReducer } from './playlist/playlistReducer';

export const rootReducer = combineReducers({
  films: filmsReducer,
  playlist: playlistReducer
});
