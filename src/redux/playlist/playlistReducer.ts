import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST } from './playlistTypes';

const initialState = {
  playlist: []
};

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        playlist: [ ...state.playlist, action.film ]
      };
    case REMOVE_FROM_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.filter((id: string) => id !== action.id)
      };
    default:
      return state;
  }
};
