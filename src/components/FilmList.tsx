import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getFilms } from '../redux/films/filmsActions';

import FilmItem from './FilmItem';
import Playlist from './Playlist/Playlist';
import PlaylistButton from './Playlist/PlaylistButton';

const FilmListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 40px;
  width: 80%;
  margin: 30px auto;
`;

export const FilmList = () => {
  const films = useSelector((state) => state.films.films);
  const isPlaylist = useSelector((state) => state.playlist.isPlaylistVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  return (
    <FilmListStyled>
      { films.map((film: any) => <FilmItem key={film.id} film={film} />) }
      { isPlaylist ? <Playlist /> : null }
      <PlaylistButton />
    </FilmListStyled>
  );
};
