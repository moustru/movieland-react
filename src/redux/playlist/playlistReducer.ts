import {
  ADD_TO_PLAYLIST,
  REMOVE_FROM_PLAYLIST,
  TOGGLE_PLAYLIST
} from './playlistTypes';

const initialState = {
  playlist: [],
  isPlaylistVisible: false
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
    case TOGGLE_PLAYLIST:
      return {
        ...state,
        isPlaylistVisible: action.event
      };
    default:
      return state;
  }
};
