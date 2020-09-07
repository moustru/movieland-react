import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PlaylistItem from './PlaylistItem';
import { togglePlaylist } from '../../redux/playlist/playlistActions';

const PlaylistOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

const PlaylistStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 35%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow-y: auto;
  z-index: 4;

  h1 {
    position: sticky;
    top: 0;
    margin: 10px 0;
    font-size: 56px;
    color: #fff;
    text-align: center;
  }
`;

const Playlist = () => {
  const dispatch = useDispatch();

  const cancel = (e) => {
    e.stopPropagation();
  };

  return (
    <PlaylistOverlay onClick={() => dispatch(togglePlaylist(false))}>
      <PlaylistStyled onClick={(e) => cancel(e)}>
        <h1>Плейлист</h1>
        <PlaylistItem />
      </PlaylistStyled>
    </PlaylistOverlay>
  );
};

export default Playlist;
