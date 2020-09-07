import React from 'react';
import styled from 'styled-components';
import FilmItem from './FilmItem';
// import Playlist from './Playlist/Playlist';
import PlaylistButton from './Playlist/PlaylistButton';

const FilmListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 40px;
  width: 80%;
  margin: 30px auto;
`;

const FilmList = () => {
  return (
    <FilmListStyled>
      <FilmItem />
      <FilmItem />
      <FilmItem />
      <FilmItem />
      <FilmItem />
      <FilmItem />
      <FilmItem />
      {/* <Playlist /> */}
      <PlaylistButton />
    </FilmListStyled>
  );
};

export default FilmList;
