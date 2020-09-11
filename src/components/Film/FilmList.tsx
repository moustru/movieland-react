import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getPopularFilms, getTopRatedFilms, getUpcomingFilms } from '../../redux/films/filmsActions';
import { Tabs } from '../Tabs';

import FilmItem from './FilmItem';
import Playlist from '../Playlist/Playlist';
import PlaylistButton from '../Playlist/PlaylistButton';
import { Film } from '../../interfaces/Film';

const FilmListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  margin: 30px 0;
`;

export const FilmList = ({ match }: any) => {
  const films = useSelector((state) => state.films.films);
  const isPlaylist = useSelector((state) => state.playlist.isPlaylistVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (match.path) {
      case '/':
        dispatch(getPopularFilms());
        break;
      case '/top_rated':
        dispatch(getTopRatedFilms());
        break;
      case '/upcoming':
        dispatch(getUpcomingFilms());
        break;
      default:
        break;
    }
  }, []);

  return (
    <>
      <Tabs />
      <FilmListStyled>
        { films.map((film: Film) => <FilmItem key={film.id} film={film} />) }
        { isPlaylist && <Playlist /> }
        <PlaylistButton />
      </FilmListStyled>
    </>
  );
};
