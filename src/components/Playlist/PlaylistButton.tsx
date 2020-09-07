import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { togglePlaylist } from '../../redux/playlist/playlistActions';

const PlaylistButtonStyled = styled.div`
  position: fixed;
  bottom: 5%;
  right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #a5a5a5;
  transition: all 0.2s ease;
  cursor: pointer;
  user-select: none;

  &:hover {
    transform: scale(1.05);
  }

  i {
    font-size: 36px;
  }

  .films-counter {
    position: absolute;
    bottom: 0;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    font-size: 14px;
    font-weight: 800;
    background-color: #fff;
    border-radius: 50%;
  }
`;

const PlaylistButton = () => {
  const dispatch = useDispatch();

  return (
    <PlaylistButtonStyled onClick={() => dispatch(togglePlaylist(true))}>
      <i className="material-icons">playlist_add_check</i>
      <div className="films-counter">0</div>
    </PlaylistButtonStyled>
  );
};

export default PlaylistButton;
