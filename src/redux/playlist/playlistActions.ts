import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST } from './playlistTypes';

export const addToPlaylist = (film: any) => (
  {
    type: ADD_TO_PLAYLIST,
    film
  }
);

export const removeFromPlaylist = (id: string) => (
  {
    type: REMOVE_FROM_PLAYLIST,
    id
  }
);
