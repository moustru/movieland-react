import { Film } from './Film';

export interface FilmsStore {
  films: Array<Film>;
  relatedFilm: Film | Object;
}

export interface PlaylistStore {
  playlist: Array<Film>;
  isPlaylistVisible: boolean;
}
